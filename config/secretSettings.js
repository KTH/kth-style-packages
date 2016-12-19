'use strict'

const getEnv = require('kth-node-configuration').getEnv

module.exports = {
  useSsl: getEnv('SERVER_USE_SSL', false),
  ssl: {
    pfx: getEnv('SERVER_CERT_FILE', '/certs/localhost.p12'),
    passphrase: getEnv('SERVER_CERT_PASSPHRASE', '/certs/localhost.pass')
  },
  hostUrl: getEnv('SERVER_HOST_URL'),
  port: getEnv('SERVER_PORT'),
  secure: {
    sessionSecret: getEnv('SESSION_SECRET')
  },
  nodeApi: {
  },
  blockApi: {
    blockUrl: getEnv('BLOCK_API_URL')
  },
  logging: {
    log: {
      level: getEnv('LOGGING_LEVEL', 'info')
    },
    accessLog: {
      useAccessLog: getEnv('LOGGING_ACCESS_LOG', true)
    }
  },
  clientLogging: {
    level: 'debug'
  },
  cache: {
    cortinaBlock: {
      redis: {
        host: getEnv('REDIS_HOST', 'localhost'),
        port: getEnv('REDIS_PORT', 6379)
      }
    }
  },
  cssTranspiler: {
    force: getEnv('CSS_TRANSPILER_FORCE', true),
    debug: getEnv('CSS_TRANSPILER_DEBUG', true)
  },
  session: {
    key: getEnv('SESSION_KEY', 'node-web.sid'),
    useRedis: getEnv('SESSION_USE_REDIS', false),
    sessionOptions: {
      // do not set session secret here!!
      cookie: { secure: getEnv('SESSION_SECURE_COOKIE', false) }
    },
    redisOptions: {
      host: getEnv('REDIS_HOST', 'localhost'),
      port: getEnv('REDIS_PORT', 6379)
    }
  }
}
