'use strict';

module.exports = function(grunt) {
    grunt.registerTask("dev", [
        "webfont",
        "sass:dev",
        "connect",
        "watch"
    ]);
};