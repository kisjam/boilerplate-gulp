import { dir } from "../config.mjs";
import browserSync from "browser-sync";

const server = (done) => {
	browserSync.init({
		open: "external",
		server: {
			baseDir: dir.build.root,
		},
	});
	done();
};

export default server;
