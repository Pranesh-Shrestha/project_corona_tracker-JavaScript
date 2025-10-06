// gulpfile.js
const gulp = require('gulp');

// Placeholder build task
gulp.task('build', function(done) {
  console.log("✅ Placeholder gulp build task ran successfully!");
  done();
});

// Default task points to build
gulp.task('default', gulp.series('build'));
