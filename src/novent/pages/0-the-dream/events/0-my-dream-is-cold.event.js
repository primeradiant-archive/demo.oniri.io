NoventEngine.novent().page(0).event(0, function(container, page, resolve) {
    page.scope.theDream = createjs.Sound.play("theDream");
    page.scope.theDream.loop = true;
    page.scope.theDream.volume = 0.5;

    createjs.Tween.get(page.scope.smoke1, {loop: true}).to({y: -150, alpha: 0.7}, 2000).to({y: -300, alpha: 0}, 2000);

    createjs.Tween.get(page.scope.smoke2).wait(1000).call(function() {
      createjs.Tween.get(page.scope.smoke2, {loop: true}).to({y: -150, alpha: 0.7}, 2000).to({y: -300, alpha: 0}, 2000);
    });

    createjs.Tween.get(page.scope.smoke3).wait(2000).call(function() {
      createjs.Tween.get(page.scope.smoke3, {loop: true}).to({y: -150, alpha: 0.7}, 2000).to({y: -300, alpha: 0}, 2000);
    });

    createjs.Tween.get(page.scope.imCold).wait(4000).call(function() {
      createjs.Tween.get(page.scope.imCold).to({alpha: 1}, 2000).call(function() {
        createjs.Tween.get(page.scope.imCold).wait(2000).call(function() {
            createjs.Tween.get(page.scope.imCold).to({alpha: 0, scaleX: 0.9, scaleY: 0.9}, 1000).call(function() {
                page.scope.imCold.visible = false;
                createjs.Tween.get(page.scope.myDreams).to({alpha: 1}, 2000).call(function() {
                  createjs.Tween.get(page.scope.myDreams).wait(500).call(function() {
                    resolve();
                  });
                });
            });
        });
      });
    });
});
