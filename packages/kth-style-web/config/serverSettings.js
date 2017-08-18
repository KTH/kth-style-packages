/**
 *
 *            Server specific settings
 *
 * *************************************************
 * * WARNING! Secrets should be read from env-vars *
 * *************************************************
 *
 */
const { getEnv, devDefaults, setLoggingDefaults, unpackRedisConfig, unpackLDAPConfig } = require('kth-node-configuration')
const { safeGet } = require('safe-utils')

// DEFAULT SETTINGS used for dev, if you want to override these for you local environment, use env-vars in .env
const devPort = 3000
const devSsl = false
const devUrl = 'http://localhost:' + devPort
const devSessionKey = 'style-web.sid'
const devSessionUseRedis = true
const devRedis = 'redis://localhost:6379/'
// Do not enter LDAP_URI or LDAP_PASSWORD here, use env_vars
const devLdap = undefined
const devSsoBaseURL = devDefaults('https://login-r.referens.sys.kth.se')
const devLdapBase = devDefaults('OU=UG,DC=ref,DC=ug,DC=kth,DC=se')
// END DEFAULT SETTINGS

// These options are fixed for this application
const ldapOptions = {
  base: getEnv('LDAP_BASE', devLdapBase),
  filter: '(ugKthid=KTHID)',
  filterReplaceHolder: 'KTHID',
  userattrs: ['displayName', 'mail', 'ugUsername', 'memberOf'],
  groupattrs: ['cn', 'objectCategory']
}

// set CONSOLE_ENABLED and STDOUT_ENABLED
setLoggingDefaults()

module.exports = {
  hostUrl: getEnv('SERVER_HOST_URL', devUrl),
  useSsl: safeGet(() => getEnv('SERVER_SSL', devSsl + '').toLowerCase() === 'true'),
  port: getEnv('SERVER_PORT', devPort),
  ssl: {
    // In development we don't have SSL feature enabled
    pfx: getEnv('SERVER_CERT_FILE', ''),
    passphrase: getEnv('SERVER_CERT_PASSPHRASE', '')
  },

  // API keys
  apiKey: {
  },

  // Authentication
  /*
  auth: {
    adminGroup: 'app.innovation.admin'
  },
  cas: {
    ssoBaseURL: getEnv('CAS_SSO_URI', devSsoBaseURL)
  },
  ldap: unpackLDAPConfig('LDAP_URI', getEnv('LDAP_PASSWORD'), devLdap, ldapOptions),
  */

  // Service API's
  nodeApi: {
  },

  // Cortina
  blockApi: {
    blockUrl: getEnv('CORTINA_BLOCK_URL', devDefaults('https://www-r.referens.sys.kth.se/cm/')) || (getEnv('SERVER_HOST_URL') + '/cm/') // Block API base URL
  },

  // Logging
  logging: {
    log: {
      level: getEnv('LOGGING_LEVEL', 'debug')
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
      redis: unpackRedisConfig('REDIS_URI', devRedis)
    }
  },

  // Session
  sessionSecret: getEnv('SESSION_SECRET', '1234567890'),
  session: {
    key: getEnv('SESSION_KEY', devSessionKey),
    useRedis: safeGet(() => getEnv('SESSION_USE_REDIS', devSessionUseRedis) === 'true'),
    sessionOptions: {
      // do not set session secret here!!
      cookie: { secure: safeGet(() => getEnv('SESSION_SECURE_COOKIE', false) === 'true') }
    },
    redisOptions: unpackRedisConfig('REDIS_URI', devRedis)
  },

  appInsights: {
    instrumentationKey: getEnv('APPINSIGHTS_INSTRUMENTATIONKEY', '')
  }
}
