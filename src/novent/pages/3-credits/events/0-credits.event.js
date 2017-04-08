NoventEngine.novent().page(3).event(0, function(container, page, resolve) {
  createjs.Tween.get(page.scope.credits).to({alpha: 1}, 2000).call(function() {
    createjs.Tween.get(page.scope.credits).wait(3000).call(resolve);
  });
});
