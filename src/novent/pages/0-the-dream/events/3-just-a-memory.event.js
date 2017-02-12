NoventEngine.novent().page(0).event(3, function(container, page, resolve) {
  createjs.Tween.get(page.scope.notAnySense).to({alpha: 0, scaleX: 0.9, scaleY: 0.9}, 1500).call(function() {
    createjs.Tween.get(page.scope.theDream).to({volume: 0}, 1500);

    page.scope.thePortrait = createjs.Sound.play("thePortrait");
    page.scope.thePortrait.loop = true;
    page.scope.thePortrait.volume = 0.5;

    page.scope.notAnySense.visible = false;
    createjs.Tween.get(page.scope.notAnySense).wait(1500).call(function() {
      page.scope.theDream.stop();
      createjs.Tween.get(page.scope.portrait).to({alpha: 1, scaleX: 1, scaleY: 1}, 3000, createjs.Ease.quadInOut).call(function() {
        createjs.Tween.get(page.scope.aMemory).wait(1500).call(function() {
            createjs.Tween.get(page.scope.aMemory).to({alpha: 0.7}, 2000).call(function() {
              createjs.Tween.get(page.scope.justAMemory).to({alpha: 0.7}, 2000).call(function() {
                createjs.Tween.get(page.scope.haunts).to({alpha: 0.7}, 2000).call(function() {
                  resolve();
                });
              });
            });
        });
      });
    });
  });
});
