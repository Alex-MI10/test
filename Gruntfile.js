const sass = require("sass");

module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    // Configuration for the sass task
    sass: {
      options: {
        implementation: sass,
      },
      dist: {
        files: {
          "dist/css/style.css": "src/scss/style.scss",
        },
      },
    },

    // Configuration for the terser task (replacing uglify)
    terser: {
      build: {
        files: {
          "dist/js/script.min.js": ["src/js/script.js"],
        },
      },
    },

    // Configuration for the watch task
    watch: {
      html: {
        files: ["src/**/*.html"],
        tasks: [],
      },
      css: {
        files: ["src/scss/**/*.scss"],
        tasks: ["sass"],
        options: {
          spawn: false,
        },
      },
      js: {
        files: ["src/js/**/*.js"],
        tasks: ["terser"],
        options: {
          spawn: false,
        },
      },
    },
  });

  // Load the plugins.
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-terser");

  // Default task(s).
  grunt.registerTask("default", ["sass", "terser", "watch"]);
};
