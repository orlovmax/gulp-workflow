# Front-end scaffold - PLAYGROUND - Grunt

My front-end boilerplate with predefined dependencies for Bower and boileplate-files for styles, markup and javascript

Please note, this README relates to Grunt template that placed in `master` folder, if you want to use Gulp template  - you can find it in `gulp` branch of this repository.

## Stable front-end templates
* General template: [https://github.com/synteagle/synt-general-template](https://github.com/synteagle/synt-general-template)
* Block template: [https://github.com/synteagle/synt-block-template](https://github.com/synteagle/synt-block-template)
* CMS template: [https://github.com/synteagle/synt-cms-template](https://github.com/synteagle/synt-cms-template)

## Contents
* [Live project examples](live-project-examples)
* [Folder structure](#folder-and-file-structure)
* [Requirements](#requirements)
* [How to start](#how-to-start)
	- [Editorconfig](#editorconfig)
	- [Package.json dependencies](#packagejson-dependencies)
	- [bower.json dependencies](#bowerjson-dependencies)
* [Tasks](#tasks)
	- [Start](#start)
	- [Dev](#dev)
	- [Build](#build)
	- [Rebuild](#rebuild)
	- [Deploy](#deploy)
	- [Server](#server)
	- [Sprite](#sprite)
* [Live reload](#live-reload)
* [License](#license)

## Live project examples

## Folder and file structure

```
./
├── .editorconfig
├── Gruntfile.js
├── package.json
├── bower.json
├── README.md
├── Rakefile
├──grunt/                                      * grunt tasks
|   ├── task.js
│   └── aliases.yml 
|
├── test_screenshots/                          * responsive test screenshots
|
├── dev/                                       * site source
|	├── blocks/                                * website blocks library
|	│   └── block/
|	│       ├── block.sass
|	│       ├── block.styl
|	│       └── block.jade
|	│
|   ├── coffee/                                * coffee scripts
|	│   ├── main/                              * main scripts
|	│   ├── head/                              * head scripts
|	│   └── vendor/                            * vendor scripts
|	│
│   ├── images/                                * image sources
|	│
│   ├── jade/                                  * templates
|	│   ├── helpers/                           * helper mixins
|	│   ├── vendor/                            * third-party code
|	│   ├── layouts/                           * page layouts
|	│   └── pages/                             * main pages templates
|	│
│   ├── js/                                    * compiled and source js
|	|   ├── main/                              * main site scripts
|	│   ├── ie/                                * ie compat scripts
|	│   ├── head/                              * head scripts
|	│   └── vendor/                            * vendor scripts
|	│
│   ├── php/                                   * *.php scripts
|	│
|	├── sass/                                  * sass preprocessor styles
|	│   ├── helpers/                           * mixins and vars
|	│   ├── vendor/                            * third-party code
|	│   ├── ie.sass
|	│   ├── custom.sass
|	│   ├── noscript.sass
|	│   └── screen.sass
|	│
|	├── stylus/                                * stylus preprocessor styles
|	│   ├── helpers/                           * mixins and vars
|	│   ├── vendor/                            * third-party code
|	│   ├── ie.styl
|	│   ├── custom.styl
|	│   ├── noscript.styl
|	│   └── screen.styl
|	│
│   ├── helpers/                               * helper files
|	|	├── index.html
|	|	├── favicon.ico
|	|	└── .htaccess
|	│
│   ├── fonts/                                 * font sources
|	│
│   └── devtools/                              * some dev tools
│
└── build/                                     * built source
	├── index.html
	├── page.html
	├── php/                                   * php scripts
	|
	└── static/                                * static assets
		├── css/                               * minified styles
		|
		├── images/                            * minified images
		│
		├── js/                                * minified assembled js
		|
		└── fonts/                             * @font-face-ready webfonts

```

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

This template is ready for work with [Bower](https://github.com/bower/bower). So at the root was created `bower.json` file with project dependencies. To install dependencies you need globally instaled Bower. 
Bower depends on [Node.js](http://nodejs.org/) and [npm](http://npmjs.org/). Also make sure that [git](http://git-scm.com/) is installed as some bower
packages require it to be fetched and installed. To install Bower - just run this `$ npm install -g bower`.

Now we are ready to install components:
```sh
# install dependencies listed in bower.json
$ bower install

# install a package and add it to bower.json
$ bower install <package> --save
```

Also bower install included into internal start task using shell plugin. Same thing but uses task runner.

#### Editorconfig
This project have .editorconfig file at the root that used by your code editor with editorconfig plugin. It describes codestyle like indent style, trailing whitespaces etc. See more details [here](http://editorconfig.org/) 

#### Package.json dependencies 
* ["grunt"](https://github.com/gruntjs)
* ["grunt-autoprefixer"](https://github.com/nDmitry/grunt-autoprefixer)
* ["grunt-browser-sync"](https://github.com/BrowserSync/grunt-browser-sync)
* ["grunt-cache-bust"](https://github.com/hollandben/grunt-cache-bust)
* ["grunt-combine-media-queries"](https://github.com/buildingblocks/grunt-combine-media-queries)
* ["grunt-contrib-clean"](https://github.com/gruntjs/grunt-contrib-clean)
* ["grunt-contrib-concat"](https://github.com/gruntjs/grunt-contrib-concat)
* ["grunt-contrib-htmlmin"](https://github.com/gruntjs/grunt-contrib-htmlmin)
* ["grunt-contrib-coffee"](https://github.com/gruntjs/grunt-contrib-coffee)
* ["grunt-contrib-imagemin"](https://github.com/gruntjs/grunt-contrib-imagemin)
* ["grunt-contrib-jade"](https://github.com/gruntjs/grunt-contrib-jade)
* ["grunt-contrib-sass"](https://github.com/gruntjs/grunt-contrib-sass)
* ["grunt-contrib-stylus"](https://github.com/gruntjs/grunt-contrib-stylus)
* ["grunt-contrib-uglify"](https://github.com/gruntjs/grunt-contrib-uglify)
* ["grunt-contrib-watch"](https://github.com/gruntjs/grunt-contrib-watch)
* ["grunt-csscomb"](https://github.com/csscomb/grunt-csscomb)
* ["grunt-csso"](https://github.com/t32k/grunt-csso)
* ["grunt-newer"](https://github.com/tschaub/grunt-newer)
* ["grunt-processhtml"](https://github.com/dciccale/grunt-processhtml)
* ["grunt-shell"](https://github.com/sindresorhus/grunt-shell)
* ["grunt-spritesmith"](https://github.com/Ensighten/grunt-spritesmith)
* ["grunt-sync"](https://github.com/tomusdrw/grunt-sync)
* ["main-bower-files"](https://github.com/ck86/main-bower-files)
* ["load-grunt-config"](https://github.com/firstandthird/load-grunt-config)

#### bower.json dependencies 
* "jquery"
* "modernizr"
* "respond"
* "html5shiv"

## Tasks
Here comes groups of grunt tasks with some explanations

#### Start 
`grunt start` - Install bower dependencies and place them to dev folders
```
- 'shell:bower'                          Install bower components
- 'bower:ie'                             Copy ie components to js folder
- 'bower:vendor'                         Copy vendor  components to js folder
- 'clean:gitkeep'                        Remove gitkeep files
```

#### Dev
`gulp dev` - Dev task with static server
```
- 'coffee:main'                          Compile main coffescripts
- 'coffee:head'                          Compile head coffescripts
- 'coffee:vendor'                        Compile vendor coffescripts
- 'concat:main'                          Concatenate main javascripts
- 'concat:head'                          Concatenate head javascripts
- 'concat:ie'                            Concatenate ie javascripts
- 'concat:vendor'                        Concatenate vendor javascripts
- 'sass'                                 Compile Sass stylesheets
- 'stylus'                               Compile Stylus stylesheets
- 'jade'                                 Compile Jade templates
- 'sync:helpers'                         Sync helpers and other assets
- 'sync:fonts'                           Sync fonts
- 'sync:php'                             Sync *.php scripts
- 'sync:images'                          Sync images
- 'browserSync:dev'                      Run dev server with watch option
- 'watch:dev'                            Watch for changes and run dev task
```

#### Build 
`grunt build` - Build task
```
- 'imagemin'                             Minify images
- 'processhtml'                          Replace assets paths in html
- 'cmq'                                  Combine media queries in css files
- 'autoprefixer'                         Add vendor prefixes in css
- 'csscomb'                              Applie styleguide to stylesheets
- 'uglify'                               Minify javascript files
- 'csso'                                 Minify stylesheets
- 'htmlmin'                              Minify html
- 'clean:dev'                            Remove dev things
- 'browserSync:test'                     Run test server without watch
```

#### Rebuild 
`grunt rebuild` - Regenerate and build project by running all tasks
```
- 'coffee:main'                          Compile main coffescripts
- 'coffee:head'                          Compile head coffescripts
- 'coffee:vendor'                        Compile vendor coffescripts
- 'concat:main'                          Concatenate main javascripts
- 'concat:head'                          Concatenate head javascripts
- 'concat:ie'                            Concatenate ie javascripts
- 'concat:vendor'                        Concatenate vendor javascripts
- 'sass'                                 Compile Sass stylesheets
- 'stylus'                               Compile Stylus stylesheets
- 'jade'                                 Compile Jade templates
- 'sync:helpers'                         Sync helpers and other assets
- 'sync:fonts'                           Sync fonts
- 'sync:php'                             Sync *.php scripts
- 'sync:images'                          Sync images
- 'imagemin'                             Minify images
- 'processhtml'                          Replace assets paths in html
- 'cmq'                                  Combine media queries in css files
- 'autoprefixer'                         Add vendor prefixes in css
- 'csscomb'                              Applie styleguide to stylesheets
- 'uglify'                               Minify javascript files
- 'csso'                                 Minify stylesheets
- 'htmlmin'                              Minify html
- 'clean:dev'                            Remove dev things
```

#### Deploy 
`grunt deploy` - Deploy project by running Rakefile: git or ftp push
```
- 'shell:deploy'                         Deploy build version to github
```

#### Server 
`grunt server` - Run server without watching for changes
```
- 'browserSync:test'                     Run test server without watch
```

#### Sprite 
`grunt sprite` - Sprite creation task. Should be configured before running
```
- 'sprite'                               Create images sprite and related css
```

## Live reload 
For this project I use BrowserSync with page reload after assets changing. You can use live.js instead if you want to achieve live coding on LAMP/WAMP server.

## License
[MIT](http://opensource.org/licenses/MIT)
