module.exports = {
    rules: {
        "no-constant-binary-expression": "error",
        "no-constructor-return": "error",
        "no-dupe-class-members": "off",
        "no-promise-executor-return": "error",
        "no-self-compare": "error",
        "no-template-curly-in-string": "error",
        "no-unmodified-loop-condition": "error",
        "no-unreachable-loop": "error",
        "no-unused-private-class-members": "error",
        "no-unused-vars": "off",
        "no-use-before-define": "off",
        "require-atomic-updates": "error",
        "accessor-pairs": "error",
        "block-scoped-var": "error",
        // "capitalized-comments": ["error", "never"], Для удобства оставления комментариев
        "consistent-return": "error",
        "consistent-this": "error",
        "default-case": "error",
        "default-case-last": "error",
        "default-param-last": "off",
        "dot-notation": "off",
        eqeqeq: ["error", "always"],
        "func-style": ["error", "expression"],
        "grouped-accessor-pairs": ["error", "getBeforeSet"],
        "guard-for-in": "error",
        "max-classes-per-file": "error",
        "max-params": ["error", 3],
        "new-cap": ["error", {capIsNew: false}],
        "no-alert": "error",
        "no-else-return": "error",
        "no-empty-function": "off",
        "no-extra-bind": "error",
        "no-floating-decimal": "error",
        "no-inline-comments": "error",
        "no-invalid-this": "off",
        "no-magic-numbers": "off",
        "no-mixed-operators": "off",
        "no-negated-condition": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-object": "error",
        "no-new-wrappers": "error",
        "no-octal-escape": "error",
        "no-plusplus": [
            "error",
            {
                allowForLoopAfterthoughts: true
            }
        ],
        "no-proto": "error",
        "no-redeclare": "off",
        "no-return-assign": ["error", "always"],
        "no-return-await": "off",
        "no-script-url": "error",
        "no-shadow": "off",
        "no-throw-literal": "off",
        "no-unneeded-ternary": "error",
        "no-useless-computed-key": "error",
        "no-useless-concat": "error",
        "no-useless-constructor": "off",
        "no-useless-return": "error",
        "no-var": "error",
        "operator-assignment": ["error", "always"],
        "prefer-const": "error",
        "prefer-exponentiation-operator": "error",
        "prefer-numeric-literals": "error",
        "prefer-object-has-own": "error",
        "prefer-object-spread": "error",
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "symbol-description": "error",
        yoda: "error",
        // styling rules
        "array-bracket-spacing": "error",
        "arrow-parens": "error",
        "arrow-spacing": "error",
        "block-spacing": "error",
        "brace-style": "off",
        "comma-dangle": "off",
        "comma-spacing": "off",
        "comma-style": "error",
        "computed-property-spacing": "error",
        "dot-location": "error",
        "eol-last": ["error", "always"],
        "func-call-spacing": "off",
        "function-call-argument-newline": ["error", "consistent"],
        "function-paren-newline": "error",
        "implicit-arrow-linebreak": "error",
        indent: "off",
        "jsx-quotes": "error",
        "key-spacing": "error",
        "keyword-spacing": "off",
        "line-comment-position": "error",
        "linebreak-style": "error",
        "lines-around-comment": [
            "error",
            {
                beforeBlockComment: false
            }
        ],
        "lines-between-class-members": "off",
        "max-len": [
            "error",
            {
                code: 120,
                tabWidth: 2,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreComments: true,
                ignoreRegExpLiterals: true,
                ignoreTemplateLiterals: true,
                ignoreTrailingComments: true,
            }
        ],
        "max-statements-per-line": "error",
        "multiline-ternary": ["error", "always-multiline"],
        "new-parens": "error",
        "no-extra-parens": "off",
        "no-extra-semi": "off",
        "no-multi-spaces": [
            "error",
            {
                ignoreEOLComments: true
            }
        ],
        "no-multiple-empty-lines": [
            "error",
            {
                max: 1,
                maxBOF: 0,
                maxEOF: 0
            }
        ],
        "no-trailing-spaces": "error",
        "object-curly-spacing": "off",
        "operator-linebreak": "error",
        "padded-blocks": [
            "error",
            {
                blocks: "never",
                classes: "always",
                switches: "never"
            }
        ],
        quotes: "off",
        "rest-spread-spacing": "error",
        semi: "off",
        "semi-spacing": "error",
        "semi-style": "error",
        "space-before-blocks": "off",
        "space-before-function-paren": "off",
        "space-in-parens": "error",
        "space-infix-ops": "off",
        "space-unary-ops": [
            "error",
            {
                words: true,
                nonwords: false
            }
        ],
        "switch-colon-spacing": "error",
        "template-curly-spacing": "error",
        "no-loss-of-precision": "off"
    },
    overrides: [
        {
            files: ["*.tsx"],
            rules: {
                "function-paren-newline": ["error", "consistent"],
                "consistent-return": "off"
            }
        }
    ]
};
