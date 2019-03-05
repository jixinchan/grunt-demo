module.exports = function(grunt) {
  grunt.initConfig({
    eslint: {
      html: {
        options: {
          configFile:'.eslintrc.json'
            
        },
        target: ['rectangle.js']
          
      }
                
    }
                
  });

  grunt.loadNpmTasks('grunt-eslint');

  grunt.registerTask('default', ['eslint']);

};
