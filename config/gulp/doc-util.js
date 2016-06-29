var gutil = require('gulp-util');
var notifier = require('node-notifier');
var pkg = require('../../package.json');

var shellPrefix = '$';

function drawFlag () {

  // American Flag in ASCII
  //
  gutil.log(
    gutil.colors.blue('xxxxxxxxxxxxxxxxxxxxxxxxxxxx'),
    gutil.colors.red('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  );
  gutil.log(
    gutil.colors.blue('xxxxxxxxxxxxxxxxxxxxxxxxxxxx'),
    gutil.colors.white('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  );
  gutil.log(
    gutil.colors.blue('xxxxxxxxxxxxxxxxxxxxxxxxxxxx'),
    gutil.colors.red('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  );
  gutil.log(
    gutil.colors.blue('xxxxxxxxxxxxxxxxxxxxxxxxxxxx'),
    gutil.colors.white('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  );
  gutil.log(
    gutil.colors.blue('xxxxxxxxxxxxxxxxxxxxxxxxxxxx'),
    gutil.colors.red('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  );
  gutil.log(
    gutil.colors.blue('xxxxxxxxxxxxxxxxxxxxxxxxxxxx'),
    gutil.colors.white('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  );
  gutil.log(
    gutil.colors.blue('xxxxxxxxxxxxxxxxxxxxxxxxxxxx'),
    gutil.colors.red('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  );
  gutil.log(
    gutil.colors.white('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  );
  gutil.log(
    gutil.colors.red('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  );
  gutil.log(
    gutil.colors.white('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  );
  gutil.log(
    gutil.colors.red('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  );
  gutil.log(
    gutil.colors.white('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  );
  gutil.log(
    gutil.colors.red('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  );

}

function notify (title, message, wait) {
  notifier.notify({
    title: title,
    message: message,
    icon: 'src/img/favicons/favicon-192.png',
    wait: wait,
  });
}

module.exports = {

  pkg: {

    name: pkg.name,

  },

  logIntroduction: function (message) {

    message = message || 'Draft U.S. Web Design Standards Assets';

    gutil.log(
      gutil.colors.yellow(pkg.name),
      message
    );
    drawFlag();

  },

  logCommand: function (name, message) {

    gutil.log(
      shellPrefix,
      gutil.colors.cyan(name),
      gutil.colors.magenta(message)
    );

  },

  logHelp: function (name, message) {

    gutil.log(
      shellPrefix,
      gutil.colors.cyan(name),
      gutil.colors.yellow(message)
    );

  },

  logData: function (name, message) {

    gutil.log(
      gutil.colors.cyan(name),
      gutil.colors.yellow(message)
    );

  },

  logError: function (name, message) {

    gutil.log(
      gutil.colors.red(name),
      gutil.colors.yellow(message)
    );
    notify(pkg.name + ' gulp ' + name, message, true);

  },

  logMessage: function (name, message) {

    gutil.log(
      gutil.colors.cyan(name),
      gutil.colors.green(message)
    );
    notify(pkg.name + ' gulp ' + name, message, false);

  },

};

