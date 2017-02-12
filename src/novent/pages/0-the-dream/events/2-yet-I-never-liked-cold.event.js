NoventEngine.novent().page(0).event(2, function(container, page, resolve) {
  createjs.Tween.get(page.scope.andYet).to({alpha: 0, scaleX: 0.9, scaleY: 0.9}, 1500);
  createjs.Tween.get(page.scope.InThisMoment).to({alpha: 0, scaleX: 0.9, scaleY: 0.9}, 1500).call(function() {
    page.scope.andYet.visible = false;
    page.scope.InThisMoment.visible = false;
    createjs.Tween.get(page.scope.notAnySense).wait(500).call(function() {
      createjs.Tween.get(page.scope.notAnySense).to({alpha: 1}, 2000).call(function() {
        resolve();
      });
    });
  });
});
