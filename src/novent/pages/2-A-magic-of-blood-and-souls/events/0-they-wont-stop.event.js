NoventEngine.novent().page(2).event(0, function(container, page, resolve) {
  page.scope.theyWontStop = new createjs.Text("They won't stop, ever.", "bold 24px Amita", "#000000");
  page.scope.theyWontStop.maxWidth = 1000;
  page.scope.theyWontStop.textAlign = "center";
  page.scope.theyWontStop.textBaseline = "middle";
  page.scope.theyWontStop.x = 1305;
  page.scope.theyWontStop.y = 500;
  page.scope.theyWontStop.alpha = 0;
  container.addChild(page.scope.theyWontStop);

  page.scope.theCultGives = new createjs.Container();
  var theIdeaText = "\t\t\t\tThe Cult pays them too well. Lanig knows it. He knows that whoever brings a Necromancer's eyes to a priest will become rich. Lanig is shaking. He will always have to run, always have to fight. Despite the fear, he stares at his pursuers with a defiant look, remembering the old promise he has been making to himself for decades.";
  justifyText(page.scope.theCultGives, theIdeaText, "500 26px PT Serif", 34, 810, "#000000");
  page.scope.theCultGives.x = 900;
  page.scope.theCultGives.y = 560;
  page.scope.theCultGives.alpha = 0;
  container.addChild(page.scope.theCultGives);

  createjs.Tween.get(page.scope.dust11, {loop: true}).to({y: 50, alpha: 1}, 4000).to({y: 0, alpha: 0}, 4000);

  createjs.Tween.get(page.scope.dust12).wait(4000).call(function() {
    createjs.Tween.get(page.scope.dust12, {loop: true}).to({y: 50, alpha: 1}, 4000).to({y: 0, alpha: 0}, 4000);
  });

  createjs.Tween.get(page.scope.whiteScreen).to({alpha: 0}, 2500).call(function() {
    page.scope.whiteScreen.visible = false;
    createjs.Tween.get(page.scope.dust12).wait(2000).call(function() {
      createjs.Tween.get(page.scope.theyWontStop).to({alpha: 1}, 1500).call(function() {
        createjs.Tween.get(page.scope.theCultGives).to({alpha: 1}, 1500).call(resolve);
      });
    });
  });
});
