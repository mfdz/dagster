// Generated from /Users/marcosalazar/code/dagster/python_modules/dagster/dagster/_core/definitions/antlr_asset_selection/AssetSelection.g4 by ANTLR 4.9.0-SNAPSHOT

import {CharStream} from 'antlr4ts/CharStream';
import {Lexer} from 'antlr4ts/Lexer';
import {Vocabulary} from 'antlr4ts/Vocabulary';
import {VocabularyImpl} from 'antlr4ts/VocabularyImpl';
import {ATN} from 'antlr4ts/atn/ATN';
import {ATNDeserializer} from 'antlr4ts/atn/ATNDeserializer';
import {LexerATNSimulator} from 'antlr4ts/atn/LexerATNSimulator';
import * as Utils from 'antlr4ts/misc/Utils';

export class AssetSelectionLexer extends Lexer {
  public static readonly EQUAL = 1;
  public static readonly AND = 2;
  public static readonly OR = 3;
  public static readonly NOT = 4;
  public static readonly STAR = 5;
  public static readonly PLUS = 6;
  public static readonly DIGITS = 7;
  public static readonly COLON = 8;
  public static readonly LPAREN = 9;
  public static readonly RPAREN = 10;
  public static readonly COMMA = 11;
  public static readonly KEY = 12;
  public static readonly OWNER = 13;
  public static readonly GROUP = 14;
  public static readonly TAG = 15;
  public static readonly KIND = 16;
  public static readonly CODE_LOCATION = 17;
  public static readonly COLUMN = 18;
  public static readonly TABLE_NAME = 19;
  public static readonly COLUMN_TAG = 20;
  public static readonly CHANGED_IN_BRANCH = 21;
  public static readonly SINKS = 22;
  public static readonly ROOTS = 23;
  public static readonly QUOTED_STRING = 24;
  public static readonly UNQUOTED_STRING = 25;
  public static readonly UNQUOTED_REGEX_STRING = 26;
  public static readonly WS = 27;

  // tslint:disable:no-trailing-whitespace
  public static readonly channelNames: string[] = ['DEFAULT_TOKEN_CHANNEL', 'HIDDEN'];

  // tslint:disable:no-trailing-whitespace
  public static readonly modeNames: string[] = ['DEFAULT_MODE'];

  public static readonly ruleNames: string[] = [
    'EQUAL',
    'AND',
    'OR',
    'NOT',
    'STAR',
    'PLUS',
    'DIGITS',
    'COLON',
    'LPAREN',
    'RPAREN',
    'COMMA',
    'KEY',
    'OWNER',
    'GROUP',
    'TAG',
    'KIND',
    'CODE_LOCATION',
    'COLUMN',
    'TABLE_NAME',
    'COLUMN_TAG',
    'CHANGED_IN_BRANCH',
    'SINKS',
    'ROOTS',
    'QUOTED_STRING',
    'UNQUOTED_STRING',
    'UNQUOTED_REGEX_STRING',
    'WS',
  ];

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    "'='",
    "'and'",
    "'or'",
    "'not'",
    "'*'",
    "'+'",
    undefined,
    "':'",
    "'('",
    "')'",
    "','",
    "'key'",
    "'owner'",
    "'group'",
    "'tag'",
    "'kind'",
    "'code_location'",
    "'column'",
    "'table_name'",
    "'column_tag'",
    "'changed_in_branch'",
    "'sinks'",
    "'roots'",
  ];
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined,
    'EQUAL',
    'AND',
    'OR',
    'NOT',
    'STAR',
    'PLUS',
    'DIGITS',
    'COLON',
    'LPAREN',
    'RPAREN',
    'COMMA',
    'KEY',
    'OWNER',
    'GROUP',
    'TAG',
    'KIND',
    'CODE_LOCATION',
    'COLUMN',
    'TABLE_NAME',
    'COLUMN_TAG',
    'CHANGED_IN_BRANCH',
    'SINKS',
    'ROOTS',
    'QUOTED_STRING',
    'UNQUOTED_STRING',
    'UNQUOTED_REGEX_STRING',
    'WS',
  ];
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
    AssetSelectionLexer._LITERAL_NAMES,
    AssetSelectionLexer._SYMBOLIC_NAMES,
    [],
  );

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return AssetSelectionLexer.VOCABULARY;
  }
  // tslint:enable:no-trailing-whitespace

  constructor(input: CharStream) {
    super(input);
    this._interp = new LexerATNSimulator(AssetSelectionLexer._ATN, this);
  }

  // @Override
  public get grammarFileName(): string {
    return 'AssetSelection.g4';
  }

  // @Override
  public get ruleNames(): string[] {
    return AssetSelectionLexer.ruleNames;
  }

  // @Override
  public get serializedATN(): string {
    return AssetSelectionLexer._serializedATN;
  }

  // @Override
  public get channelNames(): string[] {
    return AssetSelectionLexer.channelNames;
  }

  // @Override
  public get modeNames(): string[] {
    return AssetSelectionLexer.modeNames;
  }

  public static readonly _serializedATN: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x1D\xD7\b\x01' +
    '\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06' +
    '\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r' +
    '\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t' +
    '\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t' +
    '\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t' +
    '\x1C\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03' +
    '\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03' +
    '\b\x06\bL\n\b\r\b\x0E\bM\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03' +
    '\f\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03' +
    '\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03' +
    '\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03' +
    '\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03' +
    '\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03' +
    '\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03' +
    '\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03' +
    '\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03' +
    '\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03' +
    '\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03' +
    '\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03' +
    '\x19\x07\x19\xBC\n\x19\f\x19\x0E\x19\xBF\v\x19\x03\x19\x03\x19\x03\x1A' +
    '\x03\x1A\x07\x1A\xC5\n\x1A\f\x1A\x0E\x1A\xC8\v\x1A\x03\x1B\x03\x1B\x07' +
    '\x1B\xCC\n\x1B\f\x1B\x0E\x1B\xCF\v\x1B\x03\x1C\x06\x1C\xD2\n\x1C\r\x1C' +
    '\x0E\x1C\xD3\x03\x1C\x03\x1C\x02\x02\x02\x1D\x03\x02\x03\x05\x02\x04\x07' +
    '\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15' +
    '\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02' +
    "\x12#\x02\x13%\x02\x14'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191" +
    '\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D\x03\x02\t\x03\x022;\x06\x02\f\f\x0F' +
    '\x0F$$^^\x05\x02C\\aac|\x06\x022;C\\aac|\x06\x02,,C\\aac|\x07\x02,,2;' +
    'C\\aac|\x05\x02\v\f\x0F\x0F""\x02\xDB\x02\x03\x03\x02\x02\x02\x02\x05' +
    '\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03' +
    '\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03' +
    '\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03' +
    '\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03' +
    '\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02' +
    "\x02\x02\x02%\x03\x02\x02\x02\x02'\x03\x02\x02\x02\x02)\x03\x02\x02\x02" +
    '\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03' +
    '\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02' +
    '\x02\x039\x03\x02\x02\x02\x05;\x03\x02\x02\x02\x07?\x03\x02\x02\x02\t' +
    'B\x03\x02\x02\x02\vF\x03\x02\x02\x02\rH\x03\x02\x02\x02\x0FK\x03\x02\x02' +
    '\x02\x11O\x03\x02\x02\x02\x13Q\x03\x02\x02\x02\x15S\x03\x02\x02\x02\x17' +
    'U\x03\x02\x02\x02\x19W\x03\x02\x02\x02\x1B[\x03\x02\x02\x02\x1Da\x03\x02' +
    '\x02\x02\x1Fg\x03\x02\x02\x02!k\x03\x02\x02\x02#p\x03\x02\x02\x02%~\x03' +
    "\x02\x02\x02'\x85\x03\x02\x02\x02)\x90\x03\x02\x02\x02+\x9B\x03\x02\x02" +
    '\x02-\xAD\x03\x02\x02\x02/\xB3\x03\x02\x02\x021\xB9\x03\x02\x02\x023\xC2' +
    '\x03\x02\x02\x025\xC9\x03\x02\x02\x027\xD1\x03\x02\x02\x029:\x07?\x02' +
    '\x02:\x04\x03\x02\x02\x02;<\x07c\x02\x02<=\x07p\x02\x02=>\x07f\x02\x02' +
    '>\x06\x03\x02\x02\x02?@\x07q\x02\x02@A\x07t\x02\x02A\b\x03\x02\x02\x02' +
    'BC\x07p\x02\x02CD\x07q\x02\x02DE\x07v\x02\x02E\n\x03\x02\x02\x02FG\x07' +
    ',\x02\x02G\f\x03\x02\x02\x02HI\x07-\x02\x02I\x0E\x03\x02\x02\x02JL\t\x02' +
    '\x02\x02KJ\x03\x02\x02\x02LM\x03\x02\x02\x02MK\x03\x02\x02\x02MN\x03\x02' +
    '\x02\x02N\x10\x03\x02\x02\x02OP\x07<\x02\x02P\x12\x03\x02\x02\x02QR\x07' +
    '*\x02\x02R\x14\x03\x02\x02\x02ST\x07+\x02\x02T\x16\x03\x02\x02\x02UV\x07' +
    '.\x02\x02V\x18\x03\x02\x02\x02WX\x07m\x02\x02XY\x07g\x02\x02YZ\x07{\x02' +
    '\x02Z\x1A\x03\x02\x02\x02[\\\x07q\x02\x02\\]\x07y\x02\x02]^\x07p\x02\x02' +
    '^_\x07g\x02\x02_`\x07t\x02\x02`\x1C\x03\x02\x02\x02ab\x07i\x02\x02bc\x07' +
    't\x02\x02cd\x07q\x02\x02de\x07w\x02\x02ef\x07r\x02\x02f\x1E\x03\x02\x02' +
    '\x02gh\x07v\x02\x02hi\x07c\x02\x02ij\x07i\x02\x02j \x03\x02\x02\x02kl' +
    '\x07m\x02\x02lm\x07k\x02\x02mn\x07p\x02\x02no\x07f\x02\x02o"\x03\x02' +
    '\x02\x02pq\x07e\x02\x02qr\x07q\x02\x02rs\x07f\x02\x02st\x07g\x02\x02t' +
    'u\x07a\x02\x02uv\x07n\x02\x02vw\x07q\x02\x02wx\x07e\x02\x02xy\x07c\x02' +
    '\x02yz\x07v\x02\x02z{\x07k\x02\x02{|\x07q\x02\x02|}\x07p\x02\x02}$\x03' +
    '\x02\x02\x02~\x7F\x07e\x02\x02\x7F\x80\x07q\x02\x02\x80\x81\x07n\x02\x02' +
    '\x81\x82\x07w\x02\x02\x82\x83\x07o\x02\x02\x83\x84\x07p\x02\x02\x84&\x03' +
    '\x02\x02\x02\x85\x86\x07v\x02\x02\x86\x87\x07c\x02\x02\x87\x88\x07d\x02' +
    '\x02\x88\x89\x07n\x02\x02\x89\x8A\x07g\x02\x02\x8A\x8B\x07a\x02\x02\x8B' +
    '\x8C\x07p\x02\x02\x8C\x8D\x07c\x02\x02\x8D\x8E\x07o\x02\x02\x8E\x8F\x07' +
    'g\x02\x02\x8F(\x03\x02\x02\x02\x90\x91\x07e\x02\x02\x91\x92\x07q\x02\x02' +
    '\x92\x93\x07n\x02\x02\x93\x94\x07w\x02\x02\x94\x95\x07o\x02\x02\x95\x96' +
    '\x07p\x02\x02\x96\x97\x07a\x02\x02\x97\x98\x07v\x02\x02\x98\x99\x07c\x02' +
    '\x02\x99\x9A\x07i\x02\x02\x9A*\x03\x02\x02\x02\x9B\x9C\x07e\x02\x02\x9C' +
    '\x9D\x07j\x02\x02\x9D\x9E\x07c\x02\x02\x9E\x9F\x07p\x02\x02\x9F\xA0\x07' +
    'i\x02\x02\xA0\xA1\x07g\x02\x02\xA1\xA2\x07f\x02\x02\xA2\xA3\x07a\x02\x02' +
    '\xA3\xA4\x07k\x02\x02\xA4\xA5\x07p\x02\x02\xA5\xA6\x07a\x02\x02\xA6\xA7' +
    '\x07d\x02\x02\xA7\xA8\x07t\x02\x02\xA8\xA9\x07c\x02\x02\xA9\xAA\x07p\x02' +
    '\x02\xAA\xAB\x07e\x02\x02\xAB\xAC\x07j\x02\x02\xAC,\x03\x02\x02\x02\xAD' +
    '\xAE\x07u\x02\x02\xAE\xAF\x07k\x02\x02\xAF\xB0\x07p\x02\x02\xB0\xB1\x07' +
    'm\x02\x02\xB1\xB2\x07u\x02\x02\xB2.\x03\x02\x02\x02\xB3\xB4\x07t\x02\x02' +
    '\xB4\xB5\x07q\x02\x02\xB5\xB6\x07q\x02\x02\xB6\xB7\x07v\x02\x02\xB7\xB8' +
    '\x07u\x02\x02\xB80\x03\x02\x02\x02\xB9\xBD\x07$\x02\x02\xBA\xBC\n\x03' +
    '\x02\x02\xBB\xBA\x03\x02\x02\x02\xBC\xBF\x03\x02\x02\x02\xBD\xBB\x03\x02' +
    '\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xC0\x03\x02\x02\x02\xBF\xBD\x03\x02' +
    '\x02\x02\xC0\xC1\x07$\x02\x02\xC12\x03\x02\x02\x02\xC2\xC6\t\x04\x02\x02' +
    '\xC3\xC5\t\x05\x02\x02\xC4\xC3\x03\x02\x02\x02\xC5\xC8\x03\x02\x02\x02' +
    '\xC6\xC4\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC74\x03\x02\x02\x02' +
    '\xC8\xC6\x03\x02\x02\x02\xC9\xCD\t\x06\x02\x02\xCA\xCC\t\x07\x02\x02\xCB' +
    '\xCA\x03\x02\x02\x02\xCC\xCF\x03\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCD' +
    '\xCE\x03\x02\x02\x02\xCE6\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xD0' +
    '\xD2\t\b\x02\x02\xD1\xD0\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3\xD1' +
    '\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4\xD5\x03\x02\x02\x02\xD5\xD6' +
    '\b\x1C\x02\x02\xD68\x03\x02\x02\x02\b\x02M\xBD\xC6\xCD\xD3\x03\b\x02\x02';
  public static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!AssetSelectionLexer.__ATN) {
      AssetSelectionLexer.__ATN = new ATNDeserializer().deserialize(
        Utils.toCharArray(AssetSelectionLexer._serializedATN),
      );
    }

    return AssetSelectionLexer.__ATN;
  }
}
