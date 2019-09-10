import gulp from 'gulp';
import plumber from 'gulp-plumber';

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

import newer from 'gulp-newer';
import pngquant from 'imagemin-pngquant';
import imagemin from 'gulp-imagemin';

const optimizationLevel = {
	'optimizationLevel': 5
}
const pngquantConfig = {
	quality: '65-80',
	speed: 1
}
export const images = () => {
	return gulp.src(dir.src.images + '**/*')
		.pipe(plumber())
		.pipe(newer(dir.build.images))
		.pipe(imagemin(
			[pngquant(pngquantConfig)]
		))
		.pipe(imagemin(optimizationLevel))
		.pipe(gulp.dest(dir.build.images))
		.pipe(browserSync.stream());
}

import webpack from 'webpack-stream';
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
export const js = () => {
	return gulp.src(dir.src.javascripts + '**/*')
		.pipe(plumber())
		.pipe(webpack(webpackConfig))
		.pipe(gulp.dest(dir.build.javascripts))
		.pipe(browserSync.stream());
}

import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import sassGlob from 'gulp-sass-glob';

const sassConfig = {
	outputStyle: 'expanded',
	precision: 3,
	errLogToConsole: true
}
const autoprefixerConfig = {
	browsers: ['last 2 versions']
}

export const css = () => {
	return gulp.src(dir.src.stylesheets + '**/[^_]*.scss')
		.pipe(plumber())
		.pipe(sassGlob())
		.pipe(sass(sassConfig))
		.pipe(autoprefixer(autoprefixerConfig))
		.pipe(gulp.dest(dir.build.stylesheets))
		.pipe(browserSync.stream());
}

import data from 'gulp-data';
import nunjucksRender from 'gulp-nunjucks-render';
const htmlExtension = '.njk';

export const html = () => {
	return gulp.src([
		dir.src.html + '**/*' + htmlExtension
	])
		.pipe(plumber())
		.pipe(data(function () {
			return require(dir.njk.json);
		}))
		.pipe(data(function (file) {
			return { 'filename': file.path.split(dir.src.html).pop().replace(htmlExtension, '').split('/') }
		}))
		.pipe(nunjucksRender({
			path: [dir.njk.root]
		}))
		.pipe(gulp.dest(dir.build.html))
		.pipe(browserSync.stream());
}

import iconfont from 'gulp-iconfont';
import svgmin from 'gulp-svgmin';
import consolidate from 'gulp-consolidate';

export const icon = () => {
	return gulp.src(dir.src.svg + '**/*')
		.pipe(svgmin())
		.pipe(plumber())
		.pipe(iconfont({
			fontName: 'icon',
			formats: ['ttf', 'eot', 'woff', 'svg'],
			normalize: true
		}))
		.on('glyphs', function (glyphs) {

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
}

import browserSync from 'browser-sync';

export const server = done => {
	browserSync.init({
		open: 'external',
		server: {
			baseDir: dir.build.root
		}
	})
	done();
}

export const watch = () => {
	gulp.watch(dir.src.images + '**/*', gulp.series(images));
	gulp.watch(dir.src.stylesheets + '**/*', gulp.series(css));
	gulp.watch(dir.src.javascripts + '**/*', gulp.series(js));
	gulp.watch(dir.src.svg + '**/*', gulp.series(icon));
	gulp.watch(dir.src.root + '**/*' + htmlExtension, gulp.series(html));
	gulp.watch(['*.html', '*.php', '*.njk']).on('change', function () {
		browserSync.reload();
	})
}

export const run = gulp.series(images, js, css, html, icon);
export default gulp.series(run, server, watch);
