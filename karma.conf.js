// Karma configuration
// Generated on Tue Jan 27 2015 23:37:28 GMT+0100 (W. Europe Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [/*'detectBrowsers', */'jspm', 'mocha'],

    // browser detection configuration 
    detectBrowsers: {
        // enable/disable, default is true 
        enabled: true,

        // enable/disable phantomjs support, default is true
        usePhantomJS: false,

        // post processing of browsers list
        // here you can edit the list of browsers used by karma
        postDetection: function(availableBrowser) {
            console.log('using browsers: ' + availableBrowser);
            return availableBrowser.filter(function(browser) {
                return browser != 'IE';
            });
        }
    },


    // list of files / patterns to load in the browser
    jspm: {
      loadFiles: ['lib/test/unit/**/*.spec.js'],
      serveFiles: ['lib/**/*', 'jspm_packages/**/*', 'config.js']
    },


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'/*, 'Firefox'*/],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
