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
          src: ['*.{gif,jpg,png}','!profilepic.jpg'],
          cwd: 'img',
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
          src: ['./*','./views/*','./img/profilepic.jpg', './views/images/*.{png,jpg}','!./views/*.html', '!*.{css,js,html}', '!node_modules/*.*', '!img_src/!*.*'],
          dest: '../dist/',
          dot: true
        }],
      }
    },

    htmlcompressor: {
      compile: {
        files: {
          '../dist/index.html': 'index.html',
          '../dist/project-2048.html': 'project-2048.html',
          '../dist/project-mobile.html': 'project-mobile.html',
          '../dist/project-webperf.html': 'project-webperf.html',
          '../dist/views/pizza.html': 'views/pizza.html'
        },
        options : {
          type: 'html',
        }
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
  grunt.loadNpmTasks('grunt-htmlcompressor');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['mkdir', 'responsive_images','uglify','cssmin','copy','htmlcompressor']);

};
