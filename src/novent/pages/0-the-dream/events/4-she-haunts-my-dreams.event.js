NoventEngine.novent().page(0).event(4, function(container, page, resolve) {
  createjs.Tween.get(page.scope.aMemory).to({alpha: 0, scaleX: 0.9, scaleY: 0.9}, 1500);
  createjs.Tween.get(page.scope.justAMemory).to({alpha: 0, scaleX: 0.9, scaleY: 0.9}, 1500);
  createjs.Tween.get(page.scope.haunts).to({alpha: 0, scaleX: 0.9, scaleY: 0.9}, 1500).call(function() {
    page.scope.aMemory.visible = false;
    page.scope.justAMemory.visible = false;
    page.scope.haunts.visible = false;
    createjs.Tween.get(page.scope.blurFilter).to({blurX: 0, blurY: 0}, 2000).addEventListener("change", function() {page.scope.letMeGo.updateCache();});
    createjs.Tween.get(page.scope.herWhisper).wait(2000).call(function () {
      page.scope.whisper = createjs.Sound.play("whisper");
    });
    createjs.Tween.get(page.scope.letMeGo).to({alpha: 0.4, scaleX: 1, scaleY: 1}, 2000).call(function() {
      createjs.Tween.get(page.scope.herWhisper).wait(2000).call(function() {
        createjs.Tween.get(page.scope.herWhisper).to({alpha: 1}, 2000).call(function() {
          resolve();
        });
      });
    });
  });
});
