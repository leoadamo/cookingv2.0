const { src, dest, paralell } = require('gulp')
const sass = require('gulp-sass')

function css() {
  return src('app/scss/main.scss')
    .pipe(sass())
    .pipe(dest('app/css'))
}

exports.css = css
