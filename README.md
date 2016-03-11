# Front-end scaffold - PLAYGROUND

My front-end boilerplate with predefined directory structure and some Bower dependencies.

## Stable front-end templates
* General template: [https://github.com/synteagle/synt-general-template](https://github.com/synteagle/synt-general-template)
* CMS template: [https://github.com/synteagle/synt-cms-template](https://github.com/synteagle/synt-cms-template)

## Contents
* [Folder structure](#folder-and-file-structure)
* [Requirements](#requirements)
	- [Editorconfig](#editorconfig)
* [How to start](#how-to-start)
* [Tasks](#tasks)
	- [Start](#start)
	- [Dev](#dev)
	- [Build](#build)
	- [Rebuild](#rebuild)
	- [Server](#server)
	- [Sprite](#sprite)
* [Live reload](#live-reload)
* [License](#license)

## Folder and file structure
```
./
├── .editorconfig
├── bower.json
├── README.md
├── automation.sh
|
├── automation/                                * build systems
|	├── grunt/                                 * grunt build system
|	|	├──grunt-scripts/                      * grunt tasks
|	|	|   ├── task.js
|	|	│   └── aliases.yml
|	|	│
|	|	├── Gruntfile.js
|	|	└── package.json
|	|
|	└── gulp/                                  * gulp build system
|		├──gulp-scripts/                       * gulp tasks
|		|   ├── tasks/
|		│   └── paths.js
|		│
|		├── gulpfile.js
|		└── package.json
|
├── screenshots/                               * responsive test screenshots
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
│   └── data/                                  * configs and data for templates
│
└── build/                                     * built source
	├── index.html
	├── page.html
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
- [Node.js](http://nodejs.org/)
- Build sytem: [Grunt](http://gruntjs.com/) or [Gulp](http://gulpjs.com/)
- [Bower](http://bower.io/)
- Optionally: [Editorconfig](http://editorconfig.org/)

#### Editorconfig
This project have .editorconfig file at the root that used by your code editor with editorconfig plugin. It describes codestyle like indent style, trailing whitespaces etc. See more details [here](http://editorconfig.org/)

## How to start
If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to use [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins.

If you haven't used [Gulp](http://gulpjs.com/) before, be sure to check out the [Getting Started](https://github.com/gulpjs/gulp/blob/master/docs/README.md) guide, as it explains how to use [Gulp.js](https://github.com/google/web-starter-kit/blob/master/gulpfile.js), also check these [recips](https://github.com/gulpjs/gulp/tree/master/docs/recipes#recipes) 

Before start you need to have installed _npm_ , as well as _grunt_/_gulp_ and _bower_ globally.

**Four simple steps to start:**
* Download these files. You can chose `Download zip` option or clone this repo to your local maschine.
* Now go to this project folder in terminal. Run `automation.sh` script by typing `bash automation.sh` or `sh automation.sh` and choose build system - it will extract Grunt or Gulp scripts from the `automation` directory into project folder. Or you can manually copy all necessary files from `automation/build-system-name`
* Install dependencies from `package.json` by running: `npm install` and bower dependencies from `bower.json`: `bower install`. This will create `node_moduldes` and `bower_components` folders.
* Run tasks from the list below and start devevelopment! 

Also `bower install` included into `start` task using shell plugin. It will install bependencies and copy them to related folder. See tasks for more details.

**bower.json dependencies**
* "jquery"
* "modernizr"
* "respond"
* "html5shiv"

## Tasks
Here comes groups of grunt and gulp tasks with some explanations

#### Start 
Install bower dependencies and place them to dev folders.
Grunt: `grunt start` 
Gulp: `gulp start`
```
- 'shell:bower'                          Install bower components
- 'bower:ie'                             Copy ie components to js folder
- 'bower:vendor'                         Copy vendor  components to js folder
- 'clean:gitkeep'                        Remove gitkeep files
```

#### Dev
Dev task with static server.
Grunt: `grunt dev` 
Gulp: `gulp dev`
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
- 'cmq'                                  Combine media queries in css files
- 'jade'                                 Compile Jade templates
- 'sync:helpers'                         Sync helpers and other assets
- 'sync:fonts'                           Sync fonts
- 'sync:images'                          Sync images
- 'browserSync'                          Run dev server with watch option
- 'watch:dev'                            Watch for changes and run dev task
```

#### Build 
Build task.
Grunt: `grunt build` 
Gulp: `gulp build`
```
- 'imagemin'                             Minify images
- 'processhtml'                          Replace assets paths in html
- 'autoprefixer'                         Add vendor prefixes in css
- 'csscomb'                              Applie styleguide to stylesheets
- 'uglify'                               Minify javascript files
- 'csso'                                 Minify stylesheets
- 'htmlmin'                              Minify html
- 'clean:dev'                            Remove dev things
- 'browserSync'                          Run test server without watch
```

#### Rebuild 
Regenerate and build project by running all tasks.
Grunt: `grunt rebuild` 
Gulp: `gulp rebuild`
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
- 'cmq'                                  Combine media queries in css files
- 'jade'                                 Compile Jade templates
- 'sync:helpers'                         Sync helpers and other assets
- 'sync:fonts'                           Sync fonts
- 'sync:images'                          Sync images
- 'imagemin'                             Minify images
- 'processhtml'                          Replace assets paths in html
- 'autoprefixer'                         Add vendor prefixes in css
- 'csscomb'                              Applie styleguide to stylesheets
- 'uglify'                               Minify javascript files
- 'csso'                                 Minify stylesheets
- 'htmlmin'                              Minify html
- 'clean:dev'                            Remove dev things
```

#### Server 
Run server without watching for changes.
Grunt: `grunt server` 
Gulp: `gulp server`
```
- 'browserSync'              Run test server without watch
```

#### Sprite 
Sprite creation task. Should be configured before running.
Grunt: `grunt sprite` 
Gulp: `gulp sprite`
```
- 'sprite'                               Create images sprite and related css
```

## Live reload 
This project uses BrowserSync as static server with enabled and configured live reload option.

## License
[MIT](http://opensource.org/licenses/MIT)
