/* Import dos pacotes instalados com NPM */
const { src, dest, watch, parallel } = require('gulp')
const sass = require('gulp-sass')
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
    .pipe(dest('app/css'))
    .pipe(bs.stream())
}

/* Função para observar as mudanças nos arquivos SASS e HTML */
function watchFiles() {
  watch('app/scss/**/*.scss', compileSass)
  watch('app/*.html', bsReload)
}

/* Exportando Tasks */
exports.watch = parallel(browserSync, watchFiles)
