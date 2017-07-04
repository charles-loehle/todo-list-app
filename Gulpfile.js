var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var cleanCSS = require('gulp-clean-css');

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('sass', function () {
  return gulp.src('sass/*.scss')
    .pipe(sass({
			outputStyle: 'compressed'
		}))
    .pipe(cleanCSS())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({stream: true})); // prompts a reload after compilation
});

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch("sass/*.scss", ['sass']);
    gulp.watch("*.html", browserSync.reload);
    gulp.watch("*assets/js/*.js", browserSync.reload);
});
