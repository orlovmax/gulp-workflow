# Grunt Front-end scaffold

My front-end boilerplate based on [grunt-boilerplate](https://github.com/orlovmax/grunt-boilerplate), have the same folder structure but have predefined dependencies for Bower and boileplate-files for styles, markup and javascript

## Contents
* [Folder structure](#folder-and-file-structure)
* [Requirements](#requirements)
* [How to start](#how-to-start)
	- [Editorconfig](#editorconfig)
	- [Package.json dependencies](#packagejson-dependencies)
* [Bower](#bower)
	- [bower.json dependencies](#bowerjson-dependencies)
* [Tasks](#tasks)
	- [Default task](#default-task)
	- [Bower dev task](#bower-dev-task)
	- [Clean task](#clean-task)
	- [Build task](#build-task)
	- [Deploy task](#deploy-task)
* [Live reload](#live-reload)
* [Additional things](#additional-things)
* [TODO](#todo)
* [Changelog](#changelog)
* [License](#license)

## Folder and file structure

```
.
├── Gruntfile.js
├── package.json
├── bower.json
├── README.md
├── Rakefile
├── grunt                                     //grunt tasks
|   ├── task.js
│   └── aliases.yml 
├── dev                                       // site source
|   ├── coffee                                // coffee scripts
│   │   └── script.coffee
│   ├── css                                   // compiled css
│   │   ├── screen.css
│   │   └── screen_noscript.css
│   ├── img                                   //image sources
│   │   └── *.png, *.jpg, *.gif 
│   ├── templates                             // templates
│   │   ├── pages                             // main pages templates
│   │   │   └── index.jade
│   │   ├── components                        // page blocks
│   │   │   ├── _header.jade
│   │   │   ├── general                       // common src
│   │   │   │   └── _meta.jade
│   │   │   └── parked                        // page stub 
│   │   │       └── parked.html 
│   │   ├── layouts                           // page layouts
│   │   │   └── main.jade
│   │   └── helpers                           // mixins and vars
│   │       └── mixins.jade, variables.jade 
│   ├── js                                    // compiled and source js
│   │   ├── compiled.js 
│   │   ├── custom.js
│   │   ├── head                              // concatenated head scripts
│   │   │   └── head.js  
│   │   └── vendor                            // concatenated vendor scripts
│   │       └── vendor.js
│   ├── php                                   // *.php scripts
│   │   └── script.php 
│   ├── styles                                // preprocessor styles
│   │   ├── screen.{sass, scss, less, styl}
│   │   ├── screen_noscript.{sass, scss, less, styl}
│   │   └── components
│   ├── html                                  // compiled html markup
│   │   └── index.html
│   ├── helpers                               // helper files
│   │   └── *.* 
│   ├── fonts                                 //font sources
│   ├── devtools                              //some dev tools
│   └── design                                // psd layout
│
└── build                                     // built source
	├── index.html                            // minified html file
	├── css                                   // minified styles
	│   ├── screen.min.css
	│   └── screen_noscript.min.css 
	├── img                                   // minified images
	│   └── *.png, *.jpg, *.gif
	├── js                                    // minified assembled js
	│   ├── assembled.min.js
	│   ├── head                              // minified head js
	│   │   └── head.min.js
	│   └── vendor                            // minified vendor js
	│       └── vendor.min.js
	├── php                                   // *.php scripts
	│   └── script.php
	└── fonts                                 // @font-face-ready webfonts

```
Source files  placed in `dev` folder, where you should provide your development process.

## Requirements:

- [Ruby](http://www.ruby-lang.org/)
- [Node.js](http://nodejs.org/)
- [Grunt](http://gruntjs.com/) (`npm install -g grunt-cli`)
- [Bower](http://bower.io/) (`npm install -g bower`)

## How to start
If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to use [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins.

* Before start you need to have _npm_ installed now, as well as a _grunt_.
* Then you need to download this files. You can chose `Download zip` option or clone this repo to your local maschine.
* Now go to this project folder in terminal. Once you're familiar with grunt installation process, you may install all this things with this command: `npm install`.This will create `node_moduldes` folder, that's normal.
* Run `grunt`, and it will compile your files and watch for all changes. See [Tasks](#Tasks) chapter for more details.

### Editorconfig
This project have .editorconfig file at the root that used by your code editor with editorconfig plugin. It describes codestyle like indent style, trailing whitespaces etc. See more details [here](http://editorconfig.org/) 

### Package.json dependencies 
* ["grunt"](https://github.com/gruntjs)
* ["grunt-autoprefixer"](https://github.com/nDmitry/grunt-autoprefixer)
* ["grunt-bower-concat"](https://github.com/sapegin/grunt-bower-concat)
* ["grunt-bowercopy"](https://github.com/timmywil/grunt-bowercopy)
* ["grunt-combine-media-queries"](https://github.com/buildingblocks/grunt-combine-media-queries)
* ["grunt-contrib-clean"](https://github.com/gruntjs/grunt-contrib-clean)
* ["grunt-contrib-concat"](https://github.com/gruntjs/grunt-contrib-concat)
* ["grunt-contrib-coffee"](https://github.com/gruntjs/grunt-contrib-coffee)
* ["grunt-contrib-copy"](https://github.com/gruntjs/grunt-contrib-copy)
* ["grunt-contrib-htmlmin"](https://github.com/gruntjs/grunt-contrib-htmlmin)
* ["grunt-contrib-imagemin"](https://github.com/gruntjs/grunt-contrib-imagemin)
* ["grunt-contrib-jade"](https://github.com/gruntjs/grunt-contrib-jade)
* ["grunt-contrib-less"](https://github.com/gruntjs/grunt-contrib-less)
* ["grunt-contrib-sass"](https://github.com/gruntjs/grunt-contrib-sass)
* ["grunt-contrib-stylus"](https://github.com/gruntjs/grunt-contrib-stylus)
* ["grunt-contrib-uglify"](https://github.com/gruntjs/grunt-contrib-uglify)
* ["grunt-contrib-watch"](https://github.com/gruntjs/grunt-contrib-watch)
* ["grunt-csso"](https://github.com/t32k/grunt-csso)
* ["grunt-newer"](https://github.com/tschaub/grunt-newer)
* ["grunt-processhtml"](https://github.com/dciccale/grunt-processhtml)
* ["grunt-shell"](https://github.com/sindresorhus/grunt-shell)

## Bower
From the version 1.2.0 this boilerplate ready for work with [Bower](https://github.com/bower/bower). So at the root was created `bower.json` file with project dependencies. To install dependencies you need globally instaled Bower. 
Bower depends on [Node.js](http://nodejs.org/) and [npm](http://npmjs.org/). Also make sure that [git](http://git-scm.com/) is installed as some bower
packages require it to be fetched and installed. To install Bower - just run this `$ npm install -g bower`.
Now we are ready to install components:
```sh
# install dependencies listed in bower.json
$ bower install

# install a package and add it to bower.json
$ bower install <package> --save
```

Now we can run our grunt task, by default called bower-dev `grunt bower-dev`.
This task run two other tasks: `bower-concat` will concatenate specified components in right order and `bowercopy` will copy main or selected files of components from bower_components folder to specified folders in you project.
Please note, that this tasks need to be specified according to packages that were installed in your project.   
More details about this tasks you can read here:
* ["grunt-bower-concat"](https://github.com/sapegin/grunt-bower-concat)
* ["grunt-bowercopy"](https://github.com/timmywil/grunt-bowercopy)

Also `bower-dev` task run ["grunt-contrib-clean"](https://github.com/gruntjs/grunt-contrib-clean) to delete all those pesky .gitkeep files. If you don't use bower - just run `grunt clean:gitkeep`. Please remember, `grunt.clean` task have other subtasks to process unnecessary files, so be careful while using this.

### bower.json dependencies 
* "jquery"
* "modernizr"

## Tasks
Here comes groups of grunt tasks with some explanations

### Default task
Compiles styles, markup templates, minifies images, copy updated *.php scripts to build folder. While using grunt watch, it will be done once and than grunt watch will check for changes and process only changed files.

### Bower dev task
I've talked about this task above, it will remove .gitkeep files, copy and concat bower files to your dev directories.

### Clean task
There is one clean task, but with some properties. It was created to delete unnecessary files, like styles or markup. When you've chosen some languages, ex. scss and jade, then you should delete less and haml boilerplate files. Just run `grunt clean:less` and `grunt clean:haml`. Voila, our scaffold is totally clean and ready for further development.

### Build task
Recently, I've added build task, that allows us to clean our code from dev references and code-helpers, like livereload script. Also we're able to add some code snippets, like message for outdated browsers or link to minified source just before build. Thanks to ["grunt-processhtml"](https://github.com/dciccale/grunt-processhtml)
Also this task contains `combine-media-queries` and `autoprefixer` tasks, because in default task they make reminifying of css without changes. As development process passes in modern browsers and combined media queries just for performance, we should run these tasks only for final build.

Just type `grunt build` and it will process your files and execute rules inside conditional comments, than all files will be minified and placed to appropriate folders.

###Deploy task
For this purpose was used grunt-shell task, that runs deploy script from Rakefile. Just customize Rakefile and type in terminal `grunt deploy`. Please note, that running scripts from Rakefile requires `Ruby` and `rubygems`.
`grunt deploy` task commit changes and push dev files to master branch and files from build folder to source branch.
`grunt build-deploy` task commit changes only for build folder and push changes to source branch

## Live reload 
For this project I use live.js which minified version and  and link to this script in final html will be removed after running build task.

##Additional things
In this scaffold were used some third-part components like:
- [browser update screen](https://github.com/mycodelab/browser-update-screen) - message that will appear for old IE
- parked page stub - simple stub for project init. Useful for new github hosted site when your project in dev. Just remove that include from your index markup file and write some awesome code.
- [useful sass\less elements](https://github.com/mycodelab/miniature-wookie#elements-lib)
- [simple grid](https://github.com/mycodelab/miniature-wookie#grid-system)
- [layout tools](https://github.com/mycodelab/miniature-wookie#layout-tools)

## TODO
* Block oriented structure
* JSHint
* JSCS
* CSSCOMB
* Browserify
* make YO template based on this stuff

## Changelog
* v1.3.0
	- Structure modified (now it's more about blocks but separated by techs), *.haml templates disabled
* v1.2.0
	- folder structure modified
* v1.1.9
	- templates structure modified
* v1.1.8
	- grid system added
* v1.1.7
	- parked page stub added
* v1.1.6
	- dev structure modified
* v1.1.5
	- deploy task added
* v1.1.4
	- coffeescript task added
* v1.1.3
	- stylus task added
* v1.1.2
	- added path variables
* v1.1.1
	- fonts copy task added, imagemin task set to recursive execute
* v1.1.0
	- rename www to build, added head scripts and copy task
* v1.0.3
	- added copy task for *.php scripts
* v1.0.2
	- moved autoprefixer and cmq tasks to build task
* v1.0.1
	-  added debug files, modified readme
* v1.0.0 (September 29, 2014)
	- Initial commit

## License
[MIT](http://opensource.org/licenses/MIT)
