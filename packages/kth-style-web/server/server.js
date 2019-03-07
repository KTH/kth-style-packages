'use strict'
const path = require('path')
const express = require('express')
const app = express()
const Style = require('./controllers/styleCtrl')
const { safeGet } = require('safe-utils')


function _getModulePath (moduleName) {
  let outpDir
  try {
    outpDir = require.resolve(moduleName).match(/.*\/node_modules\/[^/]+/)[0]
  } catch (e) {
    let tmp = __dirname.split('/')
    tmp = tmp.slice(0, tmp.length - 1)
    tmp = tmp.concat(['node_modules', moduleName])
    outpDir = tmp.join('/')
  }
  return outpDir
}

const kthStyleDir = _getModulePath('kth-style')
const prismjsDir = _getModulePath('prismjs')
const staticDir = path.resolve(__dirname, '../dist')

// System routes
app.use('/style/_monitor', (req, res) => res.send('APPLICATION_STATUS: OK'))

app.use('/style/kth-style', express.static(kthStyleDir + '/dist'))
app.use('/style/kth-style/api/colors', Style.colors.getColors)
app.use('/style/kth-style/api/icons', Style.icons.getIcons)
app.use('/style/prism', express.static(prismjsDir + '/themes'))
app.use('/style/static', express.static(staticDir))
app.use((req, res) => {
  res.send(createIndexPage())
})

const stylePkg = require('../node_modules/kth-style/package.json')
const bootstrapPkg = safeGet(() => require('../node_modules/bootstrap/package.json'), 'N/A')

function createIndexPage () {
  return `<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>KTH Style</title>
  <meta name="description" content="KTH Style">
  <meta name="author" content="Sebastian Ware">
  <!--link rel="stylesheet" href="/bootstrap/css/bootstrap.css"-->
  <link rel="stylesheet" href="/style/kth-style/css/kth-bootstrap.css">
  <link rel="stylesheet" href="/style/prism/prism-coy.css?v=3">
  <link rel="stylesheet" href="/style/static/css/kth-style-web.css?v=1.0">
</head>
<script>
  window.versions = { "style": "${stylePkg.version}", "bootstrap": "${bootstrapPkg.version}"}
</script>

<body>
  <div id="app"></div>
  <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
  <script defer src="/style/static/app.js"></script>
</body>
</html>`
}

// *** SERVER ERROR HANDLER ***
app.use(function (err, req, res, next) {
  console.log(err)
  return res.status(404).json({
    error: 'Server error',
    err: err
  })
})

/*
    ********** /END ERROR HANDLING **********
*/

module.exports = function (PORT, done) {
  const msg = '*** Listening on port: ' + PORT + ' ***'
  console.log(
    ' ' + '*'.repeat(msg.length) + '\n', msg + '\n', '*'.repeat(msg.length)
  )
  return app.listen(PORT, done)
}
