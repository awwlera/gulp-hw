const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');
const minifyCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass-compile', function() {
    return gulp.src('./src/style/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/style/css/'))
});

gulp.task('watch', function() {
    gulp.watch('./src/style/scss/*.scss', gulp.series('sass-compile'))
    gulp.watch('./src/style/css/*.css', gulp.series('minify-css'))
});

exports.default = () => (
	gulp.src('./src/style/css/*.css')
	.pipe(sourcemaps.init())
	.pipe(autoprefixer())
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('./src/style/css/'))
);

gulp.task('minify-css', function() {
    return gulp.src('./src/style/css/*.css')
    .pipe(sourcemaps.init())
    .pipe(minifyCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./src/style/css/'))
});


