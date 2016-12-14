'use strict'

module.exports = {
  getIndex: (req, res) => { res.render('index') },
  getHeadlines: (req, res) => { res.render('headlines') },
  getTables: (req, res) => { res.render('tables') },
  getText: (req, res) => { res.render('text') },
  getForms: (req, res) => { res.render('forms') },
  getLists: (req, res) => { res.render('lists') },
  getButtons: (req, res) => { res.render('buttons') },
  getModals: (req, res) => { res.render('modals') },
  getMessages: (req, res) => { res.render('messages') }
}
