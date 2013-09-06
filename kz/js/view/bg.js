define(['enchant'], function(enchant) {

  var Map = enchant.Class.create(enchant.Sprite, {

    //初期化処理
    initialize: function(x, y) {
      enchant.Sprite.call(this, 320, 320);
      this.backgroundColor = '#4abafa';
    }
  });

  return Map;
});