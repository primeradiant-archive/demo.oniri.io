NoventEngine.novent().page(0).event(5, function(container, page, resolve) {
  createjs.Tween.get(page.scope.letMeGo).to({alpha: 0, scaleX: 0.9, scaleY: 0.9}, 1500);
  createjs.Tween.get(page.scope.herWhisper).to({alpha: 0, scaleX: 0.9, scaleY: 0.9}, 1500).call(function() {
    page.scope.letMeGo.visible = false;
    page.scope.herWhisper.visible = false;
    createjs.Tween.get(page.scope.herWhisper).wait(3000).call(function() {
      createjs.Tween.get(page.scope.sword).to({x: 960, y: 540, scaleX: 1, scaleY: 1}, 500, createjs.Ease.quadIn);
      createjs.Tween.get(page.scope.portrait2).to({alpha: 1}, 500);
      createjs.Tween.get(page.scope.portrait2).wait(150).call(function() {
        page.scope.crackSound = createjs.Sound.play("crackSound");
        createjs.Tween.get(page.scope.crack1.mask.graphics.command).to({radius: 490}, 500, createjs.Ease.quadOut).call(function() {
          createjs.Tween.get(page.scope.crack1).wait(500).call(function() {
            createjs.Tween.get(page.scope.blood.mask.graphics.command).to({radius: 30}, 2000, createjs.Ease.quadOut).call(function() {
              createjs.Tween.get(page.scope.howManyTimes).wait(3000).call(function() {
                createjs.Tween.get(page.scope.howManyTimes).to({alpha: 1}, 2000).call(function() {
                  createjs.Tween.get(page.scope.whyDoI).to({alpha: 1}, 2000).call(function() {
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
