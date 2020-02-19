'use strict';
var gulp = require('gulp'),
		pug = require('gulp-pug'),
		sass = require('gulp-sass');
gulp.task('pug', function() {
	return gulp.src('src/*.pug')
		.pipe(pug({
			pretty:true
		}))
		.pipe(gulp.dest('build'));
	});
gulp.task('sass', function(){
	return gulp.src('src/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('build/styles'))
});
gulp.task('watch', function() {
	gulp.watch('src/*.scss', gulp.parallel('sass'));
	gulp.watch('src/*.pug', gulp.parallel('pug'))
});
gulp.task( 'default', gulp.parallel('sass', 'pug', 'watch'));