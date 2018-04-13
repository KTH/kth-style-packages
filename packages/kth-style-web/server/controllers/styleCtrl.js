'use strict'

const co = require('co')
const log = require('kth-node-log')
const { safeGet } = require('safe-utils')
const sassExtract = require('sass-extract');
const css = require('css');
const fs = require('fs')
const path = require('path')

// TODO Continue separating the paths below

module.exports = {
  getIndex: (req, res) => { res.render('index', { breadcrumbsPath: [], title: 'Style' }) },
  getHeadlines: (req, res) => { res.render('headlines', { breadcrumbsPath: [{ label: 'Rubriker' }], title: 'Rubriker' }) },
  getTables: (req, res) => { res.render('tables', { breadcrumbsPath: [{ label: 'Tabeller' }], title: 'Tabeller' }) },
  getText: (req, res) => { res.render('text', { breadcrumbsPath: [{ label: 'Textstruktur' }], title: 'Textstruktur' }) },
  getTextExample: (req, res) => { res.render('textexample', { breadcrumbsPath: [{ label: 'Textexempel' }], title: 'Textexempel' }) },


  getForms: (req, res) => { res.render('forms', { breadcrumbsPath: [{ label: 'Formulär' }], title: 'Formulär' }) },
  getLists: (req, res) => { res.render('lists', { breadcrumbsPath: [{ label: 'Listor' }], title: 'Listor' }) },
  getButtons: (req, res) => { res.render('buttons', { breadcrumbsPath: [{ label: 'Knappar' }], title: 'Knappar' }) },
  getModals: (req, res) => { res.render('modals', { breadcrumbsPath: [{ label: 'Modalboxar' }], title: 'Modalboxar' }) },
  getMessages: (req, res) => { res.render('messages', { breadcrumbsPath: [{ label: 'Återkoppling' }], title: 'Återkoppling' }) },
  structure: {
    getWells: (req, res) => { res.render('wells', { breadcrumbsPath: [{ label: 'Bakgrunder' }], title: 'Bakgrunder' }) },
    getStructure: (req, res) => { res.render('structurepage', { breadcrumbsPath: [{ label: 'Hur gör jag en sida med bra layout?' }], title: 'Bra layout' }) },
    getPanelHeading: (req, res) => { res.render('panelheading', { breadcrumbsPath: [{ label: 'Utfällbara rubriklister' }], title: 'Rubriklister' }) }
  },
  getLinks: (req, res) => { res.render('links', { breadcrumbsPath: [{ label: 'Länkar' }], title: 'Länkar' }) },
  getLinksOrButtons: (req, res) => { res.render('linksorbuttons', { breadcrumbsPath: [{ label: 'Välja knapp eller länk' }], title: 'Knapp/Länk' }) },
  background: {
    getAbout: (req, res) => { res.render('about', { breadcrumbsPath: [{ label: 'Om KTH Style' }], title: 'Om Style' }) },
    getOverallPrincipals: (req, res) => { res.render('overallprincipals', { breadcrumbsPath: [{ label: 'Övergripande principer' }], title: 'Principer' }) },
    getGraphicalProfile: (req, res) => { res.render('graphicalprofile', { breadcrumbsPath: [{ label: 'KTHs grafiska profil' }], title: 'Grafisk profil' }) },
    getReadMore: (req, res) => { res.render('readmore', { breadcrumbsPath: [{ label: 'Länksamling' }], title: 'Länksamling' }) }
  },
  colors: {
    getColors: co.wrap(getColors),
    getAccessiblecolors: (req, res) => { res.render('accessiblecolors', { breadcrumbsPath: [{ label: 'Färger och tillgänglighet' }], title: 'Färger och tillgänglighet' }) }
  },
  code: {
    getAccessiblecode: (req, res) => { res.render('accessiblecode', { breadcrumbsPath: [{ label: 'Tillgänglig kod' }], title: 'Tillgänglig kod' })},
    getTesthelper: (req, res) => { res.render('testhelper', { breadcrumbsPath: [{ label: 'Testhjälpen' }], title: 'Testhjälpen' })}
  },
  icons: {
    getIcons: getIcons
  }
}

/*
  Reads and parses the CSS file downloaded from fontello.com.

  See example of json which is returned from css.parse at it's Github page: https://github.com/reworkcss/css

  Filters and transforms the resulting object to an array with objects with css class and class name for printing on the page.
*/
function getIcons(req, res, next) {
  fs.readFile('node_modules/kth-style/public/fonts/fontello/css/kth-style-icons.css', 'utf8', function (err,data) {
    if(err) return next(err)

    try {
      var cssJson = css.parse(data, {});
    
      const iconsCss = cssJson.stylesheet.rules
        .filter(rule => rule.type === 'rule' && rule.selectors.find( s => s.match(/^\.icon*/)))
        .map(rule => {
          const className = rule.selectors[0].slice(0, rule.selectors[0].indexOf(':'))
          return {
            use: className.slice(1),
            print: className 
          }
        })  
      res.render('icons', { 
          breadcrumbsPath: [{ label: 'Ikoner' }],
          title: 'Ikoner',
          icons: iconsCss
        }
      )
    } catch (err) {
      next(err)
    }
  })
}


/*
  Helper method for transforming a Sass variable ($lightRedHover)
  to a readble string (light red hover)
*/
function transformName (name) {
  if (name.startsWith('$')) {
    name = name.slice(1)
  }

  return name.split(/(?=[A-Z])/).map(function (s) {
    return s.toLowerCase()
  }).join(' ')
}

/*
  Helper method for picking colors out of the allColors array
  Fallback with error text if the specified color wasn't found 
*/

function getColorsByNames (names, allColors) {
  return names.map(name => {
    const color = allColors.find(x => x.key === name)

    if (color) {
      return color
    } else {
      return { name: name + ' is not a known color' }
    }
  })
}

const file = path.join(__dirname, '/../../node_modules/kth-style/public/sass/variables/_colors.scss')

const backgroundsForWhite = ['$green', '$greenHover', '$lightBlue', '$lightBlueHover', '$pink', '$lightRed', '$lightRedHover', '$darkGrey', '$darkGreyHover']
const backgroundsForBlack = ['$white', '$infoGreen', '$infoYellow', '$infoRed', '$midGrey', '$lightGrey', '$brightestGrey']
const coloredText = ['$brighterBlack', '$blueLink', '$white']

/*
  Promise which uses sassExtract to collect all colors from colors.scss, transform them into an object which contains a
  readable name and color hexcode.

  Also separates the colors into different arrays for display in different parts of the page.
*/

const getSassColors = sassExtract.render({
  file: file
}).then(rendered => {
  const vars = rendered.vars.global

  const allColors = Object.keys(vars)
      .filter(key => vars[key].type === 'SassColor')
      .map(colorKey => { return { key: colorKey, name: transformName(colorKey), hex: vars[colorKey].value.hex } })

  return {
    backgroundsForWhite: getColorsByNames(backgroundsForWhite, allColors),
    backgroundsForBlack: getColorsByNames(backgroundsForBlack, allColors),
    coloredText: getColorsByNames(coloredText, allColors)
  }
})

// function * getColors (req, res, next) {
//   const colors = yield getSassColors

//   res.render('colors', {
//     breadcrumbsPath: [{ label: 'Färger' }],
//     title: 'Färger',
//     colors: colors
//   })
// }

function * getColors (req, res, next) {
  const colors = yield getSassColors
  res.json(colors)
}
