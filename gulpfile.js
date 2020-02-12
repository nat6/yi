'use strict';
var gulp = require('gulp'),
		pug = require('gulp-pug'),
		sass = require('gulp-sass');

gulp.task('pug', function() {
	return gulp.src('src/pug/*.pug')
		.pipe(pug({
			pretty:true
		}))
		.pipe(gulp.dest('build'));
	})