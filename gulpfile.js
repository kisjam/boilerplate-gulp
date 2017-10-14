const dir = {
  src: {
    root: 'src/',
    stylesheets: 'src/assets/scss/',
    javascripts: 'src/assets/js/',
    images: 'src/assets/images/',
    fonts: 'src/assets/fonts/',
    html: 'src/assets/pug'
  },
  build: {
    root: 'dist/',
    stylesheets: 'dist/assets/scss/',
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

gulp.task('js', function() {
  // gulp.src(folder.src + 'js/**/*')
  // .pipe(plumber())
  // .pipe(webpack(webpackConfig))
  // .pipe(gulp.dest(folder.build + 'js/'))
  // .pipe(browserSync.stream());
});

const sassConfig = {
  outputStyle: 'nested',
  precision: 3,
  errLogToConsole: true
}
const autoprefixerConfig = {
  browsers: ['last 2 versions']
}

gulp.task('css', function() {
  return gulp.src(dir.src.stylesheets + '**/*.scss')
    .pipe(plumber())
    .pipe(sass(sassConfig))
    .pipe(autoprefixer(autoprefixerConfig))
    .pipe(gulp.dest(dir.build.stylesheets))
    .pipe(browserSync.stream());
});

gulp.task('html', function() {
  // return gulp.src(folder.src + '**/*.html')
  //   .pipe(gulp.dest(folder.build))
  //   .pipe(browserSync.stream());

});

gulp.task('server', function() {
  // return browserSync.init({
  //   //proxy: 'kisjam.com.dev'
  // })
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
