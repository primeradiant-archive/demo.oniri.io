NoventEngine.novent().page(1).event(3, function(container, page, resolve) {
  page.scope.getUpNow = new createjs.Text("Get up now !", "bold 24px Amita", "#000000");
  page.scope.getUpNow.maxWidth = 1000;
  page.scope.getUpNow.textAlign = "center";
  page.scope.getUpNow.textBaseline = "middle";
  page.scope.getUpNow.x = 500;
  page.scope.getUpNow.y = 730;
  page.scope.getUpNow.alpha = 0;
  container.addChild(page.scope.getUpNow);

  page.scope.whiteScreen = new createjs.Shape();
  page.scope.whiteScreen.graphics.beginFill("white").drawRect(0,0,1920,1080);
  page.scope.whiteScreen.alpha = 0;
  container.addChild(page.scope.whiteScreen);

  createjs.Tween.get(page.scope.getUpNow).to({alpha: 1}, 1500).call(function() {
    createjs.Tween.get(page.scope.getUpNow).wait(1000).call(function() {
      createjs.Tween.get(page.scope.whiteScreen).to({alpha: 1}, 1500).call(function() {
        resolve();
      });
    });
  });
});
