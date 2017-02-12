NoventEngine.novent().page(0).event(1, function(container, page, resolve) {
  createjs.Tween.get(page.scope.myDreams).to({alpha: 0, scaleX: 0.9, scaleY: 0.9}, 1500).call(function() {
    page.scope.myDreams.visible = false;
    createjs.Tween.get(page.scope.imCold).wait(500).call(function() {
      createjs.Tween.get(page.scope.andYet).to({alpha: 1}, 2500).call(function() {
        createjs.Tween.get(page.scope.InThisMoment).to({alpha: 1}, 2500).call(function() {
          resolve();
        });
      });
    });
  });
});
