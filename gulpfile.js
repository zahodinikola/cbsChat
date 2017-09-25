var gulp = require('gulp');
var server = require('gulp-server-livereload');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');

// server
gulp.task('serv', function() {
    gulp.src('app')
        .pipe(server({
            livereload: true,
            port: 4200,
            open: true
        }));
});

//styles
gulp.task('style', function() {
    return gulp.src('app/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix({
        browsers: ['last 15 versions']
    }))
    .pipe(gulp.dest('app/css'));
});

//watcher
gulp.task('watch', function(){
    gulp.watch('app/sass/**/*.sass', ['style'])
})

//default task

gulp.task('default', ['serv', 'watch']);