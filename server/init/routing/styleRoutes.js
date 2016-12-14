'use strict'

const controllers = require('../../controllers')
const paths = require('./paths')
const routing = require('./routing')

/**
 * Routes for system functions - about/monitor/etc
 */
routing.route(paths.index, controllers.Style.getIndex)
routing.route(paths.headlines, controllers.Style.getHeadlines)
routing.route(paths.tables, controllers.Style.getTables)
routing.route(paths.text, controllers.Style.getText)
routing.route(paths.forms, controllers.Style.getForms)
routing.route(paths.lists, controllers.Style.getLists)
routing.route(paths.buttons, controllers.Style.getButtons)
routing.route(paths.modals, controllers.Style.getModals)
routing.route(paths.index, controllers.Style.getIndex)
routing.route(paths.messages, controllers.Style.getMessages)
