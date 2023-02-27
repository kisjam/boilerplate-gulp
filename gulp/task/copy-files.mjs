import dir from '../config.mjs';
import gulp from 'gulp';
import plumber from 'gulp-plumber';

export const copyAssets = () => {
	return gulp.src([
		dir.src.other + '**/*'
	])
		.pipe(plumber())
		.pipe(gulp.dest(dir.build.other))
}
export const copyPublic = () => {
	return gulp.src([
		dir.src.public + '**/*'
	])
		.pipe(plumber())
		.pipe(gulp.dest(dir.build.public))
}
