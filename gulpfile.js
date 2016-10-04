// Define dependencies
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	css = 'css',
	js = 'js',
	fonts = 'fonts',
	images = 'images';

gulp.task('components', function() {

	/* bootstrap */
	gulp.src('')

	/* jquery */
	gulp.src('node_modules/jquery/dist/jquery.min.js')
		.pipe(gulp.dest(js));

	/* font-awesome */
	gulp.src('node_modules/font-awesome/fonts/*')
		.pipe(gulp.dest(fonts));
});

gulp.task('images', function() {
	gulp.src('assets/images/*')
		.pipe(gulp.dest(images));
});

gulp.task('styles', function() {
	gulp.src('assets/sass/app.scss')
		.pipe(sass()).on('error', function(error) {console.log('ERROR ' + error.message + '\n\n');})
		.pipe(autoprefixer({browsers: ['last 2 versions']}))
		.pipe(gulp.dest(css));
});

gulp.task('scripts', function() {
	gulp.src(['assets/js/scripts.js'])
		.pipe(gulp.dest(js));
});