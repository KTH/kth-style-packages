# KTH STYLE

To work with this repos you need Node.js 6+ and lerna https://lernajs.io/

1. Install lerna: `npm i -g lerna`

2. Clone this repos

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
To develop `kth-style-inferno-component` docs:

```
$ cd packages/kth-style-inferno-component
$ npm run build-docs-dev
```

Open a new terminal and run:

```
$ npm start
```

You can now visit the docs at http://localhost:8080

The docs will automatically rebuild, all you need to do is reload the browser.
