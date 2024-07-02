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
    // Configuration for the uglify task
    uglify: {
      build: {
        src: "src/js/script.js",
        dest: "dist/js/script.min.js",
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
        tasks: ["uglify"],
        options: {
          spawn: false,
        },
      },
    },
  });

  // Load the plugins.
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  // Default task(s).
  grunt.registerTask("default", ["sass", "uglify", "watch"]);
};
