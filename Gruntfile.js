module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),


    handlebars: {
      compile: {
        options: {
          namespace: "templates",
          processContent: function(content, filepath) {
            content = content.replace(/^[\x20\t]+/mg, '').replace(/[\x20\t]+$/mg, '');
            content = content.replace(/^[\r\n]+/, '').replace(/[\r\n]*$/, '\n');
            return content;
          },
          processName: function(filePath) {
            var name = "";
            filePath = filePath.split(".");
            filePath = filePath[0].split("/");
            name += filePath[3];
            for (var i = 4; i < filePath.length; i++) {
                name += "/" + filePath[i];
            };
            return name;
          }
        },
        files: {
          "scripts/templates.js": ["scripts/hbs/**/*.hbs"]
        }
      }
    },



    sass: {
      compile: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
            'styles/all.css': 'styles/scss/all.scss',
        }
      }
    },

    
    coffee: {
      compile: {
        files: {
          'scripts/app.js': [
            'scripts/coffee/app.coffee',
            'scripts/coffee/core/**/*.coffee',
            'scripts/coffee/models/**/*.coffee',
            'scripts/coffee/collections/**/*.coffee',
            'scripts/coffee/views/**/*.coffee',
            'scripts/coffee/routers/router.coffee']
        }
      }
    },

    open: {
      start: {
        path: 'https://phillip-malboeuf-1942.squarespace.com',
        app: 'Google Chrome'
      }
    },

    watch: {
      options: {
        livereload: false
      },
      handlebars: {
        files: ['scripts/hbs/**/*.hbs'],
        tasks: ['handlebars']
      },
      sass: {
        files: ['styles/scss/**/*.scss'],
        tasks: ['sass']
      },
      coffee: {
        files: ['scripts/coffee/**/*.coffee'],
        tasks: ['coffee']
      }
    }


  });


  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-open');

  grunt.registerTask('default', ['handlebars', 'sass', 'coffee', 'open', 'watch']);

};



