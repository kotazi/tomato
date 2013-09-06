define(['enchant', 'core', 'emotion'], function(enchant, core, Emotion) {
  var SPEED = 2;

  var Tomato = enchant.Class.create(enchant.Sprite, {

    initialize: function(x, y) {
      //継承元をコール
      enchant.Sprite.call(this, 32, 32);
      this.image = core.assets['img/tomato.png'];
      this.x = x;
      this.y = y;
      this.frame = rand(3);
      this.tick = 0;  //経過秒数

      this.addEventListener('enterframe', function(e) {
        //一秒間隔で実行する処理
        if (core.frame % core.fps === 0) {
          //経過秒数をカウントする
          this.tick++;
          //二秒経過したらremoveメソッドが走る
          if (this.tick > SPEED) {
            this.remove();
          }
        }
      }, false);

      //タッチイベント
      this.addEventListener('touchstart', function(e) {
        //赤いトマト(フレーム番号[2])にタッチ
        if (this.frame === 2) {
          core.score += 10;
          //ウィンクのエモーションを生成
          var emotion = new Emotion(this.x, this.y, 1);
        }

        //オレンジのトマト(フレーム番号[1])にタッチ
        if (this.frame === 1) {
          core.score -= 1;
          //怒りのエモーションを生成
          var emotion = new Emotion(this.x, this.y, 3);
        }

        //緑のトマト(フレーム番号[2])にタッチ
        if (this.frame === 0) {
          core.score -= 10;
          //泣きのエモーションを生成
          var emotion = new Emotion(this.x, this.y, 4);
        }
        emotion.show();
        this.remove();
      }, false);
    },

    //トマトを配置する
    show: function() {
      core.rootScene.addChild(this);
    },

    //トマトを取り除く
    remove: function() {
      core.rootScene.removeChild(this);
      delete this;
    }
  });

  return Tomato;
});