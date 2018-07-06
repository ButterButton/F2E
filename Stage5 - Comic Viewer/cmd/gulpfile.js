var gulp = require('gulp'),
  sass = require('gulp-sass');
var webserver = require('gulp-webserver');

gulp.task('webserver', function () {
  gulp.src('../')
    .pipe(webserver({
      port: 1234,
      livereload: true,
      directoryListing: false,
      open: true,
      fallback: 'index.html'
    }));
});

gulp.task('sass', function () {
  return gulp.src('../sass/*.sass') // 指定要處理的 Scss 檔案目錄
    .pipe(sass({ // 編譯 Scss
      outputstyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(gulp.dest('../css/')); // 指定編譯後的 css 檔案目錄
});
gulp.task('sass: watch', function () {
  gulp.watch('../sass/*.sass', ['sass'])
})

gulp.task('default', ['webserver', 'sass', 'sass: watch']);