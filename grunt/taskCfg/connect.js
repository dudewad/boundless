'use strict';

module.exports = {
    default: {
        options: {
            base: '<%= pkg.directories.srcRoot %>',
            port: '<%= pkg.livereload.port %>',
            hostname: '<%= pkg.livereload.host %>',
            open: true,
            livereload: true
        }
    }
};