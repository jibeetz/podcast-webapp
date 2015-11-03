module.exports = function(grunt) {

  var options = {};

  options.jsFiles = {
      'app/dist/js/main.js': [
          'bower_components/jquery/dist/jquery.min.js',
          'bower_components/spin.js/spin.js',
          'bower_components/alertify.js/lib/alertify.js',
          'bower_components/angular/angular.min.js',
          'bower_components/angular-route/angular-route.min.js',
          'bower_components/angular-sanitize/angular-sanitize.min.js',
          'bower_components/angular-spinner/angular-spinner.js',
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
          'app/src/js/app/services/confirmOnloadSongCustom.js'
      ]
  };

  options.cssFiles = {
      'app/dist/css/style.css': [
          'app/src/css/fonts.css',
          'bower_components/alertify.js/themes/alertify.core.css',
          'app/src/css/style.css'
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
      all: {
        files: [options.jsFiles, options.cssFiles]
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
              'app/src/css/style.css' : 'app/src/less/style.less'
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
    // copy: {
    //   all: {
    //       cwd: '',
    //       src: '',
    //       dest: '',
    //       expand: true
    //   }
    // },
    watch: {
      scripts: {
        files: ['app/**/*', '!**/dist/**', '!**app/src/css/style.css**'],
        tasks: ['jshint', 'less', 'concat']
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
  // grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('start', ['less', 'concat']);
  grunt.registerTask('dev', ['jshint', 'less', 'concat', 'watch']);
  grunt.registerTask('prod', ['htmlmin:prod', 'jshint', 'less', 'concat', 'uglify:prod', 'cssmin']);

};