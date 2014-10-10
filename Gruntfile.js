module.exports = function(grunt) {
    grunt.initConfig({

      //Assemble *.js files
        concat: {
          main: {
              src: ['dev/js/*.js', '!dev/js/assembled.js'],
              dest: 'dev/js/assembled.js'
          },
          debug: {
              src: ['dev/js/*.js', '!dev/js/assembled.js'],
              dest: 'www/js/assembled.js'
          }
        },

      //Uglify assembled *.js file    
        uglify: {
          options: {
            mangle: false
          },
          vendor: {
            files: [{
                expand: true,
                cwd: 'dev/js/vendor',
                src: '**/*.js',
                dest: 'www/js/vendor',
                ext: '.min.js'
            }]
          },
          main: {
              files: {
                  'www/js/assembled.min.js': '<%= concat.main.dest %>'
              }
          },
          liveJs: {
            files: {
                'www/js/live.min.js': 'dev/devtools/live.js'
            }
          }
        },

      //Compile *.scss files  
        sass: {
          main: { 
            options: {
              style: 'expanded',
              sourcemap: 'none'
            },
            files: [{
              expand: true,
              cwd: 'dev/styles',
              src: ['*.{sass,scss}'],
              dest: 'dev/css',
              ext: '.css'
            }]
          },
          debug: { 
            options: {
              style: 'expanded',
              sourcemap: 'none'
            },
            files: [{
              expand: true,
              cwd: 'dev/styles',
              src: ['*.{sass,scss}'],
              dest: 'www/css',
              ext: '.css'
            }]
          }
        },

      //Compile *.less files
        less: {
          main: {
             expand: true,
             cwd: 'dev/styles',
             src: ['*.less'],
             dest: 'dev/css',
             ext: '.css'
          },
          debug: {
             expand: true,
             cwd: 'dev/styles',
             src: ['*.less'],
             dest: 'www/css',
             ext: '.css'
          }          
        },  

      //Combine media queries in result *.css files   
        cmq: {
          options: {
            log: false
          },
          main: {
            files: {
              'dev/css': ['dev/css/*.css']
            }
          }
        },

      //Autoprefixer  
        autoprefixer: {
          options: {
            browsers: ['last 2 versions', 'ie 8', 'ie 9'] 
            //By default >1%, last 2 versions, Firefox ESR, Opera 12.1;
          },           
          main: {
            expand: true,
            flatten: true,
            src: 'dev/css/*.css',
            dest: 'dev/css/'
          }
        },

      //Minify and organize *.css files  
        csso: {
          options: {
            keepSpecialComments: '*'
          },
          main: {
            expand: true,
            cwd: 'dev/css/',
            src: ['*.css', '!*.min.css'],
            dest: 'www/css/',
            ext: '.min.css'
          }
        },

      //Compile *.jade files  
        jade: {
          main: {
            options: {
                client: false,
                pretty: true
            },
            files: [ {
              cwd: "dev/markup",
              src: "*.jade",
              dest: "dev/",
              expand: true,
              ext: ".html"
            } ]
          }
        },

      //Compile *.haml files  
        haml: {
          main: {
            files: [ {
              cwd: "dev/markup",
              src: "*.haml",
              dest: "dev/",
              expand: true,
              ext: ".html"
            } ]
          }
        },

      //Minify *.html files 
        htmlmin: {  
            main: {     
              options: {             
                collapseWhitespace: true,
                minifyJS: true,
                minifyCSS: true
              },
              files: [ {
                cwd: "dev/",
                src: "*.html",
                dest: "www/",
                expand: true,
                ext: ".html"
              } ]
            }
        },

      //Minify image files   
        imagemin: {
          main: { 
            options: { 
              optimizationLevel: 7
            },              
            files: [{
              expand: true,      
              cwd: 'dev/img',            
              src: ['*.{png,jpg,gif}'], 
              dest: 'www/img/'            
            }]
          }
        },

      //Assemble bower components in right order 
        bower_concat: {
          main: {
            dest: 'dev/js/vendor/vendor.js'
          }
        },

      //Copy bower components to the custom folder   
        // bowercopy: {
        //   options: {
        //     clean: true,
        //     ignore: ['modernizr']
        //   },          
        //   jquery: {
        //     options: {
        //         destPrefix: 'dev/js/vendor'
        //     },
        //     files: {
        //       'jquery': 'jquery/dist/jquery.js'
        //     },
        //   }
        // },

      //Delete .gitkeep files. If you don't use Bower - just run `grunt clean`  
        clean: {
          gitkeep: ['dev/**/.gitkeep', 'www/**/.gitkeep'],
          less: 'dev/**/*.less',
          sass: 'dev/**/*.scss',
          haml: 'dev/**/*.haml',
          jade: 'dev/**/*.jade',
          debug: ['www/js/assembled.js', 
                '!www/js/assembled.min.js', 
                'www/js/live.min.js', 
                'www/css/*.css',
                '!www/css/*.min.css'],
          bower: 'bower_components'   
        },

      //Delete some dev code and references from files        
        preprocess : {
          html : {
            src : [ 'dev/*.html' ],
            options: {
              inline : true
            }
          },
          css : {
            src : [ 'dev/css/*.css' ],
            options: {
              inline : true
            }
          },
          js : {
            src : [ 'dev/js/*.js' ],
            options: {
              inline : true
            }
          }
        },

      //Watch for changes    
        watch: {
          all: {
            files: ['dev/*.html', 
                    'dev/styles/*.{scss,less}', 
                    'dev/css/*.css', 
                    'dev/js/*.js',  
                    'dev/js/**/*.js', 
                    'dev/img/*.{png,jpg,gif}',
                    'dev/markup/*.{haml,jade}' ],
            tasks: ['default'],
            options: {
              spawn: false,
            },
          },
        }

    });
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-combine-media-queries');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-csso');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-haml');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-newer');

    grunt.loadNpmTasks('grunt-bower-concat');
    // grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.loadNpmTasks('grunt-preprocess');

    grunt.registerTask('default', ['newer:concat', 
                                   'newer:uglify', 
                                   'newer:sass', 
                                   'newer:less', 
                                   'newer:csso',
                                   'newer:jade',
                                   'newer:haml',
                                   'newer:htmlmin',
                                   'newer:imagemin',
                                   'watch'
    ]);

    grunt.registerTask('bower-dev', ['bower_concat',
                                     // 'bowercopy',
                                     'clean:gitkeep',
                                     'clean:bower'
    ]);

    grunt.registerTask('build', ['preprocess',
                                 'newer:cmq',
                                 'newer:autoprefixer',
                                 'newer:uglify',
                                 'newer:csso',
                                 'newer:htmlmin',                                     
                                 'clean:debug'
    ]);
};