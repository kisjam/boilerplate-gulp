import dir from '../config.mjs';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import browserSync from 'browser-sync';
import iconfont from 'gulp-iconfont';
import consolidate from 'gulp-consolidate';

const icon = () => {
	return gulp.src(dir.src.svg + '**/*')
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
				.pipe(gulp.dest(dir.src.stylesheets + '/global/'));

		})
		.pipe(gulp.dest(dir.build.fonts))
		.pipe(browserSync.stream());
}

export default icon;
