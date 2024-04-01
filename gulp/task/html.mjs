import { dir } from "../config.mjs";
import gulp from "gulp";
import plumber from "gulp-plumber";
import browserSync from "browser-sync";
import data from "gulp-data";
import nunjucksRender from "gulp-nunjucks-render";
import { readFile } from "fs/promises";

const nunjucksData = JSON.parse(
	await readFile(new URL(dir.njk.json, import.meta.url))
);
const htmlExtension = ".njk";

const html = () => {
	return gulp
		.src([dir.src.html + "**/*" + htmlExtension])
		.pipe(plumber())
		.pipe(
			data(function () {
				return nunjucksData;
			})
		)
		.pipe(
			data(function (file) {
				return {
					filename: file.path
						.split(dir.src.html)
						.pop()
						.replace(htmlExtension, "")
						.split("/"),
				};
			})
		)
		.pipe(
			nunjucksRender({
				path: [dir.njk.root],
			})
		)
		.pipe(gulp.dest(dir.build.html))
		.pipe(browserSync.stream());
};

export default html;
