module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),


    gitadd: {
      task: {
        files: {
          src: ['template.conf', '**/*.region', 'pages/**/*.*', 'collections/**/*.*', 'styles/**/*.*', 'scripts/**/*.*', 'blocks/**/*.*', 'assets/**/*.*']
        }
      }
    },

    gitcommit: {
      task: {
        options: {
            message: 'Development'
        },
        files: {
          src: ['template.conf', '**/*.region', 'pages/**/*.*', 'collections/**/*.*', 'styles/**/*.*', 'scripts/**/*.*', 'blocks/**/*.*', 'assets/**/*.*']
        }
      }
    },

    gitpush: {
      task: {
        options: {
            branch: 'master',
            remote: 'origin'
        }
      }
    },


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
            name += filePath[2];
            for (var i = 3; i < filePath.length; i++) {
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
            'styles/styles.css': 'styles/scss/all.scss',
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
        livereload: false,
        interrupt: true
      },
      layout: {
        files: ['template.conf', '**/*.region', 'pages/**/*.*', 'collections/**/*.*', 'blocks/**/*.*', 'assets/**/*.*'],
        tasks: ['gitcommit', 'gitpush']
      },
      handlebars: {
        files: ['scripts/hbs/**/*.hbs'],
        tasks: ['handlebars', 'gitcommit', 'gitpush']
      },
      sass: {
        files: ['styles/scss/**/*.scss'],
        tasks: ['sass', 'gitcommit', 'gitpush']
      },
      coffee: {
        files: ['scripts/coffee/**/*.coffee'],
        tasks: ['coffee', 'gitcommit', 'gitpush']
      }
    }


  });


  grunt.loadNpmTasks('grunt-git');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-open');

  grunt.registerTask('default', ['handlebars', 'sass', 'coffee', 'open', 'watch']);

};



