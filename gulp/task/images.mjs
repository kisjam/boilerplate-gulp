import dir from '../config.mjs';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import newer from 'gulp-newer';
import imagemin from 'gulp-imagemin';
import imageminGifsicle from 'imagemin-gifsicle';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminSvgo from 'imagemin-svgo';
import browserSync from 'browser-sync';

const images = () => {
	return gulp.src(dir.src.images + '**/*')
		.pipe(plumber())
		.pipe(newer(dir.build.images))
		.pipe(imagemin([
			imageminGifsicle({ interlaced: true }),
			imageminMozjpeg({ quality: 75, progressive: true }),
			imageminPngquant({
				quality: [.65, .80],
				speed: 1,
			}),
			imageminSvgo({
				plugins: [
					{ removeViewBox: true },
					{ cleanupIDs: false }
				]
			})
		]))
		.pipe(gulp.dest(dir.build.images))
		.pipe(browserSync.stream());
}

export default images;
