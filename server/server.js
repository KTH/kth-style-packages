'use strict'
const server = require('kth-node-server')
// Load .env file in development mode
const nodeEnv = process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase()
if (nodeEnv === 'development' || nodeEnv === 'dev' || !nodeEnv) {
  require('dotenv').config()
  console.log('>>>> Setting ENV-vars from .env file <<<<')
} else if (!process.env.SERVICE_PUBLISH) {
  // This is an ANSIBLE machine which doesn't set env-vars atm
  // so read localSettings.js which we now use to fake env-vars
  // because it already exists in our Ansible setup.
  console.log('>>>> Setting ENV-vars from localSettings file <<<<')
  require('../config/localSettings')
} else {
  console.log('>>>> Getting ENV-vars from environment <<<<')
}

const config = require('./init/configuration').server
const log = require('kth-node-log')

// Register handlebar helpers
require('./views/helpers')

// initialize logger
require('./init/logging')

server.locals.secret = new Map()

module.exports.run = function () {
  server.start({
    useSsl: config.useSsl,
    pfx: config.ssl.pfx,
    passphrase: config.ssl.passphrase,
    key: config.ssl.key,
    ca: config.ssl.ca,
    cert: config.ssl.cert,
    port: config.port,
    logger: log
  })
}

module.exports = server
