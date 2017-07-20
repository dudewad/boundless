'use strict';

module.exports = {
    prod: {
        options: {
            mode: 'zip',
            archive: '<%= pkg.directories.distRootSrcArchive %>src.zip'
        },
        files: [
            {
                expand: true,
                cwd: './',
                src: [
                    '*.*',
                    'grunt/**/*',
                    'docs/**/*',
                    'src/**/*',
                    //Negations
                    '!*.iml',
                    '!.gitignore',
                    '!<%= pkg.directories.srcRoot =><%= pkg.directories.style =>/*.css'
                ],
                dest: '/'
            }
        ]
    }
};