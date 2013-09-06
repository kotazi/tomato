module.exports = function(grunt) {
  //グラントタスクの設定
  grunt.initConfig({

    // requirejs用の設定
    requirejs: {
      compile_top: {
        options: {
          name : 'app',  // mainで読み込むjsのpath
          baseUrl: "./js",
          mainConfigFile: './js/app.js',
          out: "./build/app.js"
        }
      }
    },

    //watchの設定
    watch: {
      dev: {
        files: [ 'js/**'],
        tasks: ['requirejs']
      }
    }
  });

  //プラグインの読み込み
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
};
