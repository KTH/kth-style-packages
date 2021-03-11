# KTH STYLE

## [UNMAINTAINED: This package is no longer maintained, i.e. per 2019-09-10. We plan to remove it from GitHub and NPM registry, soon...]

To work with this repos you need Node.js 6+ and lerna https://lernajs.io/

1. Install lerna: `npm i -g lerna`

2. Clone this repo

3. Go to the root of the project and run:

```
$ lerna bootstrap --hoist
$ lerna run build
```

## kth-style
KTH adapted Bootstrap package.

## kth-style-web
KTH Style docs server.

## kth-style-inferno-components
Visual components to add consistency and simplify development of Inferno-apps. 

### Documentation
To develop docs:

```
$ git clone https://github.com/KTH/kth-style.git
$ cd kth-style
$ scripts/start-doc-dev.sh init
$ scripts/start-doc-dev.sh run-all
```

You can now visit the docs at http://localhost:3002

The docs will automatically rebuild, all you need to do is reload the browser.

You might need to rerun `scripts/start-doc-dev.sh init` at times if changes have been made to package.json.

## How to start using KTH-STYLE
To use it in Node JS project:
As an example, the user can look at projects lms-exports-results, places-web and so on.
```
$ npm i -S kth-style bootstrap
```

In file server/server.js:

### If 'kth-node-server' module is used as a server (f.e., lms-export-results API):

```
const path = require('path')
const express = require('express')
const server = require('kth-node-server')
const prefix = config.proxyPrefixPath.uri

server.use(prefix +'/kth-style', express.static(path.join(__dirname, '../node_modules/kth-style/dist')))
```

### If 'express' module is used (f.e., kth-style-web):

```
const path = require('path')
const express = require('express')
const app = express()

app.use(prefix +'/kth-style', express.static(path.join(__dirname, '../node_modules/kth-style/dist')))
```

### Linking to stylesheet
Then link to the KTH-bootstrap stylesheet in /dist directory, f.e.:

```
<link rel="stylesheet" href="/api/lms-export-results/kth-style/css/kth-bootstrap.css">

```
Remember to place the import above your own project stylesheet imports.

### Avoiding icon conflicts
If you are using Fontello icons in your own project you might get conflicting UNICODE codes.

Before generating your icon set from Fontello you should set the CSS-prefix from the default 'icon-' to f.e. 'projectname-icon-'




