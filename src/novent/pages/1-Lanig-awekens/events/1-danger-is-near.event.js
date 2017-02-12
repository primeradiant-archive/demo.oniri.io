NoventEngine.novent().page(1).event(1, function(container, page, resolve) {

  page.scope.dangerIsNear = new createjs.Text("Danger is near, death is near.", "bold 24px Amita", "#000000");
  page.scope.dangerIsNear.maxWidth = 1000;
  page.scope.dangerIsNear.textAlign = "center";
  page.scope.dangerIsNear.textBaseline = "middle";
  page.scope.dangerIsNear.x = 970;
  page.scope.dangerIsNear.y = 924;
  page.scope.dangerIsNear.alpha = 0;
  container.addChild(page.scope.dangerIsNear);

  page.scope.lanigFull = new createjs.Bitmap(page.lib.lanigFull);
  page.scope.lanigFull.regX = 1368;
  page.scope.lanigFull.regY = 1024;
  page.scope.lanigFull.x = 960;
  page.scope.lanigFull.y = 540;
  page.scope.lanigFull.alpha = 0;
  container.addChild(page.scope.lanigFull);

  page.scope.eyesClosed.alpha = 0;
  page.scope.awake.alpha = 1;
  createjs.Tween.get(page.scope.awake).to({rotation: 18}, 10000);
  createjs.Tween.get(page.scope.asHeOpens).to({alpha: 0}, 2000);
  createjs.Tween.get(page.scope.eyesOpen).to({alpha: 0}, 2000);
  createjs.Tween.get(page.scope.lanigAwakens).to({alpha: 0}, 2000).call(function() {
    page.scope.asHeOpens.visible = false;
    page.scope.eyesOpen.visible = false;
    page.scope.lanigAwakens.visible = false;
    createjs.Tween.get(page.scope.iMustRun).to({alpha: 1}, 1500).call(function() {
      createjs.Tween.get(page.scope.dangerIsNear).to({alpha: 1}, 1500);
    });
  });

  createjs.Tween.get(page.scope.lanigFull).wait(8500).call(function() {
    page.scope.theMemories = new createjs.Container();
    var theMemoriesText = "\t\t\t\tThe memories are coming back to him. The Cult wanting to kill all Necromancers, the mercenaries pursuing him for days, the exhaustion, the fall. Under the merciless sun, his muscles and mind are paralysed by heat and fear. Feeling the hot sand in his hands, his sweat running down his brow, Lanig struggles to come back to his senses.";
    justifyText(page.scope.theMemories, theMemoriesText, "500 26px Halant", 34, 800, "#000000");
    page.scope.theMemories.x = 100;
    page.scope.theMemories.y = 150;
    page.scope.theMemories.alpha = 0;
    container.addChild(page.scope.theMemories);

    createjs.Tween.get(page.scope.lanigFull).to({alpha: 1, rotation: 3}, 1500, createjs.Ease.quadOut).call(function() {
      page.scope.dangerIsNear.visible = false;
      page.scope.iMustRun.visible = false;
      page.scope.lanigAwakens.visible = false;

      createjs.Tween.get(page.scope.lanigFull).wait(500).call(function() {
        createjs.Tween.get(page.scope.theMemories).to({alpha: 1}, 1500).call(function() {
          resolve();
        });
      });
    });
  });
});
