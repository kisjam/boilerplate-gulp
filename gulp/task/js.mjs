import { dir } from "../config.mjs";
import gulp from "gulp";
import plumber from "gulp-plumber";
import webpack from "webpack";
import webpackStream from "webpack-stream";
import { dirname } from "path";
import { fileURLToPath } from "url";
import browserSync from "browser-sync";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const webpackConfig = {
	mode: "development",
	entry: "./" + dir.src.javascripts + "app.ts",
	output: {
		path: `${__dirname}/dist`,
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: "ts-loader",
			},
		],
	},
	resolve: {
		extensions: [".ts", ".js"],
	},
};
const js = () => {
	return gulp
		.src(dir.src.javascripts + "**/*")
		.pipe(plumber())
		.pipe(webpackStream(webpackConfig, webpack))
		.pipe(gulp.dest(dir.build.javascripts))
		.pipe(browserSync.stream());
};

export default js;
