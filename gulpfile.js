const dir = {
  src: {
    root: 'src/',
    stylesheets: 'src/assets/sass/',
    javascripts: 'src/assets/js/',
    images: 'src/assets/images/',
    fonts: 'src/assets/fonts/',
    html: 'src/assets/pug'
  },
  build: {
    root: 'dist/',
    stylesheets: 'dist/assets/css/',
    javascripts: 'dist/assets/js/',
    images: 'dist/assets/images/',
    fonts: 'dist/assets/fonts/',
    html: 'dist/assets/pug'
  }
}

const gulp = require('gulp'),
  newer = require('gulp-newer'),
  imagemin = require('gulp-imagemin'),
  browserSync = require("browser-sync");

const optimizationLevel = {
  'optimizationLevel': 5
}

gulp.task('images', function() {
  gulp.src(dir.src.images + '**/*/')
    .pipe(newer(dir.build.images))
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

gulp.task('html', function() {
  return gulp.src(dir.src.root + '**/*.html')
    .pipe(gulp.dest(dir.build.root))
    .pipe(browserSync.stream());

});

gulp.task('server', function() {
  return browserSync.init({
    open: 'external',
    server: {
      baseDir: "dist"
    }
    //proxy: 'kisjam.com.dev'
  })
});

gulp.task('watch',['server'] ,function() {
  gulp.watch(dir.src.images + '**/*', ['images']);
  gulp.watch(dir.src.stylesheets + '**/*', ['css']);
  gulp.watch(dir.src.javascripts + '**/*', ['js']);
  gulp.watch(dir.src.root + '**/*.html', ['html']);
  gulp.watch('*.html').on('change', function() {
    browserSync.reload();
  })
});

gulp.task('run', ['images', 'css', 'js', 'html']);
gulp.task('default', ['run', 'watch']);
