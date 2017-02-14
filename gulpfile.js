var gulp        = require('gulp'),
    browserify  = require('browserify'),
    source      = require('vinyl-source-stream'),
    buffer      = require('vinyl-buffer'),
    browserSync = require('browser-sync'),
    del         = require('del'),
    karma       = require('karma').Server;

var $           = require('gulp-load-plugins')();
var config      = require('./gulp_config.js');
var pkg         = require('./package.json');

/**
 * Default tasks
 */
gulp.task('default', ['serve']);
gulp.task('build', ['clean', 'scripts', 'sass', 'templates', 'minify:images', 'browserify', 'copy:vendor:css', 'copy:index', 'copy:assets']);
gulp.task('test', ['eslint', 'unit', 'e2e']);

/**
 * Tasks needed to update/run protractor.
 */
gulp.task('webdriver-update', $.protractor.webdriver_update);
gulp.task('webdriver-start', $.protractor.webdriver_start);


/**
 * Watches for file changes. Reloads the browser if a change is detected.
 */
gulp.task('watch', function() {
  gulp.watch('src/**/*.scss', ['sass']);
  gulp.watch('src/**/*.html', ['templates', browserSync.reload]);
  gulp.watch('src/**/*.js', ['scripts', 'unit', 'eslint', browserSync.reload]);
  gulp.watch('src/index.html', ['copy:index', browserSync.reload]);
});

/**
 * Serves and watches the build folder.
 */
gulp.task('serve', ['build', 'watch'], function() {
  browserSync({
    server: {
      baseDir: config.serve.baseDir                         // Serve the chosen folder.
    },
    open: false,                                            // Stop the browser from opening a new window automatically.
    port: config.serve.port                                 // Decide which port to serve on. Default is 3000 for development and 4000 for production.
  })
});

/**
 * Builds, minifies and concatenates javascript files into one single file.
 */
gulp.task('scripts', function() {
  return gulp.src(config.scripts.sources)                   // Get all js files
    .pipe($.concat(config.scripts.destinationName))         // Concatenate them into one file
    .pipe($.ngAnnotate())                                   // Inject angular dependencies and prevent minfier from mangling them.
    .pipe(config.isProduction ? $.uglify() : $.util.noop()) // Minify the file if it's for production
    .pipe($.header(config.banner, { pkg : pkg } ))          // Add a comment to the top of the file to include our package info (copyright etc.)
    .pipe(gulp.dest(config.scripts.destinationFolder));     // Output it to the destination folder
});

/**
 * Builds, minifies and concatenates sass files into one single file.
 */
gulp.task('sass', function() {
  return gulp.src(config.sass.sources)                      // Get all sass files
    .pipe($.sass())                                         // Pass them through gulp-sass to convert it to css
    .pipe($.concat(config.sass.destinationName))            // Concatenate them into one file
    .pipe(config.isProduction ? $.cleanCss():$.util.noop()) // Minify the file if this is for production
    .pipe($.header(config.banner, { pkg : pkg } ))          // Add a comment to the top of the file to include our package info (copyright etc.)
    .pipe(gulp.dest(config.sass.destinationFolder))         // Output it to the destination folder
    .pipe(browserSync.reload({                              // Reload browser sync
      stream: true
    }));
});

/**
 * Concatenates and registers AngularJS templates in the $templateCache.
 */
gulp.task('templates', function () {
  return gulp.src(config.templates.sources)                 // Get all html files
    .pipe($.angularTemplatecache({                          // Pass them through angularTemplatecache
      standalone: true                                      // Create a new AngularJS module dynamically so we don't have to
    }))
    .pipe($.header(config.banner, { pkg : pkg } ))          // Add a comment to the top of the file to include our package info (copyright etc.)
    .pipe(gulp.dest(config.templates.destinationFolder));   // Output it to the destination folder. Default file name is 'templates.js'.
});

/**
 * Minifies supported images found in the assets folder.
 */
gulp.task('minify:images', function() {
  return gulp.src(config.images.sources)                    // Get all images
    .pipe(config.isProduction ? $.imagemin():$.util.noop()) // Pass them imageMin in order to reduce their file sizes
    .pipe(gulp.dest(config.images.destinationFolder));      // Output them to the destination folder.
});

/**
 * Performs an eslint code check analysis.
 */
gulp.task('eslint', function () {
  return gulp.src(config.scripts.sources)                   // Get all js files
    .pipe($.eslint())                                       // Run them through eslint to try and find error in the code
    .pipe($.eslint.format())                                // Output the results to the console.
    .pipe($.eslint.failAfterError());                       // Stop a stream if an ESLint error has been reported, but wait for all files to be processed first.
});

/**
 * Runs unit tests using Karma
 */
gulp.task('unit', function(done) {
  karma.start({                                             // Start the Karma server
    configFile: __dirname + '/karma.conf.js'                // Load the karma config file
  }, function() {
    done();
  });
});

/**
 * Bundles node dependencies (Angular, ui-router, Angular Material etc.) into one single file.
 */
gulp.task('browserify', function() {
  return browserify(config.browserify.sources)              // Get all node module files
    .bundle()                                               // Bundle them all into one file
    .pipe(source(config.browserify.destinationName))        // Pass is through vinyl-source-stream to rename it
    .pipe(config.isProduction ? buffer() : $.util.noop())   // Pass is through vinyl-buffer so that 'uglify' can use it
    .pipe(config.isProduction ? $.uglify() : $.util.noop()) // Minify the file if it's for production
    .pipe(gulp.dest(config.browserify.destinationFolder));  // Output it to the destination folder
});

/**
 * Copies the index.html file into the build folder
 */
gulp.task('copy:index', function() {
  return gulp.src(config.index.sources)                     // Get index.html file
    .pipe(gulp.dest(config.index.destinationFolder));       // Copy it to the destination folder
});

/**
 * Copies the contents of assets folder into the build folder.
 */
gulp.task('copy:assets', function() {
  return gulp.src(config.assets.sources)                    // Get assets (e.g favicon, logo, shared images etc.)
    .pipe(gulp.dest(config.assets.destinationFolder));      // Copy them to the destination folder (e.g assets)
});

/**
 * Copies the vendor css files (i.e angular-material.css) into the build folder
 */
gulp.task('copy:vendor:css', function() {
  return gulp.src(config.vendor.sources)                    // Get all vendor css files (e.g angular-material.css)
    .pipe(gulp.dest(config.vendor.destinationFolder));      // Copy it to the destination folder
});

/**
 * Deletes the build folder.
 */
gulp.task('clean', function() {
  return del.sync([
    config.serve.baseDir,                                   // Delete the destination folder (may be 'public' or 'production')
    config.coverage.destinationFolder                       // Delete the code coverage 'reports' folder
  ]);
});

/**
 * Runs unit test code coverage.
 */
gulp.task('coverage', ['unit'], function() {
  browserSync({
    server: {
      baseDir: config.coverage.destinationFolder            // Serve code coverage reports folder
    },
    port: config.coverage.port,                             // On the selected port.
    open: false                                             // Stop the browser from opening a new window automatically.
  })
});

/**
 * Runs end-to-end tests using protractor.
 */
gulp.task('e2e', ['serve:e2e'], function(done) {
  gulp.src(config.protractor.sources)                       // Get all e2e tests
    .pipe($.protractor.protractor({
      configFile: 'protractor.conf.js'                      // Load the protractor config file
    }))
    .on('error', function (err) {                           // Stop the task if an error occurs
      // Stop the task
      process.exit(0);
      done();
    })
    .on('end', function () {                                // Stop the task if complete
      // Stop the task
      process.exit(0);
      done();
    });
});

/**
 * Serves the app using browserSync so that end-to-end tests can run.
 */
gulp.task('serve:e2e', ['build', 'webdriver-start'], function() {
  browserSync({
    server: {
      baseDir: config.serve.baseDir                         // Serve the chosen folder. Default port is 3000.
    },
    open: false                                             // Stop the browser from opening a new window automatically.
  })
});
