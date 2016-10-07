/* Define dependencies */
var gulp = require('gulp'),
	watch = require('gulp-watch'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	browserSync = require('browser-sync').create(),
	css = 'public/css',
	js = 'public/js',
	fonts = 'public/fonts',
	images = 'public/images';

gulp.task('components', function() {

	/* bootstrap */
	gulp.src('node_modules/bootstrap/dist/css/bootstrap.min.css')
		.pipe(gulp.dest(css));

	/* jquery */
	gulp.src('node_modules/jquery/dist/jquery.min.js')
		.pipe(gulp.dest(js));

	/* font-awesome */
	gulp.src('node_modules/font-awesome/fonts/*')
		.pipe(gulp.dest(fonts));
});

gulp.task('images', function() {
	return gulp.src('assets/images/*')
		.pipe(gulp.dest(images))
		.pipe(browserSync.stream());
});

gulp.task('styles', function() {
	return gulp.src('assets/sass/app.scss')
		.pipe(sass()).on('error', function(error) {console.log('ERROR ' + error.message + '\n\n');})
		.pipe(autoprefixer({browsers: ['last 2 versions']}))
		.pipe(gulp.dest(css))
		.pipe(browserSync.stream());
});

gulp.task('scripts', function() {
	return gulp.src(['assets/js/scripts.js'])
		.pipe(gulp.dest(js))
		.pipe(browserSync.stream());
});

gulp.task('serve', ['components', 'styles', 'images', 'scripts'], function() {

	browserSync.init({
		server: "./public",
		notify: false
	});

	gulp.watch('assets/sass/*', ['styles']).on('change', browserSync.reload);
	gulp.watch('assets/js/*', ['scripts']).on('change', browserSync.reload);;
	gulp.watch('assets/images/*', ['images']).on('change', browserSync.reload);;
	gulp.watch('public/*.html').on('change', browserSync.reload)

});

gulp.task('default', ['serve']);