/* Import dos pacotes instalados com NPM */
const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')
const useref = require('gulp-useref')
const bs = require('browser-sync').create()

/* Levantando um server no browser */
function browserSync(done) {
  bs.init({
    server: {
      baseDir: 'app/'
    },
    port: 3000
  })
  done()
}

/* Função para fazer o livereload no browser */
function bsReload(done) {
  bs.reload()
  done()
}

/* Função para compilar, comprimir e injetar no browser as alterações nos arquivos SASS */
function compileSass() {
  return src('app/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(dest('app/css/'))
    .pipe(bs.stream())
}

/* Função para otimizar os assets para produção */
function useRef() {
  return src('app/*.html')
    .pipe(useref())
    .pipe(dest('dist'))
}

/* Função para observar as mudanças nos arquivos SASS e HTML */
function watchFiles() {
  watch('app/scss/**/*.scss', compileSass)
  watch('app/*.html', bsReload)
  watch('app/js/**/*.js', bsReload)
}

/* Exportando Tasks */
exports.watch = series(browserSync, compileSass, watchFiles)
exports.build = useRef
