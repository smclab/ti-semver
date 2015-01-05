'use strict';

module.exports = function (grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    clean: {
      "modules": [ 'test/fake-app/modules' ],
      "app": [ 'test/fake-app/build' ]
    },

    titaniumifier: {
      "module": {
        options: {}
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-titaniumifier');

  grunt.registerTask('build', [ 'titaniumifier:module' ]);

  grunt.registerTask('default', [ 'build' ]);
};
