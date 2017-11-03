const dir = {
  src: {
    root: 'src/',
    stylesheets: 'src/assets/sass/',
    javascripts: 'src/assets/js/',
    images: 'src/assets/images/',
    fonts: 'src/assets/fonts/',
    html: 'src/assets/ejs/page/'
  },
  build: {
    root: 'dist/',
    stylesheets: 'dist/assets/css/',
    javascripts: 'dist/assets/js/',
    images: 'dist/assets/images/',
    fonts: 'dist/assets/fonts/',
    html: 'dist/'
  }
}

const gulp = require('gulp'),
  newer = require('gulp-newer'),
  pngquant = require('imagemin-pngquant'),
  imagemin = require('gulp-imagemin');

const optimizationLevel = {
  'optimizationLevel': 5
}
const pngquantConfig = {
  quality: '65-80',
  speed: 1
}

gulp.task('images', function() {
  gulp.src(dir.src.images + '**/*/')
    .pipe(newer(dir.build.images))
    .pipe(imagemin(
      [pngquant(pngquantConfig)]
    ))
    .pipe(imagemin( optimizationLevel ))
    .pipe(gulp.dest(dir.build.images))
    .pipe(browserSync.stream());
});

const webpack = require('webpack-stream');
const webpackConfig = {
  entry: './' + dir.src.javascripts + 'app.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env']
        }
      }
    ]
  }
}
gulp.task('js', function() {
  gulp.src(dir.src.javascripts + '**/*')
  .pipe(plumber())
  .pipe(webpack(webpackConfig))
  .pipe(gulp.dest(dir.build.javascripts))
  .pipe(browserSync.stream());
});

const plumber = require('gulp-plumber'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer');
const sassConfig = {
  outputStyle: 'expanded',
  precision: 3,
  errLogToConsole: true
}
const autoprefixerConfig = {
  browsers: ['last 2 versions']
}
gulp.task('css', function() {
  return gulp.src(dir.src.stylesheets + '**/[^_]*.scss')
    .pipe(plumber())
    .pipe(sass(sassConfig))
    .pipe(autoprefixer(autoprefixerConfig))
    .pipe(gulp.dest(dir.build.stylesheets))
    .pipe(browserSync.stream());
});

const ejs = require('gulp-ejs');
<<<<<<< HEAD
<<<<<<< HEAD
const data = require('gulp-data');
=======
>>>>>>> e065d377fef07f9e03caf751988aa3d5ab0b2ecb
=======
=======
const data = require('gulp-data');
>>>>>>> release/2.3
>>>>>>> release/2.3

gulp.task('html', function() {
  return gulp.src([
    dir.src.html + '**/*.ejs',
    '!' + dir.src.html + '**/_*.ejs'
  ])
    .pipe(plumber())
<<<<<<< HEAD
<<<<<<< HEAD
=======
    .pipe(ejs({}, {
=======
>>>>>>> release/2.3
    .pipe(data(function(file) {
      return { 'filename': file.path }
    }))
    .pipe(ejs({
      devRoot: dir.src.html
    }, {
<<<<<<< HEAD
=======
    .pipe(ejs({}, {
>>>>>>> e065d377fef07f9e03caf751988aa3d5ab0b2ecb
=======
>>>>>>> release/2.3
>>>>>>> release/2.3
    }, {
      "ext": ".html"
    }))
    .pipe(gulp.dest(dir.build.html))
    .pipe(browserSync.stream());

});

const browserSync = require("browser-sync");
gulp.task('server', function() {
  return browserSync.init({
    open: 'external',
    server: {
      baseDir: "dist"
    }
  })
});

gulp.task('watch',['server'] ,function() {
  gulp.watch(dir.src.images + '**/*', ['images']);
  gulp.watch(dir.src.stylesheets + '**/*', ['css']);
  gulp.watch(dir.src.javascripts + '**/*', ['js']);
  gulp.watch(dir.src.root + '**/*.ejs', ['html']);
  gulp.watch('*.html').on('change', function() {
    browserSync.reload();
  })
});

gulp.task('run', ['images', 'css', 'js', 'html']);
gulp.task('default', ['run', 'watch']);
