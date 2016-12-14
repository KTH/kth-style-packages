'use strict'

const routing = require('./routing')

/**
 * Lists all paths (routes) with corresponding parameter(s) and method.
 * TIP: If you are getting a 500 response and the page keeps loading, check
 * the ordering of the routes in the affected files (routes/* and this).
 */

module.exports = {
  index: {
    uri: routing.prefix('/'),
    method: 'GET'
  },
  headlines: {
    uri: routing.prefix('/headlines'),
    method: 'GET'
  },
  tables: {
    uri: routing.prefix('/tables'),
    method: 'GET'
  },
  text: {
    uri: routing.prefix('/text'),
    method: 'GET'
  },
  forms: {
    uri: routing.prefix('/forms'),
    method: 'GET'
  },
  lists: {
    uri: routing.prefix('/lists'),
    method: 'GET'
  },
  buttons: {
    uri: routing.prefix('/buttons'),
    method: 'GET'
  },
  modals: {
    uri: routing.prefix('/modals'),
    method: 'GET'
  },
  messages: {
    uri: routing.prefix('/messages'),
    method: 'GET'
  },
  system: {
    monitor: {
      uri: routing.prefix('/_monitor'),
      method: 'GET',
      cas: false
    },

    about: {
      uri: routing.prefix('/_about'),
      method: 'GET'
    },

    robots: {
      uri: '/robots.txt',
      method: 'GET'
    },

    paths: {
      uri: routing.prefix('/_paths'),
      method: 'GET'
    }
  }
}
