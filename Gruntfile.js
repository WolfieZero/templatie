/*global module:false*/
module.exports = function(grunt) {

    var jsFiles = grunt.file.readJSON('script/main.json');

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // Compass
        // --------------------------------------------------------------------
        compass: {
            dev: {
                options: {
                    environment: 'development',
                    sassDir: 'style/sass',
                    cssDir: 'style/css',
                    fontsDir: 'style/fonts',
                    imagesDir: 'img',
                    relativeAssets: true,
                    require: [
                        'normalize'
                    ]
                }
            },
            dist: {
                options: {
                    environment: 'production',
                    sassDir: 'style/sass',
                    cssDir: 'style/css',
                    fontsDir: 'style/fonts',
                    imagesDir: 'img',
                    relativeAssets: true,
                    require: [
                        'normalize'
                    ]
                }
            }
        },

        // Uglify our JS
        // --------------------------------------------------------------------
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                        '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            dev: {
                options: {
                    sourceMap: 'script/dist/main.map.js',
                    //sourceMappingURL: 'http://.../script/dist/main.map.js',
                    beautify: true,
                    preserveComments: 'all',
                    mangle: false
                },
                files: jsFiles
            },
            dist: {
                options: {
                    sourceMap: 'script/dist/main.map.js',
                    //sourceMappingURL: 'http://.../script/dist/main.map.js',
                    beautify: false,
                    preserveComments: 'some',
                    mangle: true,
                    report: 'gzip'
                },
                files: jsFiles
            }
        },

        // Watch files
        // --------------------------------------------------------------------
        watch: {
            compass: {
                files: ['style/sass/**/*.scss'],
                tasks: 'compass:dev'
            },
            uglify: {
                files: ['script/dev/**/*.js', 'script/**/*.json'],
                tasks: 'uglify:dev'
            }
        }

    });


    // Load NPM Tasks
    // ------------------------------------------------------------------------

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    // Register Tasks
    // ------------------------------------------------------------------------

    grunt.registerTask('default', 'compass:dev uglify:dev'); // Default task
    grunt.registerTask('dev', 'compass:dev uglify:dev'); // Development build
    grunt.registerTask('dist', 'compass:dist uglify:dist'); // Distribution build

};