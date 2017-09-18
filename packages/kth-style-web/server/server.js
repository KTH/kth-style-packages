'use strict'
const path = require('path')
const express = require('express')
const app = express()

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
  console.log(moduleName + ': ' + outpDir)
  return outpDir
}

const kthStyleDir = _getModulePath('kth-style')
const prismjsDir = _getModulePath('prismjs')
const staticDir = path.resolve(__dirname, '../dist')
console.log(staticDir)

app.use('/kth-style', express.static(kthStyleDir + '/dist'))
app.use('/prism', express.static(prismjsDir + '/themes'))
app.use('/static', express.static(staticDir))
app.use((req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'))
})

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
    ' '  + '*'.repeat(msg.length) + '\n', msg + '\n', '*'.repeat(msg.length)
  )
  return app.listen(PORT, done)
}

module.exports(8080)
