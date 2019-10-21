/* Import dos pacotes instalados com NPM */
const { src, dest, watch, series } = require('gulp');
const gulpIf = require('gulp-if');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const useref = require('gulp-useref');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const cache = require('gulp-cache');
const del = require('del');
const bs = require('browser-sync').create();

/* Levantando um server no browser */
function browserSync(done) {
	bs.init({
		server: {
			baseDir: ['app/pages', 'app/'],
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
function compileSass() {
	return src('app/assets/scss/main.scss')
		.pipe(
			sass({
				outputStyle: 'compressed'
			}).on('error', sass.logError)
		)
		.pipe(dest('app/assets/css/'))
		.pipe(bs.stream());
}

/* Função para otimizar os assets para produção */
function useRef() {
	return src('app/pages/*.html')
		.pipe(useref())
		.pipe(gulpIf('*.js', uglify()))
		.pipe(gulpIf('*.css', cssnano()))
		.pipe(dest('dist/'));
}

/* Função para minificar as imagens do projeto */
function images() {
	return src('app/assets/images/**/*.+(png|jpg|gif|svg)')
		.pipe(
			cache(
				imagemin([
					imageminMozjpeg({
						quality: 70
					})
				])
			)
		)
		.pipe(dest('dist/assets/images'));
}

function fonts() {
	return src('app/assets/fonts/**/*').pipe(dest('dist/assets/fonts'));
}

function favicon() {
	return src('app/pages/*.ico').pipe(dest('dist/'));
}

/* Função para observar as mudanças nos arquivos SASS e HTML */
function watchFiles() {
	watch('app/assets/scss/**/*.scss', compileSass);
	watch('app/pages/*.html', bsReload);
	watch('app/assets/js/**/*.js', bsReload);
}

function clearCache(done) {
	return cache.clearAll(done);
}

function clearDist(done) {
	done();
	return del.sync('dist/');
}

/* Exportando Tasks */
exports.default = series(browserSync, compileSass, watchFiles);
exports.build = series(useRef, fonts, images, favicon);
exports.clear = series(clearCache, clearDist);
