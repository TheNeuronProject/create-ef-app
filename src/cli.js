#!/usr/bin/env node

import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { create } from 'create-initializer'

const templateRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'templates')

const startCommands = {
  npm: 'npm start',
  pnpm: 'pnpm start',
  yarn: 'yarn start'
}

const caveat = ({projectDir, answers}) => `
To start the dev server, simply run "${startCommands[answers.packageManager]}" in your project directory:

  cd ${projectDir}
  ${startCommands[answers.packageManager]}

See "README.md" for more details.
Happy creating great projects with ef.js!
`

create('create-ef-app', {
  templateRoot,
  templatePrefix: 'ef-starter-',
  promptForTemplate: true,
  defaultTemplate: 'rollup',
  defaultPackageManager: 'pnpm',
  caveat
})
