var gulp = require('gulp');

gulp.task('watch', function(){
	gulp.watch('public/js/**/*.js');
	gulp.watch('public/css/*.css');
	gulp.watch('public/index.html');
	gulp.watch('public/partials/*.html');
});

gulp.task('default', ['watch']);