'use strict';

module.exports = {
    dev: {
        options: {
            outputStyle: 'expanded'
        },
        files: {
            '<%=pkg.directories.srcRoot %><%=pkg.directories.style %>app.css': [
                '<%=pkg.directories.srcRoot %><%=pkg.directories.style %>app.scss'
            ]
        }
    },
    prod: {
        options: {
            outputStyle: 'compressed'
        },
        files: {
            '<%=pkg.directories.srcRoot %><%=pkg.directories.style %>app.css': [
                '<%=pkg.directories.srcRoot %><%=pkg.directories.style %>app.scss'
            ]
        }
    }
};