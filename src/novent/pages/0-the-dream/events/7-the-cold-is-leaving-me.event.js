NoventEngine.novent().page(0).event(7, function(container, page, resolve) {
  createjs.Tween.get(page.scope.eye2).wait(1500).call(function() {
    createjs.Tween.get(page.scope.collapsing).to({alpha: 0, scaleX: 0.9, scaleY: 0.9}, 1500);
    createjs.Tween.get(page.scope.reassuringCold).to({alpha: 0, scaleX: 0.9, scaleY: 0.9}, 1500).call(function() {
      createjs.Tween.get(page.scope.eye2).to({y: 0}, 1500);
      createjs.Tween.get(page.scope.eye1).to({y: 0}, 1500);

      createjs.Tween.get(page.scope.theDream).to({volume: 0}, 4000).call(function() {
        page.scope.theDream.stop();
      });
      createjs.Tween.get(page.scope.iceCrack).to({volume: 0}, 4000).call(function() {
        page.scope.iceCrack.stop();
        resolve();
      });
    });
  });
});
