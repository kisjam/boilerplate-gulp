const dir = {
	src: {
		root: 'src/',
		stylesheets: 'src/assets/sass/',
		javascripts: 'src/assets/js/',
		images: 'src/assets/images/',
		fonts: 'src/assets/fonts/',
		svg: 'src/assets/svg/',
		html: 'src/assets/html/pages/'
	},
	build: {
		root: 'dist/',
		stylesheets: 'dist/assets/css/',
		javascripts: 'dist/assets/js/',
		images: 'dist/assets/images/',
		fonts: 'dist/assets/fonts/',
		svg: 'dist/assets/svg/',
		html: 'dist/'
	},
	njk: {
		root: 'src/assets/html',
		json: './src/assets/html/_config/site.json'
	}
}
const config = {
	html: {
		extension: '.njk'
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
	devtool: 'inline-source-map',
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

const sassGlob = require("gulp-sass-glob");
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
		.pipe(sassGlob())
		.pipe(sass(sassConfig))
		.pipe(autoprefixer(autoprefixerConfig))
		.pipe(gulp.dest(dir.build.stylesheets))
		.pipe(browserSync.stream());
});

const data = require('gulp-data');
const nunjucksRender = require('gulp-nunjucks-render');
const htmlbeautify = require('gulp-html-beautify');
const beautifyOptions = {
		'indent_with_tabs':true
}

gulp.task('html', function() {
	return gulp.src([
		dir.src.html + '**/*' + config.html.extension
		])
		.pipe(plumber())
		.pipe(data(function() {
			return require(dir.njk.json);
		}))
		.pipe(data(function(file) {
			return { 'filename': file.path.split(dir.src.html).pop().replace(config.html.extension, '').split('/') }
		}))
		.pipe(nunjucksRender({
				path: [dir.njk.root]
		}))
		.pipe(htmlbeautify(beautifyOptions))
		.pipe(gulp.dest(dir.build.html))
		.pipe(browserSync.stream());
});

var iconfont = require('gulp-iconfont');
var svgmin = require('gulp-svgmin');
var consolidate = require('gulp-consolidate');

gulp.task('iconfont', function(){

	gulp.src(dir.src.svg + '**/*.svg')
		.pipe(svgmin())
		.pipe(plumber())
		.pipe(iconfont({
			fontName: 'icon',
			formats: ['ttf', 'eot', 'woff', 'svg'],
			normalize: true
		}))
		.on('glyphs', function(glyphs){

			gulp.src(dir.src.fonts + '/template/_icon.scss')
				.pipe(consolidate('lodash', {
					glyphs: glyphs,
					fontName: 'icon',
					fontPath: '../fonts/',
					className: 'icon',
				}))
				.pipe(gulp.dest(dir.src.stylesheets + '/foundation/'));

		})
		.pipe(gulp.dest(dir.build.fonts))
		.pipe(browserSync.stream());
});

const browserSync = require("browser-sync");
gulp.task('server', function() {
	return browserSync.init({
		open: 'external',
		server: {
			baseDir: dir.build.root
		}
	})
});

gulp.task('watch',['server'] ,function() {
	gulp.watch(dir.src.images + '**/*', ['images']);
	gulp.watch(dir.src.stylesheets + '**/*', ['css']);
	gulp.watch(dir.src.javascripts + '**/*', ['js']);
	gulp.watch([dir.src.svg + '/**/*.svg'],['iconfont']);
	gulp.watch(dir.src.root + '**/*' + config.html.extension, ['html']);
	gulp.watch(['*.html', '*.php']).on('change', function() {
		browserSync.reload();
	})
});

gulp.task('run', ['images', 'css', 'js', 'html']);
gulp.task('default', ['run', 'watch']);
