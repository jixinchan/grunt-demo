module.exports = function (grunt) {
  grunt.initConfig({
    cssmin: {
      'rectangle.min.css':['./ractangle.css'] 
    }
             
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['cssmin']);
};

