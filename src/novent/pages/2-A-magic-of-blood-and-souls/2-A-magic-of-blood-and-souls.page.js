NoventEngine.novent().page(2, "A Magic of Blood and Souls", {
  cover: 'images/cover.png',
  cape: 'images/cape.png',
  dust: 'images/dust.png',
  dust2: 'images/dust2.png',
  mercenaries: 'images/mercenaries.png',
  mainTheme: "musics/Sho_s_Waltz.mp3"
}, function(container, page) {
  page.scope.cover = new createjs.Bitmap(page.lib.cover);
  page.scope.cover.regX = 960;
  page.scope.cover.regY = 540;
  page.scope.cover.x = 960;
  page.scope.cover.y = 540;
  page.scope.cover.alpha = 1;
  container.addChild(page.scope.cover);

  page.scope.cape = new createjs.Bitmap(page.lib.cape);
  page.scope.cape.regX = 960;
  page.scope.cape.regY = 540;
  page.scope.cape.x = 960;
  page.scope.cape.y = 540;
  page.scope.cape.alpha = 1;
  container.addChild(page.scope.cape);

  page.scope.dust11 = new createjs.Bitmap(page.lib.dust);
  page.scope.dust11.x = 800;
  page.scope.dust11.y = 100;
  page.scope.dust11.alpha = 0;
  container.addChild(page.scope.dust11);

  page.scope.dust12 = new createjs.Bitmap(page.lib.dust);
  page.scope.dust12.x = 770;
  page.scope.dust12.y = 100;
  page.scope.dust12.alpha = 0;
  container.addChild(page.scope.dust12);

  page.scope.mercenaries = new createjs.Bitmap(page.lib.mercenaries);
  page.scope.mercenaries.regX = 960;
  page.scope.mercenaries.regY = 540;
  page.scope.mercenaries.x = 960;
  page.scope.mercenaries.y = 540;
  page.scope.mercenaries.alpha = 1;
  container.addChild(page.scope.mercenaries);

  page.scope.whiteScreen = new createjs.Shape();
  page.scope.whiteScreen.graphics.beginFill("white").drawRect(0,0,1920,1080);
  page.scope.whiteScreen.alpha = 1;
  container.addChild(page.scope.whiteScreen);

});
