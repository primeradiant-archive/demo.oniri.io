NoventEngine.novent().page(1).event(2, function(container, page, resolve) {
  page.scope.iMustGetUp = new createjs.Text("I must get up. They will kill me.", "bold 24px Amita", "#000000");
  page.scope.iMustGetUp.maxWidth = 1000;
  page.scope.iMustGetUp.textAlign = "center";
  page.scope.iMustGetUp.textBaseline = "middle";
  page.scope.iMustGetUp.x = 500;
  page.scope.iMustGetUp.y = 400;
  page.scope.iMustGetUp.alpha = 0;
  container.addChild(page.scope.iMustGetUp);

  page.scope.theIdea = new createjs.Container();
  var theIdeaText = "\t\t\t\tThe idea of dying is hard to bear for anyone, but for one who has lived as long as Lanig, it becomes even more terrifying. For almost two centuries, he has witnessed the golden age of Magic, and then its fall from grace. This very Magic which kept him alive for so long is what threatens him now. The Cult has the power and the Cult wants the Magic to disappear. He has no choice but to run, and hide.";
  justifyText(page.scope.theIdea, theIdeaText, "500 26px PT Serif", 34, 800, "#000000");
  page.scope.theIdea.x = 100;
  page.scope.theIdea.y = 460;
  page.scope.theIdea.alpha = 0;
  container.addChild(page.scope.theIdea);

  createjs.Tween.get(page.scope.iMustGetUp).to({alpha: 1}, 1500).call(function() {
      createjs.Tween.get(page.scope.theIdea).to({alpha: 1}, 1500).call(function() {
        resolve();
      });
  });
});
