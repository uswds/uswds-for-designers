var gulp = require('gulp');
var dutil = require('./doc-util');
var spawn = require('cross-spawn');
var del = require('del');
var runSequence = require('run-sequence');
var merge = require('merge-stream');

/*
 * @name streamExtensions
 * @description Supported file extensions for each release.
 * @type {array} - An array of file extensions.
 */
var streamExtensions = [
  'omnigraffle',
  'eps',
  'ai',
  'sketch',
];

/*
 * @name createZipArchive
 * @description Creates zip archives using {@link cross-spawn}.
 * @param {string} taskName
 * @param {string} src
 * @param {string} dest
 * @param {function} done
 */
function createZipArchive (taskName, src, dest, done) {

  var zip = spawn('zip', [
    '--log-info',
    '-r',
    src,
    dest,
    '-x "*.DS_Store"',
  ]);

  zip.stdout.on('data', function (data) {

    if (/[\w\d]+/.test(data)) {

      dutil.logData(taskName, data);

    }

  });

  zip.stderr.on('data', function (data) {

    dutil.logError(taskName, data);

  });

  zip.on('error', function (error) {

    dutil.logError(taskName, 'Failed to create a zip archive');

    done(error);

  });

  zip.on('close', function (code) { if (0 === code) { done(); } });

}

/*
 * @name getAssetDirectory
 * @param {string} ext - A specific asset extension.
 * @see {@link dutil.dirName}
 * @return {string} - The extention with a suffix of the directory name.
 */
function getAssetDirectory (ext) {
  return dutil.dirName + '-' + ext;
}

/*
 * @name clean:assets:directories
 * @description Deletes generated asset directories from previous runs.
 * @return {stream} - Deleted directories.
 */
gulp.task('clean:assets:directories', function () {

  dutil.logMessage('clean:assets:directories', 'Deleting temporary assets directories.');

  return del([
    dutil.pkg.name + '*',
    '!' + dutil.pkg.name + '*.zip',
  ]);

});

/*
 * @name clean:assets:archives
 * @description Deletes zip archives generated from previous runs.
 * @return {stream} - Deleted zip archive files.
 */
gulp.task('clean:assets:archives', function () {

  dutil.logMessage('clean:assets:archives', 'Deleting assets zip archives.');

  return del([
    dutil.pkg.name + '*.zip',
  ]);

});

/*
 * @name release:process
 * @description Converts source paths into gulp streams using {@link streamExtensions}.
 * @return {stream} - Merged gulp stream.
 */
gulp.task('release:process', function () {

  dutil.logMessage('release:process', 'Process files for ' + dutil.dirName + ' design assets');

  var files = streamExtensions.map(function (extension) {
    var source = [
      'Fonts\ and\ pairings/**/*.zip',
      '*.md',
      '**/*.pdf',
      // Ignore release process files
      '!node_modules/**/*',
      '!.git/**/*',
      '!circle.yml',
      '!gulpfile.js',
      '!package.json',
    ];

    if ('ai' === extension) {
      source.push('**/*ase*');
    }

    source.push('**/*' + extension + '*');
    source.push('**/*' + extension + '*');

    return source;
  });

  var streams = files.map(function (source, idx) {
    dutil.logMessage('release:process', 'Processing ' + streamExtensions[ idx ]);
    source.forEach(function (f) {
      if (! /!/.test(f)) {
        dutil.logData('release:process', 'Processing "' + streamExtensions[ idx ] + '/' + f + '"');
      }
    });
    return gulp.src(source, { base: '.' })
      .pipe(gulp.dest(getAssetDirectory(streamExtensions[ idx ])));
  } );

  return merge.apply(this, streams);

});

/*
 * @name release:zip
 * @description Iterates through {@link streamExtensions} and creates zip archives.
 * @see {@link createZipArcive}
 * @param {function} done - Callback to determin when task is complete
 */
gulp.task('release:zip', function (done) {

  dutil.logMessage('release', 'Creating zip archives for ' + dutil.dirName + ' design assets');

  streamExtensions.map(function (extension, idx) {
    createZipArchive(
      'zip-archives',
      getAssetDirectory(extension) + '.zip',
      getAssetDirectory(extension),
      function () {
        dutil.logData('release', 'Created zip archive for ' + getAssetDirectory(extension) + ' design assets');
        if (idx === streamExtensions.length - 1) {
          setTimeout(done, 100);
        }
      }
    );
  });

});

/*
 * @name release
 * @see {@link clean:assets:archives}
 * @see {@link clean:assets:directories}
 * @see {@link release:process}
 * @see {@link release:zip}
 * @param {function} done - Callback to determin when task is complete
 */
gulp.task('release', function (done) {
  runSequence(
    'clean:assets:archives',
    'clean:assets:directories',
    'release:process',
    'release:zip',
    'clean:assets:directories',
    done
  );
});
