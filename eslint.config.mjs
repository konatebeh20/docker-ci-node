import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
  },
  {
    files: ["**/*.test.js", "**/*.spec.js", "test/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.mocha,  // ou globals.jest si vous utilisez Jest
        describe: "readonly",
        it: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        before: "readonly",
        after: "readonly",
      },
    },
  },
];