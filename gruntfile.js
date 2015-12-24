module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      files: ['Gruntfile.js', 'app/**/*.js', 'app/**/*.scss'],
      tasks: ['sass']
    },
    sass: {
      dist: {
        files: {
          'app/main.css': 'app/main.scss'
        }
      }
    },
    notify: {
      watch: {
        options: {
          title: 'Task Complete',  // optional
          message: 'SASS finished running', //required
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-notify');

  grunt.registerTask('default', ['watch']);

};