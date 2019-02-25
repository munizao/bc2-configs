Config assets for Alchemy Vanilla Web Module
===

## Root Config Files

### `.eslintrc`

Our coding and style standards for linting our JavaScript with `eslint`

### `.travis.yml`

Configuration for running linting and testing on TravisCI (Continous Integration)

## `test` Config Files

### `index.html`

Standard setup for running QUnit tests in the browser. If you are running the project repo with live server, navigate to `http://127.0.0.1:5500/test/`

### `index.js`

A file required to run our QUnit tests on travis, briding between ESModules and CJS modules

### `tests.js`

Starter test file for that imports all other test files (in this example `file1.test.js` and `file2.test.js`). It also imports are test helper utilities.

### `html-equal.js`

Adds method `assert.htmlEqual` method to QUnit that
compares a dom node's html to the supplied expected html, normalizing whitespace.

## VSCode Extensions

### ESLint (dbaeumer.vscode-eslint)

Integrates ESLint into VSCode

### Live Server (ritwickdey.liveserver)

Run local development server in hot mode (auto-refresh)

### es6-string-html (tobermory.es6-string-html)

Adds html string syntax highlighting to js template strings

### JS Refactor (cmstead.jsrefactor)

Adds refactoring utilities to VSCode

### VS Live Share (ms-vsliveshare.vsliveshare)

Enables live code share across VSCode instances



