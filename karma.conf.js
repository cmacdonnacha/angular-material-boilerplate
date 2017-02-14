module.exports = function(config) {
  config.set({

    // Base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // Frameworks to use
    frameworks: ['jasmine'],


    // Plugins to use
    plugins : ['karma-jasmine', 'karma-phantomjs-launcher', 'karma-chrome-launcher', 'karma-coverage'],


    // List of files / patterns to load into the browser during testing.
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/angular-ui-router/release/angular-ui-router.js',
      'src/app/**/*.js',
      'src/app/**/*.spec.js'
    ],


    // List of files to exclude
    exclude: [
      'src/app/**/*.e2e.js'
    ],


    // Preprocessors matching files before serving them to the browser.
    // Available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // Source files that you want to generate coverage for.
      // Do not include tests or libraries (these files will be instrumented by Istanbul)
      'src/**/*.js': ['coverage']
    },


    // Configure the reporter
    coverageReporter: {
      type : 'lcov',
      dir : 'reports',
      subdir: 'coverage'
    },


    // Test results reporter to use.
    // Possible values: 'dots', 'progress', 'coverage.
    // Available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // Enable / disable colors in the output (reporters and logs)
    colors: true,


    // Level of logging
    // Possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DISABLE,


    // Enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // The list of browsers to launch to test on:
    // Chrome, ChromeCanary, Firefox, Opera, Safari, PhantomJS
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
