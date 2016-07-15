require('./config/gulp/release');
require('./config/gulp/test');

var gulp = require('gulp');
var dutil = require('./config/gulp/doc-util');

gulp.task('default', function (done) {
  dutil.logIntroduction();
  done();
});
