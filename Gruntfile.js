/*global module:false*/
module.exports = function(grunt) {

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
                    require: [
                        'normalize'
                    ]
                }
            }
        },


        // jsmin-sourcemap
        // --------------------------------------------------------------------

        'jsmin-sourcemap': {
            //'script/dist/main.js': ['script/dev/one.js', 'script/dev/two.js'],
            'script/dist/main.js': 'script/dev/main.js'
        },

        // Watch files
        // --------------------------------------------------------------------
        watch: {
            compass: {
                files: ['style/sass/**/*.scss'],
                tasks: 'compass:dev'
            }

        }

    });


    // Load NPM Tasks
    // ------------------------------------------------------------------------

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-jsmin-sourcemap');


    // Register Tasks
    // ------------------------------------------------------------------------

    grunt.registerTask('default', 'compass:dev jsmin-sourcemap'); // Default task
    grunt.registerTask('dev', 'compass:dev'); // Development build
    grunt.registerTask('dist', 'compass:dist'); // Distribution build

};