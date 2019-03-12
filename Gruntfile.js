module.exports = function (grunt) {
  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          'dest/rectangle.min.js': ['./rectangle.js', './calc.js']
        }
      }  

    }
             
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['uglify']);
};

