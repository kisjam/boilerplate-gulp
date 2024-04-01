import gulp from "gulp";
import { deleteAsync } from "del";
import browserSync from "browser-sync";
import { dir } from "./gulp/config.mjs";
import images from "./gulp/task/images.mjs";
import js from "./gulp/task/js.mjs";
import css from "./gulp/task/css.mjs";
import html from "./gulp/task/html.mjs";
import server from "./gulp/task/server.mjs";
import { copyPublic } from "./gulp/task/copy-files.mjs";

export const watch = () => {
	gulp.watch(dir.src.images + "**/*", gulp.series(images));
	gulp.watch(dir.src.stylesheets + "**/*", gulp.series(css));
	gulp.watch(dir.src.javascripts + "**/*", gulp.series(js));
	gulp.watch(dir.src.root + "**/*" + ".njk", gulp.series(html));
	gulp.watch(dir.src.public + "**/*", gulp.series(copyPublic));
	gulp.watch(["*.html", "*.php", "*.njk"]).on("change", function () {
		browserSync.reload();
	});
	gulp.watch(dir.src.public + "**/*").on("unlink", async (path) => {
		const distPath = path.replace(dir.src.public, dir.build.public);
		const deletedFilePaths = await deleteAsync([distPath]);
		console.log("Deleted files:\n", deletedFilePaths.join("\n"));
	});
	gulp.watch(dir.src.html + "**/*").on("unlink", async (path) => {
		const distPath = path
			.replace(dir.src.html, dir.build.html)
			.replace(dir.njk.srcExtention, dir.njk.buildExtention);
		const deletedFilePaths = await deleteAsync([distPath]);
		console.log("Deleted files:\n", deletedFilePaths.join("\n"));
	});
};

// npx gulp
export const run = gulp.series(images, js, css, html, copyPublic);
export default gulp.series(run, server, watch);
