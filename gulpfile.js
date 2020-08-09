const gulp = require('gulp');
const sass = require('gulp-sass');
const autoPrefixer = require('gulp-autoprefixer');
const imageMin = require('gulp-imagemin');
const terser = require('gulp-terser');
const concat = require('gulp-concat');


const cssPath = 'src/sass/**/*.scss';
const imgPath = 'src/img/**/*.png';
const jsPath = 'src/js/**/*.js';


const cssTask = () => {
    return gulp.src(cssPath)
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoPrefixer())
        .pipe(gulp.dest('public/css'))
}

const imgTask = () => {
    return gulp.src(imgPath)
    .pipe(imageMin())
    .pipe(gulp.dest('public/img'))
}

const jsTask = () => {
    return gulp.src(jsPath)
        .pipe(concat('main.min.js'))
        .pipe(terser())
        .pipe(gulp.dest('public/js'))
}

const watchTask = () => {
    return gulp.watch([cssPath, imgPath, jsPath], gulp.parallel(cssTask, imgTask, jsTask));
}

exports.default = gulp.series(gulp.parallel(cssTask, imgTask, jsTask), watchTask);