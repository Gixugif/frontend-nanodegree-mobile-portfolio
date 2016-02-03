/*
 After you have changed the settings under responsive_images
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 1600,
            suffix: '_large',
            quality: 30
          },
          {
            width: 1000,
            suffix: '_medium',
            quality: 30
          },
          {
            width: 600,
            suffix:'_small',
            quality: 30
          },
          {
            width: 100,
            suffix:'_tiny',
            quality: 30
          },]

        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'img_src/',
          dest: '../dist/img/'
        }],
      }
  },

    uglify:{
      js:{
        expand: true,
        src: ['./js/*.js','./views/js/*.js'],
        dest: '../dist/',
        ext: '.min.js'
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          src: ['./css/*.css','./views/css/*.css',],
          dest: '../dist/',
          ext: '.min.css'
        }],
      }
    },

    copy: {
      main: {
        files: [{
          expand: true,
          src: ['./*','./views/*', './views/images/*.{png,jpg}', '!*.{css,js}', '!node_modules/*.*', '!img_src/!*.*'],
          dest: '../dist/',
          dot: true
        }],
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['img'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['img']
        },
      },
    },

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images','uglify','cssmin','copy']);

};
