var gulp = require('gulp');
var dutil = require('./doc-util');
var glob = require('glob');

var streamExtensions = [
  'Omnigraffle.zip',
  'eps',
  'ai',
  'ase',
  'pdf',
  'md',
  'sketch',
  //'sketchpalette',
];

gulp.task('test:extensions', function (done) {

  dutil.logMessage('test:extensions', 'Testing supported extensions exist');

  var globOptions = {
    ignore: 'node_modules/**/*',
    strict: true,
  };

  streamExtensions.forEach(function (extension, idx) {
    glob('**/*' + extension, globOptions, function (error, files) {
      if (1 > files.length) {
        dutil.logError('test:extensions', extension + ' doesn\'t exist');
        process.exit(1);
      } else {
        dutil.logData('test:extensions', extension + ' exists ( ' + files + ' )');
      }
      if (idx === streamExtensions.length - 1) {
        done();
      }
    });
  });

});
