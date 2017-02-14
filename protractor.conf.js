var config = require('./gulp_config.js');

exports.config = {
  // The address of a running selenium server. Comment this out if you want the selenium server tp start automatically.
  //'seleniumAddress': 'http://localhost:4444/wd/hub',

  // The base url your app is served on.
  baseUrl: 'http://localhost:3000/',

  // Jasmine is fully supported as a test and assertion framework.
  framework: 'jasmine',

  // Capabilities to be passed to the webdriver instance.
  'capabilities': {
    'browserName': 'chrome'
  },

  // Spec patterns are relative to the location of this config.
  specs: [
    config.protractor.sources
  ],

  stackTrace: false,

  // Options to be passed to minijasminenode.
  // See the full list at https://github.com/juliemr/minijasminenode/tree/jasmine1
  jasmineNodeOpts: {
    // If true, display spec names.
    isVerbose: false,
    // If true, print colors to the terminal.
    showColors: true,
    // If true, include stack traces in failures.
    includeStackTrace: false,
    // Default time to wait in ms before a test fails.
    defaultTimeoutInterval: 30000,
  }
};
