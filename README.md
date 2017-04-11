KTH Style [![Build Status](https://travis-ci.org/KTH/kth-style.svg?branch=master)](https://travis-ci.org/KTH/kth-style-web)
========

## Description

*If you are looking for version 1 of KTH-Style see: https://github.com/KTH/kth-style/tree/v1*

The purpose of this project is to provide the essential design and style for applications within KTH and make the development process of these applications faster. The project contain style sheets and SASS files which makes a good start for new projects. You can choose to import and use pre made .css files or .scss files to build upon in your project.

KTH Style builds an own dist of Bootstrap v4 (https://v4-alpha.getbootstrap.com/) which is themed with KTH Style colors, margins etc.

## Develop in KTH Style

### How to start the application on local machine
```
$ git clone git@github.com:KTH/kth-style-web.git
$ npm install
$ npm start
```
Open the following url in the browser: http://localhost:3000/style

### Project 

KTH Style is based on Bootstrap which uses Sass (http://sass-lang.com/).

In the catalog **public/sass** you will find our kth specific Sass files (.scss) which transpiles together with Bootstraps Sass files.

The Sass entry point for this project is **public/sass/kth-bootstrap.scss**. This file imports both Bootstrap and KTH-Style files in a certain order to create our dist.

Some things can be overriden in Boostrap before the Sass is transpiled into CSS. Examples are colors, widths, margins and so on. By looking into **node_modules/bootstrap/scss/_variables.scss** you can see which things that can be overriden. Do not change values in **node_modules/bootstrap/scss/_variables.scss**. Find something you would like to change and copy that line.

Example: **$font-size-h1: 2.5rem !default;**

Notice the **!default**. This means that the variable $font-size-h1 will be set to 2.5 rem ONLY if it has not been set before. This is how we can override values, be setting the variable before **node_modules/bootstrap/scss/_variables.scss** is called. 

Open **public/sass/bootstrap/overridePre.scss** and paste **$font-size-h1: 2.5rem !default;**. Remove the **!default** part and set your new value, so the line looks something like this: **$font-size-h1: 3rem;**.

As you probably already noticed in **public/sass/kth-bootstrap.scss** the **public/sass/bootstrap/overridePre.scss** is imported first of all files. Voila. We now changed the value of $font-size-h1 to 3rem in the build.

Unfortunately Boostrap does not give you the option to override everything so sometimes you will need to a standard CSS override i.e. the last CSS rule wins. Place these things in **public/sass/bootstrap/overridePost.scss**

In **commonStyle.scss** we add everything that goes beyond Boostrap. 

This is a brief description of the catalogs:

- blocks - standard building blocks of/for the kth.se site.
- common - when it's hard to define
- component - style for what can be described as components
- slots - similar to blocks, but usually fills the entire width of the page
- variables - variables used through out the project

#### Icons
We use icons from fontello.com. The icons are downloaded and placed in **public/fonts/fontello**. 
If you would like to add an icon follow these steps:
1. Upload the icon-config file (**public/fonts/fontello/config.json**) to http://fontello.com by clicking the button with the spanner in the head.
2. Select the icons you want to include. 
3. Download the new setup by clicking the button "Download webfont"
4. Unzip the file and replace the entire fontello catalog. (**public/fonts/fontello**)

The CSS for the icons are transpiled/merged with our Sass. This happends in **public/sass/common/icons.scss** and is handled by a plugin called node-sass-css-importer (https://www.npmjs.com/package/node-sass-css-importer). Overrides and things related should be placed here.

The icons are moved to build catalog through a gulptask during build.   

### Release
KTH Style is currently in alpha. Changes are commited and pushed in the usual way to GitHub but when it's time to release a new version this is procedure:  

*REMEMBER: Don't change version in the package.json!*

*One time setup: set login credentials to KTH's npm account locally.*

then commit everyting you have in your local repo and 

```
$ npm version prerelease
```

The new version is released to npm and can be found here https://www.npmjs.com/package/kth-style. Since KTH Style currently has two different versions the latest release will be seen here. To view all releases you can type the following in you terminal: 

```
$ npm show kth-style versions
```

## Migrate from KTH Style 1.x (WORK IN PROGRESS)
 - Glyphicons are now removed as standard icons in Bootstrap. We now use Fontello (fontello.com). See the icons section in the "Develop in KTH Style" section

## TODO
- Add new icons and handle licenses for fontello. (icon to add "plus-circle" from Entypo)
- Create Example box around kth-style examples in this doc.
- Support fullscreen (like ambassadörswebben)
- Investigare on small buttons... how do they work with <buttons>
- A test page with many examples of buttons ...
- Set title on every page 
- Alla buttons ska inte få style av typen/klassen .btn. Se exempel "kopiera kod"
- buttons.hb - secondary-knappen anbänder fel klass? Default?
- Mobile
  - Storlek på knappar bör tänkas igenom. Fullbredd?

