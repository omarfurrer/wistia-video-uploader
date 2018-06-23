// Karma configuration
// Generated on Sat Jun 23 2018 00:32:18 GMT+0200 (Egypt Standard Time)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
            'node_modules/angular/angular.js',
            'node_modules/blueimp-file-upload/js/vendor/jquery.ui.widget.js',
            'node_modules/blueimp-load-image/js/load-image.all.min.js',
            'node_modules/blueimp-Canvas-to-Blob/js/canvas-to-blob.js',
            'node_modules/blueimp-file-upload/js/jquery.iframe-transport.js',
            'node_modules/blueimp-file-upload/js/jquery.fileupload.js',
            'node_modules/blueimp-file-upload/js/jquery.fileupload-process.js',
            'node_modules/blueimp-file-upload/js/jquery.fileupload-image.js',
            'node_modules/blueimp-file-upload/js/jquery.fileupload-audio.js',
            'node_modules/blueimp-file-upload/js/jquery.fileupload-video.js',
            'node_modules/blueimp-file-upload/js/jquery.fileupload-validate.js',
            'node_modules/blueimp-file-upload/js/jquery.fileupload-angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'app/js/angular/app.js',
            'tests/unit/app.specs.js'
        ],

        // list of files / patterns to exclude
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
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}
