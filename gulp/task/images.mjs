import path from "node:path";
import gulp from "gulp";
import changed from "gulp-changed";
import plumber from "gulp-plumber";
import browserSync from "browser-sync";
import through2 from "through2";
import sharp from "sharp";
import { dir } from "../config.mjs";

const images = () => {
	return gulp
		.src(dir.src.images + "**/*.{jpg,png,webp,svg,gif}", {
			encoding: false,
		})
		.pipe(plumber())
		.pipe(changed(dir.build.images, { extension: ".webp" }))
		.pipe(
			through2.obj(function (file, _, cb) {
				if (
					file.isNull() ||
					file.isDirectory() ||
					path.extname(file.path).toLowerCase() === ".webp" ||
					path.extname(file.path).toLowerCase() === ".svg" ||
					path.extname(file.path).toLowerCase() === ".gif"
				) {
					cb(null, file);
					return;
				}

				sharp(file.contents)
					.webp()
					.toBuffer()
					.then((data) => {
						file.contents = data;
						file.path = path.join(
							path.dirname(file.path),
							path.basename(file.path, path.extname(file.path)) + ".webp"
						);

						return cb(null, file);
					})
					.catch((err) => cb(err));
			})
		)
		.pipe(gulp.dest(dir.build.images))
		.pipe(browserSync.stream());
};

export default images;
