NoventEngine.novent().page(0).event(6, function(container, page, resolve) {
  createjs.Tween.get(page.scope.whyDoI).to({alpha: 0, scaleX: 0.9, scaleY: 0.9}, 1500);
  createjs.Tween.get(page.scope.howManyTimes).to({alpha: 0, scaleX: 0.9, scaleY: 0.9}, 1500);
  createjs.Tween.get(page.scope.eye1).wait(5000).call(function() {
    createjs.Tween.get(page.scope.eye1).to({y: 0}, 1500);
    createjs.Tween.get(page.scope.eye2).to({y: 0}, 1500).call(function() {
      page.scope.howManyTimes.visible = 0;
      page.scope.whyDoI.visible = false;
      page.scope.blood.visible = false;
      page.scope.crack1.visible = false;
      page.scope.crack2.visible = false;
      page.scope.portrait.visible = false;
      page.scope.portrait2.visible = false;
      page.scope.sword.visible = false;
      page.scope.particleType = false;

      createjs.Tween.get(page.scope.thePortrait).to({volume: 0}, 2000);

      page.scope.theDream.position = 0;
      page.scope.theDream.volume = 0.5;
      page.scope.theDream.play();

      createjs.Tween.get(page.scope.eye2).wait(2000).call(function() {
        page.scope.thePortrait.stop();

        page.scope.iceCrack = createjs.Sound.play("iceCrack");
        page.scope.iceCrack.volume = 0.5;
      });

      createjs.Tween.get(page.scope.eye2).wait(3000).call(function() {

        createjs.Tween.get(page.scope.eye2).to({y: -1080}, 1500);
        createjs.Tween.get(page.scope.eye1).to({y: 1080}, 1500).call(function() {

          createjs.Tween.get(page.scope.collapsing).wait(1500).call(function() {
            createjs.Tween.get(page.scope.collapsing).to({alpha: 1}, 2000).call(function() {
              createjs.Tween.get(page.scope.crack3.mask.graphics.command).to({h: -1080}, 500, createjs.Ease.quadOut).call(function() {
                createjs.Tween.get(page.scope.reassuringCold).to({alpha: 1}, 2000).call(function() {
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
