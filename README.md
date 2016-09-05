# KTH Style

## Description

The purpose of this project is to provide the essential design and style for applications within KTH and make the development process of these applications faster. The project contain style sheets and SASS files which makes a good start for new projects. You can choose to import and use pre made .css files or .scss files to build upon in your project.


## How to make a new version of [kth-style](https://gita.sys.kth.se/Infosys/kth-style)
1. Clone the kth-style repository
2. Make the changes you want in the SASS (scss) files
3. Commit and sync the changes to the kth-style repository
4. Jenkins will now run npm install and the gulp script which compiles the SASS files and create/minifies them into css files and creates a dist which is pushed back to the kth-style repository
5. You are now ready to import the new files to your project.


## How to use kth-style in your project

### Based on the [node-web](https://gita.sys.kth.se/Infosys/node-web) template (with Bower and Gulp)

This is the preferred way since you will always get the latest changes automatically downloaded. 

If you have started a new project based on the [node-web](https://github.com/KTH/node-web) template you have the setup done and the style will be imported via [bower.json](https://gita.sys.kth.se/Infosys/node-web/blob/master/bower.json) to the bower_components directory and moved to /public/css directory the [gulp.js](https://github.com/KTH/node-web/blob/master/gulpfile.js) script.

Changes on the imported style is made in [kth-style](https://github.com/KTH/kth-style) and any project specific style is done in the project itself.

To lock down your project to a specific version of kth-style you go to your bower.json file and change the kth-style dependency:

```
...
    "dependencies" : {
       "kth-style" : "https://github.com/KTH/kth-style.git#latest"
...
```
to your commit hash of choice
  
```
...
   "dependencies" : {
      "kth-style" : "https://github.com/KTH/kth-style.git#E8vrnk489"
...
```

**Proxy application overrides**  
If your application is going to be proxied in to www.kth.se e.g. www.kth.se/places, you need to add the "proxy prefix path" into file [/public/css/overrides.scss](https://github.com/KTH/places-web/blob/develop/public/css/overrides.scss) so the path for the static resources map the proxy path.

### Based on any custom project (witout integrated Bower and Gulp)
If the project do not make use of Bower and Gulp you need to download [Bootstrap](http://getbootstrap.com/getting-started/#download) and import the pre compiled css files from the [dist/css](https://github.com/KTH/kth-style/tree/master/dist/css) directory.

### Using it in your site
Kth-style can be used to easily get the right headers, fonts, colors etc. But where it really shines is when you also use Bootstrap.

A page in your application should have these links (of course you can place these files anywhere you want to). Observe that if you have a application specific CSS file it should be placed after the kth-style css files.

It would look something like this.

```
  <link rel="stylesheet" type="text/css" media="screen" href="/static/css/bootstrap/bootstrap.min.css" />
  <link rel="stylesheet" type="text/css" media="screen" href="/static/css/kth-style/kth-style.css" />
  <link rel="stylesheet" type="text/css" media="screen" href="/static/css/kth-style/kth-bootstrap-theme.css" />
  
  <link rel="stylesheet" type="text/css" media="screen" href="/static/css/you-super-awesome-override.css" />
```

and have this as its body

```
    <body>
      <div>
          <div class="container">
              <div class="row">
                  <div class="col-md-12">
                    <!-- your page here -->
                 </div>
              </div>
          </div>
      </div>
    </body>
```

This will result in the correct KTH padding on the sides of the page.

Some quick notes on using bootstrap:

+ Never use more than one container on a page. In other words, when using the code above, that´s it.
+ When using a row it´s good practice to also use columns.
+ Read more on the Bootstrap page: [Bootstrap](http://getbootstrap.com/getting-started/)

## Development of KTH-Style
When doing improvements on the project and want to test locally, run gulp with this command:

```
$ gulp
```
and then restart the application.

#### The reference environment
When pushing to the repository [kth-style](https://github.com/KTH/kth-style) Jenkins listen, build the project and pushing it to [http://kth-style-1-r.referens.sys.kth.se:3000/kth-style](http://kth-style-1-r.referens.sys.kth.se:3000/kth-style)