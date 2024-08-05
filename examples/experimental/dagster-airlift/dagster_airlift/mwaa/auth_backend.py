from typing import Optional, Tuple

import boto3
import requests

from ..airflow_utils import AirflowAuthBackend


def get_session_info(region: str, env_name: str) -> Tuple[str, str]:
    # Initialize MWAA client and request a web login token
    mwaa = boto3.client("mwaa", region_name=region)
    response = mwaa.create_web_login_token(Name=env_name)

    # Extract the web server hostname and login token
    web_server_host_name = response["WebServerHostname"]
    web_token = response["WebToken"]

    # Construct the URL needed for authentication
    login_url = f"https://{web_server_host_name}/aws_mwaa/login"
    login_payload = {"token": web_token}

    # Make a POST request to the MWAA login url using the login payload
    response = requests.post(login_url, data=login_payload, timeout=10)

    # Check if login was succesfull
    if response.status_code == 200:
        # Return the hostname and the session cookie
        return (web_server_host_name, response.cookies["session"])
    else:
        raise Exception(f"Failed to get session info: {response.text}")


class MwaaSessionAuthBackend(AirflowAuthBackend):
    def __init__(self, region: str, env_name: str):
        self.region = region
        self.env_name = env_name
        # Session info is generated when we either try to retrieve a session or retrieve the web server url
        self._session_info: Optional[Tuple[str, str]] = None

    def get_session(self) -> requests.Session:
        # Get the session info
        if not self._session_info:
            self._session_info = get_session_info(self.region, self.env_name)
        session_cookie = self._session_info[1]
        # Create a new session
        session = requests.Session()
        session.cookies.set("session", session_cookie)

        # Return the session
        return session

    def get_webserver_url(self) -> str:
        if not self._session_info:
            self._session_info = get_session_info(self.region, self.env_name)
        return f"https://{self._session_info[0]}"
