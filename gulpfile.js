/* PLUGINS */
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const rename = require('gulp-rename');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const imageminMozjpeg = require('imagemin-mozjpeg');
const del = require('del');
const bs = require('browser-sync').create();

// DIST
const dist = 'dist/';

// STYLES PATHS
const styleSRC = 'assets/scss/main.scss';
const styleOUT = 'dist/assets/css/';
const styleWATCH = 'assets/scss/**/*.scss';

// JS PATHS
const jsSRC = 'main.js';
const jsFOLDER = 'assets/js/';
const jsOUT = 'dist/assets/js/';
const jsFILES = [jsSRC]; // IN CASE WE HAVE MULTIPLE JS BUNDLES: FRONT-END BUNDLE / BACK-END BUNDLE
const jsWATCH = 'assets/js/**/*.js';

// HTML AND ASSETS
const htmlSRC = 'dist/*.html';
const imagesSRC = 'assets/images/**/*.+(png|jpg|gif|svg)';
const fontsSRC = 'assets/fonts/**/*';

function browserSync(done) {
	bs.init({
		server: {
			baseDir: dist
		},
		port: 3000
	});
	done();
}

function bsReload(done) {
	bs.reload();
	done();
}

function styles() {
	return src(styleSRC)
		.pipe(sourcemaps.init())
		.pipe(
			sass({
				outputStyle: 'compressed',
				errorLogToConsole: true
			}).on('error', console.error.bind(console))
		)
		.pipe(
			autoprefixer({
				cascade: false
			})
		)
		.pipe(rename({ suffix: '.min' }))
		.pipe(sourcemaps.write('./'))
		.pipe(dest(styleOUT))
		.pipe(bs.stream());
}

function js(done) {
	jsFILES.map(entry => {
		return browserify({
			entries: [jsFOLDER + entry]
		})
			.transform(babelify, { presets: ['@babel/env'] })
			.bundle()
			.pipe(source(entry))
			.pipe(
				rename({
					basename: 'bundle',
					extname: '.min.js'
				})
			)
			.pipe(buffer())
			.pipe(sourcemaps.init({ loadMaps: true }))
			.pipe(uglify())
			.pipe(sourcemaps.write('./'))
			.pipe(dest(jsOUT));
	});
	done();
}

function images() {
	return src(imagesSRC)
		.pipe(
			cache(
				imagemin([
					imageminMozjpeg({
						quality: 70
					})
				])
			)
		)
		.pipe(dest(`${dist}assets/images`));
}

function fonts() {
	return src(fontsSRC).pipe(dest(`${dist}assets/fonts`));
}

function watchFiles() {
	watch(styleWATCH, styles);
	watch(jsWATCH, series(js, bsReload));
	watch(htmlSRC, bsReload);
}

function clearCache(done) {
	done();
	return cache.clearAll();
}

function clearDist(done) {
	done();
	return del.sync(`${dist}assets`);
}

exports.default = series(styles, js, images, fonts, browserSync, watchFiles);
exports.clear = series(clearCache, clearDist);
