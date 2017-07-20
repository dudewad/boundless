'use strict';

module.exports = {
    prod: {
        files: [
            {
                src: '*.html',
                dest: '<%= pkg.directories.distRootProd %>',
                cwd: '<%= pkg.directories.srcRoot %>',
                expand: true
            },
            {
                src: '**/*.css',
                dest: '<%= pkg.directories.distRootProd %><%= pkg.directories.style %>',
                cwd: '<%= pkg.directories.srcRoot %><%= pkg.directories.style %>',
                expand: true
            },
            {
                src: '**/*',
                dest: '<%= pkg.directories.distRootProd %><%= pkg.directories.asset %>',
                cwd: '<%= pkg.directories.srcRoot %><%= pkg.directories.asset %>',
                expand: true
            },
            {
                src: '**/*',
                dest: '<%= pkg.directories.distRootProd %><%= pkg.directories.data %>',
                cwd: '<%= pkg.directories.srcRoot %><%= pkg.directories.data %>',
                expand: true
            },
            {
                src: 'lib/require.js',
                dest: '<%= pkg.directories.distRootProd %><%= pkg.directories.script %>',
                cwd: '<%= pkg.directories.srcRoot %><%= pkg.directories.script %>',
                expand: true
            }
        ]
    }
};