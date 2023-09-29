module.exports = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "next", "prettier"],
  ignorePatterns: [
    ".eslintrc.js",
    "dist",
    "node_modules",
    "pnpm-lock.yaml",
    "pnpm-workspace.yaml",
  ],
  plugins: ["@typescript-eslint", "simple-import-sort", "sort-destructure-keys", "unused-imports"],
  settings: {
    next: {
      rootDir: ["apps/*/", "packages/*/"],
    },
  },
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": "off",
    "react/jsx-key": "off",
    "comma-spacing": "error",
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
    ],
    "simple-import-sort/imports": [
      "warn",
      {
        groups: [
          // Packages. `react` related packages come first.
          ["^react", "^@?\\w"],
          // Side effect imports.
          ["^\\u0000"],
          // Parent imports. Put `..` last.
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Other relative imports. Put same-folder imports and `.` last.
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          // Style imports.
          ["^.+\\.s?css$"],
        ],
      },
    ],
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "error",
      { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" },
    ],
    "simple-import-sort/exports": "error",
    "sort-destructure-keys/sort-destructure-keys": "error",
    "react/jsx-sort-props": [
      "error",
      {
        shorthandLast: true,
      },
    ],
    "react/no-array-index-key": "error",
  },
};
