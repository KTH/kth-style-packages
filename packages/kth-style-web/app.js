const { getEnv } = require('kth-node-configuration')
const serverStart = require('./server/server.js')

serverStart(getEnv('SERVER_PORT', 3002))
