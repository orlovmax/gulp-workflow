const paths = {
  html: {
    src: './src/html/**/*.html',
    watch: './src/html/**/*.html',
    build: './build/',
    dist: './dist/'
  },
  pug: {
    config: './src/pug/config.json',
    src: './src/pug/pages/*.pug',
    watch: './src/pug/**/*.{pug,json}',
    build: './build/',
    dist: './dist/'
  },
  css: {
    src: './src/css/*.css',
    watch: './src/css/**/*.css',
    build: './build/static/css/',
    dist: './dist/static/css/'
  },
  sass: {
    src: './src/sass/*.{sass,scss}',
    watch: './src/sass/**/*.{sass,scss}',
    build: './build/static/css/',
    dist: './dist/static/css/'
  },
  stylus: {
    src: './src/stylus/*.styl',
    watch: './src/stylus/**/*.styl',
    build: './build/static/css/',
    dist: './dist/static/css/'
  },
  js: {
    src: './src/js/',
    watch: './src/js/**/*.js',
    build: './build/static/js/',
    dist: './dist/static/js/'
  },
  fonts: {
    src: './src/fonts/**/*.{eot,svg,ttf,otf,woff,woff2}',
    watch: './src/fonts/**/*.{eot,svg,ttf,otf,woff,woff2}',
    build: './build/static/fonts/',
    dist: './dist/static/fonts/'
  },
  images: {
    src: './src/images/**/*.{jpg,jpeg,png,gif,tiff,svg,webp}',
    watch: './src/images/**/*.{jpg,jpeg,png,gif,tiff,svg,webp}',
    build: './build/static/images/',
    dist: './dist/static/images/'
  },
  videos: {
    src: './src/videos/**/*.{mp4,webm,ogg}',
    watch: './src/videos/**/*.{mp4,webm,ogg}',
    build: './build/static/videos/',
    dist: './dist/static/videos/'
  },
  helpers: {
    src: './src/helpers/**/*',
    watch: './src/helpers/**/*',
    build: './build/',
    dist: './dist/'
  },
  server: {
    build: './build/',
    dist: './dist/'
  },
  clean: {
    build: './build/*',
    dist: './dist/*',
    gitkeep: ['./src/**/.gitkeep','./build/**/.gitkeep','./dist/**/.gitkeep']
  }
};

export { paths };
