#!/usr/bin/env node

const { resolve } = require('path');
const { create } = require('create-initializer');

const templateRoot = resolve(__dirname, '..', 'templates');

const caveat = `
To start a dev server, run "npm start" in your project directory.
See "README.md" for more details.
Happy playing around with ef.js!
`;

// See https://github.com/uetchy/create-create-app/blob/master/README.md for the all options.

create('create-ef-app', {
  templateRoot,
  templatePrefix: 'ef-starter-',
  promptForTemplate: true,
  defaultTemplate: 'rollup',
  caveat,
});
