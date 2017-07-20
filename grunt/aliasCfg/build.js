'use strict';

module.exports = function (grunt) {
    grunt.registerTask('build:prod', [
        'webfont',
        'sass:prod',
        'requirejs',
        'copy:prod',
        'compress:prod'
    ]);
};