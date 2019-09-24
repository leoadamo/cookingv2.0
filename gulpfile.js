const { src, dest, watch, parallel } = require('gulp')
const sass = require('gulp-sass')
const bs = require('browser-sync').create()

function browserSync(done) {
  bs.init({
    server: {
      baseDir: 'app/'
    },
    port: 3000
  })
  done()
}

function bsReload(done) {
  bs.reload()
  done()
}

function css() {
  return src('app/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(dest('app/css'))
    .pipe(bs.stream())
}

function watchFiles() {
  watch('app/scss/**/*.scss', css)
  watch('app/*.html', bsReload)
}

exports.css = css
exports.watch = parallel(watchFiles, browserSync)
