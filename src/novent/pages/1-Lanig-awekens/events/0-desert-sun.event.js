NoventEngine.novent().page(1).event(0, function(container, page, resolve) {
  createjs.Tween.get(page.scope.sky).to({x: -500, y: -250}, 10000);

  page.scope.wind = createjs.Sound.play("wind");
  page.scope.wind.loop = -1;

  createjs.Tween.get(page.scope.eye1).wait(500).call(function() {
    createjs.Tween.get(page.scope.eye2).to({y: -1080}, 1500);
    createjs.Tween.get(page.scope.eye1).to({y: 1080}, 1500).call(function() {
      createjs.Tween.get(page.scope.eye1).wait(500).call(function() {
        page.scope.awakening = createjs.Sound.play("awakening");
        page.scope.awakening.volume = 0;
        page.scope.awakening.loop = -1;

        createjs.Tween.get(page.scope.awakening).to({volume: 0.5}, 1500);
        createjs.Tween.get(page.scope.whereAmI).to({alpha: 1}, 1500);
      });
      createjs.Tween.get(page.scope.eye1).wait(6000).call(function() {
        createjs.Tween.get(page.scope.eye2).to({y: 0}, 2000, createjs.Ease.quadOut);
        createjs.Tween.get(page.scope.eye1).to({y: 0}, 2000, createjs.Ease.quadOut).call(function() {
          page.scope.sky.visible = false;
          page.scope.sky.whereAmI = false;
          page.scope.sky.eye1 = false;
          page.scope.sky.eye2 = false;
          createjs.Tween.get(page.scope.eye1).wait(2000).call(function() {
            createjs.Tween.get(page.scope.eyesClosed).to({alpha: 1}, 4000, createjs.Ease.quadIn).call(function() {
              createjs.Tween.get(page.scope.lanigAwakens).wait(500).call(function() {
                createjs.Tween.get(page.scope.lanigAwakens).to({alpha: 1}, 1500).call(function() {
                  createjs.Tween.get(page.scope.eyesOpen).to({alpha: 1}, 2000).call(function() {
                    page.scope.heartBeat = createjs.Sound.play("heartBeat");
                    createjs.Tween.get(page.scope.asHeOpens).to({alpha: 1}, 1500).call(function() {
                      resolve();
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
