define([
  'enchant',
  'nineleap',
  'ui'
], function(enchant, nineleap, ui) {
  enchant();
  var core = new Core(320, 320);
  core.fps = 30;
  core.preload('img/tomato.png', 'img/emotion.png', 'img/timeup.png');
  core.score = 0;
  core.limitTime = 20;  //制限時間の設定
  return core;
});