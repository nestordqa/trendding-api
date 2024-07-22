import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {
    languageOptions: { 
      globals: globals.browser,
      globals: globals.es2025,
      globals: globals.node
    }
  },
  {
    ignores: ["eslint.config.mjs"]
  },
  {
    rules: {
      // files: ["./src/*.js"],
      semi: "error",
      "prefer-const": "error",
    }
  },
  pluginJs.configs.recommended,
];