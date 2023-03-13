import through from "through2";
import gulpUtil from "gulp-util";
import jsdom from "jsdom";

const { JSDOM } = jsdom;
const { PluginError } = gulpUtil;

const capture = function (_html) {
	const window = new JSDOM(_html).window;
	const dcmsLayoutPageBlock = window.document.querySelector(
		"#dcms_layoutPageBlock"
	);

	const children = dcmsLayoutPageBlock.children;

	for (const elem of children) {
		const startComment = window.document.createComment(
			"###DCMS_BLOCK_START###"
		);
		const endComment = window.document.createComment("###DCMS_BLOCK_END###");
		elem.parentNode.insertBefore(startComment, elem);
		elem.parentNode.insertBefore(endComment, elem.nextSibling);
	}

	return window.document.documentElement.outerHTML;
};

export const addBlockTag = function () {
	const func = function (file, enc, cb) {
		if (file.isNull()) {
			return cb(null, file);
		}

		if (file.isStream()) {
			this.emit(
				"error",
				new PluginError(PLUGIN_NAME, "Streams not supported!")
			);
		}

		if (file.isBuffer()) {
			var contents = String(file.contents);
			contents = capture(contents);
			contents = "<!doctype html>" + contents;

			file.contents = new Buffer(contents);

			return cb(null, file);
		}

		this.push(file);
		cb();
	};
	return through.obj(func);
};
