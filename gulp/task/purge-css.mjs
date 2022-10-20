import dir from '../config.mjs';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import purgecss from 'gulp-purgecss';

const purgeCss = () => {
	return gulp.src(dir.build.stylesheets + '**/*.css')
		.pipe(plumber())
		.pipe(purgecss({
			content: [dir.build.html + '**/*.html', dir.build.javascripts + '**/*.js']
		}))
		.pipe(gulp.dest(dir.build.stylesheets))
}
export default purgeCss;
