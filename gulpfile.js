// FOUNDATION FOR APPS TEMPLATE GULPFILE
// -------------------------------------
// This file processes all of the assets in the "client" folder, combines them with the Foundation for Apps assets, and outputs the finished files in the "build" folder as a finished app.

// 1. LIBRARIES
// - - - - - - - - - - - - - - -

var $         = require('gulp-load-plugins')();
var argv      = require('yargs').argv;
var config    = require('./config');
var gulp      = require('gulp');
var bb        = require('bitballoon');
var rimraf    = require('rimraf');
var addStream = require('add-stream');
var router    = require('front-router');
var sequence  = require('run-sequence');
var svgstore  = require('gulp-svgstore');
var svgmin    = require('gulp-svgmin');
var path      = require('path');
var gulpNgConfig = require('gulp-ng-config');

// Check for --production flag
var isProduction = !!(argv.production);
var isLocal = !!(argv.local);

// 2. FILE PATHS
// - - - - - - - - - - - - - - -

var paths = {
  assets: [
    './client/**/*.*',
    '!./client/templates/**/*.*',
    '!./client/assets/{scss,js}/**/*.*',
    '!./client/assets/img/*.svg'
  ],
  // Sass will check these folders for files when you use @import.
  sass: [
    'client/assets/scss',
    'bower_components/foundation-apps/scss'
  ],
  // These files include Foundation for Apps and its dependencies
  foundationJS: [
    'bower_components/fastclick/lib/fastclick.js',
    'bower_components/viewport-units-buggyfill/viewport-units-buggyfill.js',
    'bower_components/tether/tether.js',
    'bower_components/hammerjs/hammer.js',
    'bower_components/angular/angular.js',
    'bower_components/angular-animate/angular-animate.js',
    'bower_components/angular-ui-router/release/angular-ui-router.js',
    'bower_components/foundation-apps/js/vendor/**/*.js',
    'bower_components/foundation-apps/js/angular/**/*.js',
    '!bower_components/foundation-apps/js/angular/app.js'
  ],
  // These files are for your app's JavaScript
  appJS: [
    // 3rd-party libs,
    'bower_components/angular-resource/angular-resource.min.js',
    'bower_components/angular-translate/angular-translate.min.js',
    'bower_components/angular-cookie/angular-cookie.min.js',
    'bower_components/ng-token-auth/dist/ng-token-auth.min.js',
    'bower_components/ng-file-upload/ng-file-upload.min.js',
    'bower_components/angular-translate/angular-translate.min.js',
    // Custom scripts
    'client/assets/js/app.js',
    'client/assets/js/controllers.js',
    'client/assets/js/resources.js',
    'client/assets/js/filters.js',
    'client/assets/js/services.js',
    'client/assets/js/localization.js',
    'client/assets/js/auth.js',
    'client/assets/js/svgSprite.js'
  ]
}

// 3. TASKS
// - - - - - - - - - - - - - - -

// Cleans the build directory
gulp.task('clean', function(cb) {
  rimraf('./build', cb);
});

// Copies everything in the client folder except templates, Sass, and JS
gulp.task('copy', function() {
  return gulp.src(paths.assets, {
    base: './client/'
  })
    .pipe(gulp.dest('./build'))
  ;
});

// Copies your app's page templates and generates URLs for them
gulp.task('copy:templates', function() {
  return gulp.src('./client/templates/**/*.html')
    .pipe(router({
      path: 'build/assets/js/routes.js',
      root: 'client'
    }))
    .pipe(gulp.dest('./build/templates'))
  ;
});

// Compiles the Foundation for Apps directive partials into a single JavaScript file
gulp.task('copy:foundation', function(cb) {
  gulp.src('bower_components/foundation-apps/js/angular/components/**/*.html')
    .pipe($.ngHtml2js({
      prefix: 'components/',
      moduleName: 'foundation',
      declareModule: false
    }))
    .pipe($.uglify())
    .pipe($.concat('templates.js'))
    .pipe(gulp.dest('./build/assets/js'))
  ;

  // Iconic SVG icons
  gulp.src('./bower_components/foundation-apps/iconic/**/*')
    .pipe(gulp.dest('./build/assets/img/iconic/'))
  ;

  cb();
});

// Compiles Sass
gulp.task('sass', function () {
  return gulp.src('client/assets/scss/app.scss')
    .pipe($.sass({
      includePaths: paths.sass,
      outputStyle: (isProduction ? 'compressed' : 'nested'),
      errLogToConsole: true
    }))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie 10']
    }))
    .pipe(gulp.dest('./build/assets/css/'))
  ;
});

// Compiles and copies the Foundation for Apps JavaScript, as well as your app's custom JS
gulp.task('uglify', ['uglify:foundation', 'uglify:app'])

gulp.task('uglify:foundation', function(cb) {
  var uglify = $.if(isProduction, $.uglify()
    .on('error', function (e) {
      console.log(e);
    }));

  return gulp.src(paths.foundationJS)
    .pipe(uglify)
    .pipe($.concat('foundation.js'))
    .pipe(gulp.dest('./build/assets/js/'))
  ;
});

function makeConfig() {
  return gulp.src('envs.json')
  .pipe(gulpNgConfig('application.config', {
      environment: (isLocal ? 'local' : 'production')
    })
  );
}

gulp.task('uglify:app', function() {
  var uglify = $.if(isProduction, $.uglify()
    .on('error', function (e) {
      console.log(e);
    }));

  return gulp.src(paths.appJS)
    .pipe(uglify)
    .pipe(addStream.obj(makeConfig()))
    .pipe($.concat('app.js'))
    .pipe(gulp.dest('./build/assets/js/'))
  ;
});

gulp.task('svgstore', function() {
 return gulp
   .src('client/assets/img/*.svg')
   .pipe(svgmin(function(file) {
     var prefix = path.basename(file.relative, path.extname(file.relative));
     return {
       plugins: [{
         cleanupIDs: {
           prefix: prefix + '-',
           minify: true
         }
       }]
     }
   }))
   .pipe(svgstore())
   .pipe(gulp.dest('./build/assets/img/'));
});

// Starts a test server, which you can view at http://localhost:8079
gulp.task('server', ['build'], function() {
  gulp.src('./build')
    .pipe($.webserver({
      port: 8079,
      host: '0.0.0.0',
      fallback: 'index.html',
      livereload: true,
      open: 'http://localhost:8079'
    }))
  ;
});

// Builds your entire app once, without starting a server
gulp.task('build', function(cb) {
  sequence('clean', ['copy', 'copy:foundation', 'sass', 'uglify', 'svgstore'], 'copy:templates', cb);
});

gulp.task('deploy', ['build'], function() {
  bb.deploy({
    access_token: config.BB_ACCESS_TOKEN,
    site_id: config.BB_SITE_ID,
    dir: "build"
  }, function(err, deploy) {
    if (err) { throw(err) }
  });
});

// Default task: builds your app, starts a server, and recompiles assets when they change
gulp.task('default', ['server'], function () {
  // Watch Sass
  gulp.watch(['./client/assets/scss/**/*', './scss/**/*'], ['sass']);

  // Watch JavaScript
  gulp.watch(['./client/assets/js/**/*', './js/**/*'], ['uglify:app']);

  // Watch static files
  gulp.watch(['./client/**/*.*', '!./client/templates/**/*.*', '!./client/assets/{scss,js}/**/*.*'], ['copy']);

  // Watch app templates
  gulp.watch(['./client/templates/**/*.html'], ['copy:templates']);
});
