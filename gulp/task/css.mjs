import { dir } from "../config.mjs";
import gulp from "gulp";
import plumber from "gulp-plumber";
import browserSync from "browser-sync";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import sassGlob from "gulp-sass-glob-use-forward";

const sass = gulpSass(dartSass);
const sassConfig = {
	includePaths: ["node_modules", dir.src.stylesheets],
	outputStyle: "expanded",
	precision: 3,
	errLogToConsole: true,
};

const css = () => {
	return gulp
		.src(dir.src.stylesheets + "**/[^_]*.scss")
		.pipe(
			plumber({
				errorHandler: function (error) {
					console.log(error.messageFormatted);
					this.emit("end");
				},
			})
		)
		.pipe(sassGlob())
		.pipe(sass.sync(sassConfig))
		.pipe(autoprefixer())
		.pipe(gulp.dest(dir.build.stylesheets))
		.pipe(browserSync.stream());
};
export default css;
