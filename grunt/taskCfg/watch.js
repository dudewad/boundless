'use strict';

module.exports = {
    scss: {
        files: '<%= pkg.directories.srcRoot %><%= pkg.directories.style %>**/*.scss',
        tasks: ['sass']
    },
    livereload: {
        files: [
            '<%= pkg.directories.srcRoot %>**/*.html',
            '<%= pkg.directories.srcRoot %><%= pkg.directories.data %>**/*',
            '<%= pkg.directories.srcRoot %><%= pkg.directories.style %>**/*.css',
            '<%= pkg.directories.srcRoot %><%= pkg.directories.script %>**/*.js',
            '<%= pkg.directories.srcRoot %><%= pkg.directories.image %>**/*.js'
        ],
        options: {
            livereload: true
        }
    }
};