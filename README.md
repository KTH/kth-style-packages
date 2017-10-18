# KTH STYLE

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
$ git clone git@github.com:KTH/kth-style.git
$ cd kth-style
$ scripts/start-doc-dev.sh init
```

Then open three separate terminals (so you get separate logs to simplify debugging)

```
$ scripts/start-doc-dev.sh kth-style
```

```
$ scripts/start-doc-dev.sh kth-style-inferno-bootstrap
```

```
$ scripts/start-doc-dev.sh kth-style-web
```

You can now visit the docs at http://localhost:8080

The docs will automatically rebuild, all you need to do is reload the browser.
