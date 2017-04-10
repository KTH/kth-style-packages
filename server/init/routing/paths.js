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
  structure: {
    wells: {
      uri: routing.prefix('/wells'),
      method: 'GET'
    },
    structurepage: {
      uri: routing.prefix('/structurepage'),
      method: 'GET'
    },
    panelheading: {
      uri: routing.prefix('/panelheading'),
      method: 'GET'
    }
  },
  links: {
    uri: routing.prefix('/links'),
    method: 'GET'
  },
  linksOrButtons: {
    uri: routing.prefix('/linksorbuttons'),
    method: 'GET'
  },
  code: {
    accessiblecode: {
      uri: routing.prefix('/accessiblecode'),
      method: 'GET'
    },
    testhelper: {
      uri: routing.prefix('/testhelper'),
      method: 'GET'
    }
  },
  background: {
    about: {
      uri: routing.prefix('/about'),
      method: 'GET'
    },
    overallprincipals: {
      uri: routing.prefix('/overallprincipals'),
      method: 'GET'
    },
    graphicalprofile: {
      uri: routing.prefix('/graphicalprofile'),
      method: 'GET'
    },
    readmore: {
      uri: routing.prefix('/readmore'),
      method: 'GET'
    }
  },
  colors: {
    colors: {
      uri: routing.prefix('/colors'),
      method: 'GET'
    },
    accessiblecolors: {
      uri: routing.prefix('/accessiblecolors'),
      method: 'GET'
    }
  },
  icons: {
    icons: {
      uri: routing.prefix('/icons'),
      method: 'GET'
    }
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

    paths: {
      uri: routing.prefix('/_paths'),
      method: 'GET'
    }
  }
}
