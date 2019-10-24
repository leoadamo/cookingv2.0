/* Import dos pacotes instalados com NPM */
const { src, dest, watch, series } = require('gulp');
// const gulpIf = require('gulp-if');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
// const useref = require('gulp-useref');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const cache = require('gulp-cache');
const rename = require('gulp-rename');
const del = require('del');
const bs = require('browser-sync').create();

// BASE PATH
const base = 'app/';

// DIST
const dist = 'dist/';

// STYLES PATHS
const styleSRC = 'app/assets/scss/main.scss';
const styleOUT = 'app/assets/css/';
const styleWATCH = 'app/assets/scss/**/*.scss';

// JS PATHS
const jsSRC = 'app/assets/js/**/*.js';
const jsWATCH = 'app/assets/js/**/*.js';

// HTML AND ASSETS
const htmlSRC = 'app/pages/*.html';
const imagesSRC = 'app/assets/images/**/*.+(png|jpg|gif|svg)';
const fontsSRC = 'app/assets/fonts/**/*';

/* Levantando um server no browser */
function browserSync(done) {
	bs.init({
		server: {
			baseDir: [`${base}pages`, base],
			index: 'index.html'
		},
		port: 3000
	});
	done();
}

/* Função para fazer o livereload no browser */
function bsReload(done) {
	bs.reload();
	done();
}

/* Função para compilar, comprimir e injetar no browser as alterações nos arquivos SASS */
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

// function js() {}

/* Função para otimizar os assets para produção */
// function useRef() {
// 	return src(paths.html)
// 		.pipe(useref())
// 		.pipe(gulpIf('*.js', uglify()))
// 		.pipe(gulpIf('*.css', cssnano()))
// 		.pipe(dest(paths.dist));
// }

/* Função para minificar as imagens do projeto */
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

function favicon() {
	return src(`${base}pages/*.ico`).pipe(dest(dist));
}

/* Função para observar as mudanças nos arquivos SASS e HTML */
function watchFiles() {
	watch(styleWATCH, styles);
	watch(jsWATCH, bsReload);
	watch(htmlSRC, bsReload);
}

function clearCache(done) {
	return cache.clearAll(done);
}

function clearDist(done) {
	done();
	return del.sync(dist);
}

/* Exportando Tasks */
exports.default = series(browserSync, styles, watchFiles);
//exports.build = series(useRef, fonts, images, favicon);
exports.clear = series(clearCache, clearDist);
