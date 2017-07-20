/**
 * Grunt task configuration - grunt-webfont
 */
module.exports = {
    dist: {
	    src: "<%= pkg.directories.srcRoot %><%= pkg.directories.font %>siteIcon/src/**/*",
	    dest: "<%= pkg.directories.srcRoot %><%= pkg.directories.font %>/siteIcon/",
	    destCss: "<%= pkg.directories.srcRoot %><%= pkg.directories.style %>/core/",
	    options:{
		    font: "siteIcon",
		    engine: "node",
		    stylesheet: "scss",
		    templateOptions: {
			    baseClass: 'siteIcon',
			    classPrefix: 'siteIcon-'
		    },
		    normalize: true,
            htmlDemo: false
	    }
    }
};