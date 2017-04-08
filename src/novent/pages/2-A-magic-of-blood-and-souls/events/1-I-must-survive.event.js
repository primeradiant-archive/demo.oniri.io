NoventEngine.novent().page(2).event(1, function(container, page, resolve) {
  page.scope.survive = new createjs.Text("Survive. I must survive.", "bold 24px Amita", "#000000");
  page.scope.survive.maxWidth = 1000;
  page.scope.survive.textAlign = "center";
  page.scope.survive.textBaseline = "middle";
  page.scope.survive.x = 1310;
  page.scope.survive.y = 800;
  page.scope.survive.alpha = 0;
  container.addChild(page.scope.survive);

  page.scope.title = new createjs.Text("A Magic of\nBlood and Souls", "bold 80px Inknut Antiqua", "#000000");
  page.scope.title.maxWidth = 1000;
  page.scope.title.textAlign = "center";
  page.scope.title.textBaseline = "middle";
  page.scope.title.x = 1285;
  page.scope.title.y = 660;
  page.scope.title.alpha = 0;
  container.addChild(page.scope.title);

  page.scope.blackScreen = new createjs.Shape();
  page.scope.blackScreen.graphics.beginFill("black").drawRect(0,0,1920,1080);
  page.scope.blackScreen.alpha = 0;
  container.addChild(page.scope.blackScreen);

  createjs.Tween.get(page.novent.pages[1].scope.wind).to({volume: 0}, 1500).call(function() {
    page.novent.pages[1].scope.wind.stop();
  });

  page.scope.mainTheme = createjs.Sound.play("mainTheme");
  page.scope.mainTheme.volume = 0;

  createjs.Tween.get(page.scope.mainTheme).to({volume: 0.5}, 1000).call(function() {
    createjs.Tween.get(page.scope.survive).to({alpha: 1}, 3000).call(function() {
      createjs.Tween.get(page.scope.survive).wait(4000).call(function()  {
        createjs.Tween.get(page.scope.survive).to({alpha: 0}, 2000);
        createjs.Tween.get(page.scope.theyWontStop).to({alpha: 0}, 2000);
        createjs.Tween.get(page.scope.theCultGives).to({alpha: 0}, 2000).call(function() {
          createjs.Tween.get(page.scope.title).wait(1000).call(function() {
            createjs.Tween.get(page.scope.title).to({alpha: 1}, 3000).call(function() {
              createjs.Tween.get(page.scope.title).wait(15000).call(function() {
                createjs.Tween.get(page.scope.blackScreen).to({alpha: 1}, 2000).call(resolve);
              });
            });
          });
        });
      });
    });
  });
});
