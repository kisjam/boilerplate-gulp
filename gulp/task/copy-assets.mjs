import dir from '../config.mjs';
import gulp from 'gulp';
import plumber from 'gulp-plumber';

const copyAssets = () => {
	return gulp.src([
		dir.src.other + '**/*'
	])
		.pipe(plumber())
		.pipe(gulp.dest(dir.build.other))
}
export default copyAssets;
