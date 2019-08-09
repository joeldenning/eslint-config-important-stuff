module.exports = {
  "parserOptions": {
    "sourceType": "module"
  },

  "env": {
    "browser": true,     // browser global variables.
    "jasmine": true,
    "jest": true,
    "es6": true,
  },

  "globals": {
    "SystemJS": "readonly",
    "System": "readonly",
    "module": "readonly",
    "global": "writeable",
    "__webpack_public_path__": "writeable",
    "__webpack_require__": "readonly",
  },

  "rules": {
    // Possible Errors
    "no-console": [2, {allow: ["warn", "error", "info"]}], // sometimes console warnings or console errors are helpful, but console.log probably shouldn't be checked into source control (?)
    "no-constant-condition": 2,
    "no-debugger": 2,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-obj-calls": 2,
    "no-unreachable": 2,
    "no-unsafe-negation": 2,
    "use-isnan": 2,

    // Best practices
    "no-empty-pattern": 2,
    "no-extra-bind": 2,
    "no-implied-eval": 2,
    "no-labels": 2,
    "no-self-assign": 2,
    "no-self-compare": 2,
    "no-throw-literal": 2,
    "no-void": 2,
    "no-with": 2,

    // Variables
    "no-shadow-restricted-names": 2,
    "no-undef": 2,
    "no-unused-vars": 0, // Finds things like arguments that aren't used but later arguments are used. Or an event handler where the event object isn't used.
    "no-use-before-define": 0, // Doesn't allow you to define functions at the bottom of a file

    // Stylistic things are enforced by Prettier, so they don't need to be enforced by eslint
    "indent": [0, "tab"], // Enforces a specific number of tab indentations :(
    "no-trailing-spaces": 0, // Somewhat militant, especially for empty lines that sometimes have indentation that matches the line above it.
    "no-mixed-spaces-and-tabs": 0,
    "no-tabs": 0,

    // ES2015 rules
    "constructor-super": 2,
    "no-const-assign": 2,
    "no-dupe-class-members": 2,
    "no-duplicate-imports": 2,
    "no-this-before-super": 2,
  },
}