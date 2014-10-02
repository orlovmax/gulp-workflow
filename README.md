# Front-end scaffold

My front-end boilerplate based on [grunt-boilerplate](https://github.com/orlovmax/grunt-boilerplate), have the same folder structure but have predefined dependencies for Bower and boileplate-files for styles, markup and javascript

## Folder and file structure

```
.
├── Gruntfile.js
├── package.json
├── bower.json
├── README.md
├── dev
│   ├── index.html // compiled markup html file
│   ├── css
│   │   ├── screen.css // compiled css with autoprefixer processing
│   │   └── screen_noscript.css // compiled css with autoprefixer processing
│   ├── img
│   │   └── *.png, *.jpg, *.gif //image sources
│   ├── markup
│   │   ├── index.haml, index.jade // marrkup templates sources
│   │   └── components
│   ├── js
│   │   ├── custom.js // custom scripts and plugins sources
│   │   └── vendor
│   │       ├── vendor.js // concatenated vendor scripts
│   │       └── jquery
│   │           └── jquery.js // libs sources
│   ├── styles
│   │   ├── screen.scss, screen.less // preprocessor styles
│   │   ├── screen_noscript.scss, screen_noscript.less // preprocessor styles
│   │   └── components
│   ├── fonts //font sources
│   ├── devtools //some dev tools, like live.js or pixel-perfect helpers
│   └── layout // psd layout
│
└── www
    ├── index.html // minified html file
    ├── css
    │   ├── screen.min.css // minified styles
    │   └── screen_noscript.min.css // minified noscript styles
    ├── img
    │   └── *.png, *.jpg, *.gif // minified images
    ├── js
    │   ├── assembled.js // assembled custom scripts and plugins
    │   ├── assembled.min.js // minified assembled custom scripts and plugins
    │   └── vendor
    │       ├── vendor.min.js // concatenated and minified vendor scripts
    │       └── jquery
    │           └── jquery.min.js // minified vendor libs
    └── fonts // @font-face-ready webfonts

```        
Source files  placed in `dev` folder, where you should provide your development process.

## How to start
If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to use [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins.

* Before start you need to have _npm_ installed now, as well as a _grunt_.
* Then you need to download this files. You can chose `Download zip` option or clone this repo to your local maschine.
* Now go to this project folder in terminal. Once you're familiar with grunt installation process, you may install all this things with this command: `npm install`.This will create `node_moduldes` folder, that's normal.
* Run `grunt`, and it will watch for all the changes.

###Package.json dependencies 
* ["grunt"](https://github.com/gruntjs)
* ["grunt-autoprefixer"](https://github.com/nDmitry/grunt-autoprefixer)
* ["grunt-bower-concat"](https://github.com/sapegin/grunt-bower-concat)
* ["grunt-bowercopy"](https://github.com/timmywil/grunt-bowercopy)
* ["grunt-combine-media-queries"](https://github.com/buildingblocks/grunt-combine-media-queries)
* ["grunt-contrib-clean"](https://github.com/gruntjs/grunt-contrib-clean)
* ["grunt-contrib-concat"](https://github.com/gruntjs/grunt-contrib-concat)
* ["grunt-contrib-haml"](https://github.com/jhchen/grunt-contrib-haml)
* ["grunt-contrib-htmlmin"](https://github.com/gruntjs/grunt-contrib-htmlmin)
* ["grunt-contrib-imagemin"](https://github.com/gruntjs/grunt-contrib-imagemin)
* ["grunt-contrib-jade"](https://github.com/gruntjs/grunt-contrib-jade)
* ["grunt-contrib-less"](https://github.com/gruntjs/grunt-contrib-less)
* ["grunt-contrib-sass"](https://github.com/gruntjs/grunt-contrib-sass)
* ["grunt-contrib-uglify"](https://github.com/gruntjs/grunt-contrib-uglify)
* ["grunt-contrib-watch"](https://github.com/gruntjs/grunt-contrib-watch)
* ["grunt-csso"](https://github.com/t32k/grunt-csso)
* ["grunt-newer"](https://github.com/tschaub/grunt-newer)
* ["grunt-preprocess"](https://github.com/jsoverson/grunt-preprocess#getting-started)

##Bower
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

Also `bower-dev` task run ["grunt-contrib-clean"](https://github.com/gruntjs/grunt-contrib-clean) to delete all those pesky .gitkeep files. If you don't use bower - just run `grunt clean`. 

###bower.json dependencies 
* "jquery"
* "modernizr"

##Clean task
There is one clean task, but with some properties. It was created to delete unnecessary files, like styles or markup. When you've chosen some languages, ex. scss and jade, then you should to delete less and haml boilerplate files. Just run `grunt clean:less` and `grunt clean:haml`. Voila, Our scaffold is totally clean and ready for development.

##Build task
Recently, I've added build task, that allows us to clean our code from dev references and code-helpers, like livereload script. Also we're able to add some code snippets, like message for outdated browsers or link to minified source just before build. Thanks to ["grunt-preprocess"](https://github.com/jsoverson/grunt-preprocess#getting-started)

Just type `grunt build` and it will process your files and execute rules inside conditional comments, than all files will be minified and placed to appropriate folders.

##Live reload 
For this project I use live.js, that was connected from awesome [www.jsdelivr.com](http://www.jsdelivr.com/#!livejs). After build task link to this script will be removed from final html.

## Changelog
* v1.0.0 (September 29, 2014)
    * Initial commit

## License
[MIT](http://opensource.org/licenses/MIT)