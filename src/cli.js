#!/usr/bin/env node

const { resolve } = require('path');
const { create } = require('create-create-app');

const templateRoot = resolve(__dirname, '..', 'templates');

const caveat = `
To start a dev server, run "npm start" in your project directory.
Happy playing around with ef.js!
`;

// See https://github.com/uetchy/create-create-app/blob/master/README.md for the all options.

create('create-ef-app', {
  templateRoot,
  promptForTemplate: true,
  caveat,
});
