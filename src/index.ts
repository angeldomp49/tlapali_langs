import {Lang} from '@makechtec/tlapali_dev';

export const Java: Lang = {
    name: 'java',
    keywords: [
        'abstract',
        'assert',
        'boolean',
        'break',
        'byte',
        'case',
        'catch',
        'char',
        'class',
        'const',
        'continue',
        'default',
        'do',
        'double',
        'else',
        'enum',
        'extends',
        'final',
        'finally',
        'float',
        'for',
        'goto',
        'if',
        'implements',
        'import',
        'instanceof',
        'int',
        'interface',
        'long',
        'native',
        'new',
        'package',
        'private',
        'protected',
        'public',
        'return',
        'short',
        'static',
        'strictfp',
        'super',
        'switch',
        'sincronized',
        'this',
        'throw',
        'throws',
        'transient',
        'try',
        'void',
        'volatile',
        'while'
    ],
    rules:[
        {
            "name": "class_declaration",
            "pattern": "class\\s*(?<target>[A-z]*)\\s\\{"
        },
        {
            "name": "import_declaration",
            "pattern": "import\\s+[A-z|\\d|\\_|\\.]+\\.(?<target>[A-z|\\d\\_]+);$"
        },
        {
            "name": "variable_declaration",
            "pattern": "(private|public|package|protected)?(\\s*)([A-z\\d\\_]+)(\\s+)(?<target>[A-z\\d\\_]+)(\\s*)(;|=\\s*.+;)"
        },
        {
            "name": "method_declaration",
            "pattern": "[A-z|\\d|_]+\\s+(?<target>[A-z|\\d|_]*)\\s*\\([A-z\\d\\_|,|\\.|\\s|\\[\\]]*\\)\\s*\\{"
        },

    ]
}