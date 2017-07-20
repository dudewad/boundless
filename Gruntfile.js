"use strict";

/**
 * This method will load all task configurations dynamically from the
 * specified directory.
 *
 * @param {Object} grunt        The Grunt object
 * @param {String} path         The path to the task configuration settings files
 * @returns {{}}
 */
function loadTaskConfigurations(grunt, path) {
    var glob = require('glob');
    var configs = {};
    var key;

    //Gets all task config items and imports them to the configs object
    glob.sync('*', {cwd: path}).forEach(function (option) {
        key = option.replace(/\.js$/, '');
        var cfg = require(process.cwd() + "/" + path + option);
        configs[key] = typeof cfg === 'function' ? cfg(grunt) : cfg;
    });

    return configs;
}

/**
 * Kick off the Grunt module
 * @param {Object} grunt            The Grunt object
 */
module.exports = function (grunt) {

    //Run initial Grunt config
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        directories: "<%= pkg.directories %>"
    });

    //Load all task configurations
    var taskCfg = loadTaskConfigurations(grunt, grunt.config.get("pkg.directories.grunt.taskCfg"));

    //Add those task configurations to the grunt config
    for (var t in taskCfg) {
        grunt.config.set(t, taskCfg[t]);
    }

    //Gets all defined tasks from the defined tasks directory
    grunt.loadTasks(grunt.config.get("pkg.directories.grunt.aliasCfg"));

    //Load all tasks from devDependencies.
    //See load-grunt-tasks documentation for specific customization options.
    require("load-grunt-tasks")(grunt);
};