const dir = {
	src: {
		root: 'src/',
		stylesheets: 'src/assets/sass/',
		javascripts: 'src/assets/js/',
		images: 'src/assets/images/',
		fonts: 'src/assets/fonts/',
		svg: 'src/assets/svg/',
		html: 'src/assets/html/pages/',
		pdf: 'src/assets/html/pdf/',
		video: 'src/assets/html/video/',
		other: 'src/assets/other/'
	},
	build: {
		root: 'dist/',
		stylesheets: 'dist/assets/css/',
		javascripts: 'dist/assets/js/',
		images: 'dist/assets/images/',
		fonts: 'dist/assets/fonts/',
		svg: 'dist/assets/svg/',
		html: 'dist/',
		pdf: 'dist/assets/html/pdf/',
		video: 'dist/assets/html/video/',
		other: 'dist/assets/'
	},
	njk: {
		root: 'src/assets/html',
		json: '../../src/assets/html/_config/site.json',
		srcExtention: '.njk',
		buildExtention: '.html'
	}
}
export default dir;
