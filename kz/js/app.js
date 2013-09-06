
//設定
requirejs.config({

  shim: {

    enchant: {
      exports: 'enchant'
    },

    nineleap: {
      deps: ['enchant']
    },

    ui: {
      deps: ['enchant']
    }

  },

  paths: {
    enchant: './../lib/enchantjs/enchant',
    nineleap: './../lib/enchantjs/nineleap.enchant',
    ui: './../lib/enchantjs/ui.enchant',
    core: './common',
    tomato: './view/tomato',
    emotion: './view/emotion'
  }

});

//実行関数
require([
  'enchant',
  'core',
  './view/bg',
  'tomato'
], function(enchant, core, Map, Tomato) {

    core.addEventListener('load', function() {
      console.log('test');
      /**
       * 背景
       */
      var bg = new Map(320, 320);
      core.rootScene.addChild(bg);

      /**
       * スコア表示
       * @type {ScoreLabel}
       */
      var scoreLabel = new ScoreLabel(160, 0);
      scoreLabel.score = 0;
      scoreLabel.easing = 0;
      core.rootScene.addChild(scoreLabel);


      /**
       * 残り時間表示
       * @type {MutableText}
       */
      var timeLabel = new MutableText(10, 0);
      timeLabel.text = 'TIME: ' + core.limitTime;
      core.rootScene.addChild(timeLabel);

      /**
       * ゲームのプレイ中のみ呼び出される
       */
      core.rootScene.addEventListener('enterframe', function(e) {

        //スコアの更新処理
        scoreLabel.score = core.score;
        //一秒間隔で実行する処理
        //(フレームレート = 1秒辺りに処理されるフレーム数)
        if (core.frame % core.fps === 0) {
          core.limitTime --;
          timeLabel.text = 'Time: ' + core.limitTime;
          if (core.limitTime === 0) {
            core.end(null, null, core.assets['img/timeup.png']);
          }
        }

        //10 or 20 or 30 フレームごとにトマトを生成する
        if (core.frame % ((rand(3) + 1) * 10) === 0) {
          var tomato = new Tomato(rand(10) * 32, rand(10) * 32);
          tomato.show();
        }
      }, false);


    }, false);

  core.start();
});