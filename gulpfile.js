// Deps ==========================================

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

// Config =======================================

var outputDir = './dist';
var sources = ['./src/**/*.js'];

// Tasks ==========================================

gulp.task('build', function () {
    gulp.src(sources)
    .pipe(concat('hookup.js'))
    .pipe(gulp.dest(outputDir));
});

gulp.task('build-min', function () {
    gulp.src(sources)
    .pipe(concat('hookup.min.js'))
    .pipe(uglify({ ascii_only: true }))
    .pipe(gulp.dest(outputDir));
});

gulp.task("default", ['build', 'build-min']);
