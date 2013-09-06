define(['enchant', 'core'], function(enchant, core) {

  var Emotion = enchant.Class.create(enchant.Sprite, {

    initialize: function(x, y, frame) {

      enchant.Sprite.call(this, 32, 32);
      this.image = core.assets['img/emotion.png'];
      this.x = x;
      this.y = y;
      this.frame = frame;

      this.addEventListener('enterframe', function(e) {
        //移動処理
        (this.frame <= 2) ? this.y -= 4 : this.y += 4;
        //画面枠外に出た場合削除
        if (this.y < 0 || this.y > 320) {
          this.remove();
        }
      }, false);
    },

    show: function() {
      core.rootScene.addChild(this);
    },

    remove: function() {
      //このスプライトをrootSceneから削除する
      core.rootScene.removeChild(this);
      delete this;
    }
  });
  return Emotion;
});