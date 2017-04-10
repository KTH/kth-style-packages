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
routing.route(paths.links, controllers.Style.getLinks)
routing.route(paths.linksOrButtons, controllers.Style.getLinksOrButtons)

routing.route(paths.background.about, controllers.Style.background.getAbout)
routing.route(paths.background.overallprincipals, controllers.Style.background.getOverallPrincipals)
routing.route(paths.background.graphicalprofile, controllers.Style.background.getGraphicalProfile)
routing.route(paths.background.readmore, controllers.Style.background.getReadMore)

routing.route(paths.colors.colors, controllers.Style.colors.getColors)
routing.route(paths.colors.accessiblecolors, controllers.Style.colors.getAccessiblecolors)

routing.route(paths.icons.icons, controllers.Style.icons.getIcons)

routing.route(paths.code.accessiblecode, controllers.Style.code.getAccessiblecode)
routing.route(paths.code.testhelper, controllers.Style.code.getTesthelper)

routing.route(paths.structure.wells, controllers.Style.structure.getWells)
routing.route(paths.structure.structurepage, controllers.Style.structure.getStructure)
routing.route(paths.structure.panelheading, controllers.Style.structure.getPanelHeading)
