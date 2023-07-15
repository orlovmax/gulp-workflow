# Gulp Workflow

Gulp-based build tool with Pug, Sass, Rollup, PostCSS, BrowserSync

## Contents

- [Requirements](#requirements)
- [How To Start](#how-to-start)
- [Folder And File Structure](#folder-and-file-structure)
    - [Reserved Folders](#reserved-folders)
- [Configuration](#configuration)
- [Tasks](#tasks)
    - [Cleanup](#cleanup)
    - [Development](#development)
    - [Production](#production)
    - [Demonstration](#demonstration)
- [Inactive Tasks](#inactive-tasks)
- [License](#license)

## Requirements

- [Node.js](http://nodejs.org/) **v16 or later**
- [Gulp](http://gulpjs.com/) **v4 or later**

## How To Start

- Install Node.js >=16
- Install gulp-cli globally `npm install --global gulp-cli`
- Download this repo using git `git clone https://github.com/orlovmax/gulp-workflow.git`
- Go to downloaded folder `cd gulp-workflow`
- Install dependencies from `package.json` by running: `npm install`
- Start development by running `npm start` or `gulp`
- See [Tasks](#tasks) and [Configuration](#configuration) for more details

If you haven't used Gulp before, be sure to check out the [Gulp - Getting Started](https://gulpjs.com/docs/en/getting-started/quick-start).

## Folder And File Structure

```
./
├── .editorconfig
├── .gitignore
├── gulpfile.js
├── package.json
├── README.md
├── LICENSE.md
|
├── gulp/                                      * gulp tasks
|   ├── _config.js                             * tasks config
|   └── task.js
|
├── src/                                       * site source
|   ├── pug/                                   * pug templates
|   |   ├── blocks/                            * blocks
|   │   |   └── block.pug
|   │   ├── helpers/                           * helper mixins
|   │   ├── vendor/                            * third-party code
|   │   ├── layouts/                           * page layouts
|   │   ├── pages/                             * page templates
|   │   └── config.json                        * site config
|   │
|   ├── sass/                                  * sass stylesheets
|   |   ├── blocks/                            * blocks
|   │   |   └── block.sass
|   │   ├── helpers/                           * mixins and vars
|   │   ├── vendor/                            * third-party code
|   │   ├── custom.sass
|   │   ├── noscript.sass
|   │   └── screen.sass
|   │
│   ├── js/                                    * scripts
|   |   ├── vendor/                            * third-party code
|   |   ├── modules/                           * modules
|   │   ├── head.js                            * head scripts
|   │   └── body.js                            * body scripts
|   │
│   ├── fonts/                                 * font sources
|   │
│   ├── images/                                * image sources
|   │
│   └── helpers/                               * helper files
│       └── favicon.ico
|
├── build/                                     * site build
│   ├── index.html
│   ├── page.html
│   └── static/                                * static assets
│       ├── css/                               * compiled stylesheets with sourcemaps
│       ├── js/                                * bundled scripts
│       ├── fonts/                             * webfonts
│       └── images/                            * images
│
└── dist/                                      * site distribution (Ignored by GIT)
    ├── index.html
    ├── page.html
    └── static/                                * static assets
        ├── css/                               * minified compiled stylesheets
        ├── js/                                * minified bundled scripts
        ├── fonts/                             * webfonts
        └── images/                            * images
```

#### Reserved Folders

`html`, `css`, `stylus`, `videos` folder names in `src` are reserved by preconfigured inactive tasks, see [Inactive Tasks](#inactive-tasks).

## Configuration

- `.editorconfig` file at the root of the project describes indentation style, trailing whitespaces etc. See [EditorConfig](http://editorconfig.org/) site for more details.
- `src/pug/config.json` contains data for pug templates: site settings, meta information, links to css / js files or external fonts.

## Tasks

#### Cleanup

`npm run cleanup` or `gulp cleanup`

- Removes .gitkeep placeholders from work directories.

#### Development

`npm start` or `npm run dev` or `gulp dev`

- Compiles pug templates
- Compiles sass stylesheets, combines media queries, adds vendor prefixes, generates sourcemaps
- Bundles scripts
- Copies fonts
- Copies images
- Copies helpers
- Runs BrowserSync static server with live reload
- Watches for changes and run dev tasks

#### Production

`npm run prod` or `gulp prod`

- Empties `dist` folder
- Compiles pug templates, minifies markup
- Compiles sass stylesheets, combines media queries, adds vendor prefixes, minifies stylesheets
- Bundles scripts, minifies scripts
- Copies fonts
- Copies images
- Copies helpers
- Runs BrowserSync static server

#### Demonstration

`npm run demo` or `gulp demo` \

- Runs static server.

## Inactive Tasks

Preconfigured tasks but disabled in current version (commented-out and not imported), see [gulpfile.js](https://github.com/orlovmax/gulp-workflow/blob/master/gulpfile.js) and [watch.js](https://github.com/orlovmax/gulp-workflow/blob/master/gulp/watch.js).

**html** ([html.js](https://github.com/orlovmax/gulp-workflow/blob/master/gulp/html.js)) \
Dev: copies html markup \
Prod: copies and minifies html markup \
How To Activate:
- uncomment `import { htmlDev, htmlProd } from './gulp/html.js';` section in `gulpfile.js`
- add `htmlDev` to `dev` and `htmlProd` to `prod` series in `gulpfile.js`
- uncomment `import { htmlDevChanged } from './html.js';` and `Watch HTML` sections in `./gulp/watch.js`
- create `html` folder in `src`
  ```
  ./
  └── src/
      └── html/                                  * html markup
          └── file.html
  ```

**css** ([css.js](https://github.com/orlovmax/gulp-workflow/blob/master/gulp/css.js)) \
Dev: copies css stylesheets, inlines imports, combines media queries, adds vendor prefixes \
Prod: copies css stylesheets, inlines imports, combines media queries, adds vendor prefixes, minifies stylesheets \
How To Activate:
- uncomment `import { cssDev, cssProd } from './gulp/css.js';` section in `gulpfile.js`
- add `cssDev` to `dev` and `cssProd` to `prod` series in `gulpfile.js`
- uncomment `import { cssDev } from './css.js';` and `Watch css` sections in `./gulp/watch.js`
- create `css` folder in `src`
  ```
  ./
  └── src/
      └── css/                                   * css stylsheets
          ├── blocks/
          |   └── block.css
          ├── helpers/
          ├── vendor/
          ├── custom.css
          ├── noscript.css
          └── screen.css
  ```

**stylus** ([stylus.js](https://github.com/orlovmax/gulp-workflow/blob/master/gulp/stylus.js)) \
Dev: compiles stylus stylesheets, combines media queries, adds vendor prefixes, generates sourcemaps \
Prod: compiles stylus stylesheets, combines media queries, adds vendor prefixes, minifies stylesheets \
How To Activate:
- uncomment `import { stylusDev, stylusProd } from './gulp/stylus.js';` section in `gulpfile.js`
- add `stylusDev` to `dev` and `stylusProd` to `prod` series in `gulpfile.js`
- uncomment `import { stylusDev } from './stylus.js';` and `Watch stylus` sections in `./gulp/watch.js`
- create `stylus` folder in `src`
```
./
└── src/
    └── stylus/                                * stylus stylesheets
        ├── blocks/
        |   └── block.styl
        ├── helpers/
        ├── vendor/
        ├── custom.styl
        ├── noscript.styl
        └── screen.styl
```

**videos** ([videos.js](https://github.com/orlovmax/gulp-workflow/blob/master/gulp/videos.js)) \
Dev / Prod: copies videos \
How To Activate:
- uncomment `import { videosDev, videosProd } from './gulp/videos.js';` section in `gulpfile.js`
- add `videosDev` to `dev` and `videosProd` to `prod` series in `gulpfile.js`
- uncomment `import { videosDevChanged } from './videos.js';` and `Watch videos` sections in `./gulp/watch.js`
- create `videos` folder in `src`
```
./
└── src/
    └── videos/                                * video sources
```

## License

[MIT](https://github.com/orlovmax/gulp-workflow/blob/master/LICENSE.md)
