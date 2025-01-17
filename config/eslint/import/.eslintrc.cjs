module.exports = {
    rules: {
        "import/no-unresolved": [
            "error",
            {
                commonjs: true,
                amd: true
            }
        ],
        // "import/no-restricted-paths"
        "import/no-absolute-path": "error",
        "import/no-dynamic-require": "error",
        // "import/no-internal-modules"
        "import/no-webpack-loader-syntax": "error",
        "import/no-self-import": "error",
        "import/no-useless-path-segments": [
            "error",
            {
                noUselessIndex: true
            }
        ],
        "import/no-relative-packages": "error",
        "import/no-named-as-default": "error",
        "import/no-named-as-default-member": "error",
        "import/no-deprecated": "error",
        "import/no-mutable-exports": "error",
        "import/first": "error",
        "import/exports-last": "error",
        "import/no-namespace": "error",
        "import/extensions": [
            "error",
            "never",
            {
                json: "always"
            }
        ],
        "import/order": [
            "error",
            {
                groups: [
                    "builtin",
                    "external",
                    "internal",
                    "sibling",
                    "parent",
                    "index",
                    "object",
                    "type"
                ],
                pathGroups: [
                    {
                        pattern: "react",
                        group: "builtin",
                        position: "after"
                    },
                    {
                        pattern: "@app/**",
                        group: "internal",
                        position: "before"
                    },
                    {
                        pattern: "**/services/**",
                        group: "external",
                        position: "after"
                    },
                    {
                        pattern: "**/interfaces/**",
                        group: "type",
                        position: "before"
                    },
                    {
                        pattern: "**/enums/**",
                        group: "type",
                        position: "before"
                    }
                ],
                pathGroupsExcludedImportTypes: [
                    "builtin",
                    "external",
                    "internal",
                    "object",
                    "type"
                ],
                "newlines-between": "always-and-inside-groups"
            }
        ],
        "import/newline-after-import": "error",
        "import/max-dependencies": "off",
        "import/no-named-default": "error",
        "import/no-anonymous-default-export": [
            "error",
            {
                allowArray: false,
                allowArrowFunction: false,
                allowAnonymousClass: false,
                allowAnonymousFunction: false,
                allowCallExpression: false,
                allowLiteral: false,
                allowObject: false
            }
        ],
        "import/group-exports": "error",
        "import/no-duplicates": "error"
    }
};
