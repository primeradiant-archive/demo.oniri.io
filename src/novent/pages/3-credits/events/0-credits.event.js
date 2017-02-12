NoventEngine.novent().page(3).event(0, function(container, page, resolve) {
  createjs.Tween.get(page.scope.credits).to({alpha: 1}, 2000).call(resolve);
});
