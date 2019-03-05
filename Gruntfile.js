                                             
rts = function(grunt) {
  =  grunt.initConfig({
    eslint: {
      options: {
          csslintrc: '.csslintrc'
          
      },
      src: ['rectangle.css']
        
    }
              
  });

    grunt.loadNpmTasks('grunt-contrib-csslint');

      grunt.registerTask('lint', ['csslint']);

};
