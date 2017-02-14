exports.config = {
  // commenting this line auto-starts the selenium server
  //seleniumAddress: 'http://localhost:4444/wd/hub',

  // A base URL for your application under test. Calls to protractor.get()
  // with relative paths will be prepended with this.
  baseUrl: 'http://localhost:9001/',

  // Jasmine is fully supported as a test and assertion framework.
  framework: 'jasmine',

  // Options to be passed to minijasminenode.
  // See the full list at https://github.com/juliemr/minijasminenode/tree/jasmine1
  jasmineNodeOpts: {
    // If true, display spec names.
    isVerbose: true,
    // If true, print colors to the terminal.
    showColors: true,
    // If true, include stack traces in failures.
    includeStackTrace: false,
    // Default time to wait in ms before a test fails.
    defaultTimeoutInterval: 30000
  },

  // Spec patterns are relative to the location of this config.
  specs: [
    'src/app/**/*.e2e.js'
  ]
};
