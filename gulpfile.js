const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify')

function compressorImagens() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}

function compressorJavaScripts(){
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}

exports.default = function(){
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(compressorImagens));
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(compressorJavaScripts));
}