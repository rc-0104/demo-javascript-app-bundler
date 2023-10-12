const gulp = require('gulp');
const dartSass = require('sass');
const gulpSass = require('gulp-sass');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');

// Utilisez gulpSass avec le compilateur Dart Sass
const sass = gulpSass( dartSass );

// Tâche pour compiler les fichiers SASS
gulp.task('sass', function () {
	return gulp.src('src/**/*.scss')
	.pipe(sass())
	.pipe(autoprefixer())
	.pipe(cssnano())
	.pipe(rename({ suffix: '.min' }))
	.pipe(gulp.dest('dist'));
});

// Tâche pour compiler les fichiers LESS
gulp.task('less', function () {
	return gulp.src('src/**/*.less')
	.pipe(less())
	.pipe(autoprefixer())
	.pipe(cssnano())
	.pipe(rename({ suffix: '.min' }))
	.pipe(gulp.dest('dist'));
});

// Tâche pour observer les modifications des fichiers SASS et LESS
gulp.task('watch', function () {
	gulp.watch('src/**/*.scss', gulp.series('sass'));
	gulp.watch('src/**/*.less', gulp.series('less'));
});

// Tâche par défaut qui exécute toutes les tâches une fois puis regarde pour d'autres modifications
gulp.task('default', gulp.series('sass', 'less', 'watch'));