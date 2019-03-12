module.exports = function (grunt) {
  grunt.initConfig({
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: './',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/',
          ext: '.min.css'
        
        }]
                 
      }
    }
             
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['cssmin']);
};

