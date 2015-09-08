module.exports = function(grunt) {

  var options = {};

  options.jsFiles = {
      'app/dist/js/main.js': [
          'bower_components/jquery/dist/jquery.min.js',
          'bower_components/angular/angular.min.js',
          'bower_components/angular-route/angular-route.min.js',
          'bower_components/angular-sanitize/angular-sanitize.min.js',
          'bower_components/svg4everybody/dist/svg4everybody.min.js',
          // 'bower_components/angular-soundmanager2/dist/angular-soundmanager2.min.js',
          'app/src/js/lib/angular-soundmanager2.js',
          'app/src/js/app/main.js',
          'app/src/js/app/app.js',
          'app/src/js/app/directives/svg.js',
          'app/src/js/app/controllers/feeds.js',
          'app/src/js/app/controllers/ng-views.js',
          'app/src/js/app/controllers/page.js',
          'app/src/js/app/controllers/playlist.js',
          'app/src/js/app/controllers/search.js',
          'app/src/js/app/filters.js',
          'app/src/js/app/services.js',
          'app/src/js/app/services/checkCurrentPodcastOnLoad.js',
          'app/src/js/app/services/checkFeed.js',
          'app/src/js/app/services/getFeed.js',
          'app/src/js/app/services/getUniqueShow.js',
          'app/src/js/app/services/localStorageHandler.js',
          'app/src/js/app/services/pageTitle.js',
          'app/src/js/app/services/podcastsPlaylist.js',
          'app/src/js/app/services/prepareFeed.js',
          'app/src/js/app/services/searchFeed.js',
          'app/src/js/app/services/defaultPodcasts.js',
          'app/src/js/app/services/svgs.js'
      ]
  };

  options.htmlmin = {
      collapseWhitespace: true,
      removeComments: true
  };

  // Project configuration.
  grunt.initConfig({
    // This line makes your node configurations available for use
    pkg: grunt.file.readJSON('package.json'),
    // htmllint: {
    //     all: 'app/index.html'
    // },
    htmlmin: {
        prod: {
            options: options.htmlmin,
            files: {
                'app/index.html': 'app/index.html'
            }
        }
    },
    // This is where we configure JSHint
    jshint: {
      all: [
           'Gruntfile.js',
           'app/src/js/app/*.js'
           ]
    },
    concat: {
      options: {
        separator: grunt.util.linefeed + ';' + grunt.util.linefeed
      },
      all: {
        files: options.jsFiles
      }
    },
    uglify: {
        prod: {
            files: options.jsFiles
        }
    },
    less: {
        all: {
          files: {
              'app/dist/css/style.css' : 'app/src/css/style.less'
          }
      }
    },
    cssmin: {
        all: {
            files: {
                'app/dist/css/style.css' : 'app/dist/css/style.css'
            }
        }
    },
    copy: {
      all: {
          cwd: 'bower_components/angular-sanitize/',
          src: 'angular-sanitize.min.js.map',
          dest: 'app/dist/js/',
          expand: true
      }
    },
    watch: {
      scripts: {
        files: ['app/**/*', '!**/dist/**'],
        tasks: ['jshint', 'concat', 'less']
      }
    }
  });
  // Each plugin must be loaded following this pattern
  // grunt.loadNpmTasks('grunt-html');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('start', ['concat', 'less', 'copy']);
  grunt.registerTask('dev', ['jshint', 'concat', 'less', 'watch']);
  grunt.registerTask('prod', ['htmlmin:prod', 'jshint', 'concat', 'uglify:prod', 'less', 'cssmin', 'copy']);

};