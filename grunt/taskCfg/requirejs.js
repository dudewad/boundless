'use strict';

module.exports = {
    prod: {
        options: {
            baseUrl: '<%= pkg.directories.srcRoot %><%= pkg.directories.script %>',
            mainConfigFile: '<%= pkg.directories.srcRoot %><%= pkg.directories.script %>main.js',
            include: 'main.js',
            out: '<%= pkg.directories.distRootProd %><%= pkg.directories.script %>main.js'
        }
    }
};