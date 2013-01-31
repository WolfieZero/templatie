/*global module:false*/
module.exports = function(grunt) {

    grunt.initConfig({

        pkg: '<json:package.json>',

        // Compass
        // --------------------------------------------------------------------
        compass: {
            dev: {
                src: 'style/sass',
                dest: 'style/css',
                debugsass: true,
                linecomments: true,
                require: [
                ]
            },
            prod: {
                src: 'style/sass',
                dest: 'style/css',
                debugsass: false,
                linecomments: true,
                require: [
                ],
                outputstyle: 'compact'
            }
        },


        // jsmin-sourcemap
        // --------------------------------------------------------------------

        'jsmin-sourcemap': {
            'script/dist/main.js': ['script/one.js', 'script/two.js'],
            'script/dist/other.js': 'script/one.js'
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

    grunt.loadNpmTasks('grunt-compass');
    grunt.loadNpmTasks('grunt-jsmin-sourcemap');
  

    // Register Tasks
    // ------------------------------------------------------------------------

    grunt.registerTask('default', 'compass:dev jsmin-sourcemap'); // Default task

    grunt.registerTask('dev', 'compass:dev'); // Dev build
    grunt.registerTask('prod', 'compass:prod'); // Prodution build

};