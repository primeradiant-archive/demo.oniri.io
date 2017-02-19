NoventEngine.novent(720, 1280);

NoventEngine.novent().page(0, "page 0", {
  smoke: 'images/smoke.png',
  particle: 'images/particle.png',
  portrait: 'images/portrait.png'
}, function(container, page) {
  page.scope.particleType = true;
  for(var i = 0; i < 100; i++)
    createParticle();

  page.scope.portrait = new createjs.Bitmap(page.lib.portrait);
  page.scope.portrait.regX = 640;
  page.scope.portrait.regY = 360;
  page.scope.portrait.x = 640;
  page.scope.portrait.y = 360;
  page.scope.portrait.scaleX = 0.8;
  page.scope.portrait.scaleY = 0.8;
  page.scope.portrait.alpha = 0;
  container.addChild(page.scope.portrait);

  page.scope.smoke1 = new createjs.Bitmap(page.lib.smoke);
  page.scope.smoke1.x = 0;
  page.scope.smoke1.alpha = 0;
  container.addChild(page.scope.smoke1);

  page.scope.smoke2 = new createjs.Bitmap(page.lib.smoke);
  page.scope.smoke2.x = - 100;
  page.scope.smoke2.alpha = 0;
  container.addChild(page.scope.smoke2);

  page.scope.smoke3 = new createjs.Bitmap(page.lib.smoke);
  page.scope.smoke3.x = - 200;
  page.scope.smoke3.alpha = 0;
  container.addChild(page.scope.smoke3);

  function createParticle() {
    var particle = new createjs.Bitmap(page.lib.particle);
    particle.x = Math.abs(Math.random()*1280);
    particle.y = 730;
    var test = Math.round(Math.random());
    if(test === 0)
      container.addChildAt(particle, container.getChildIndex(page.scope.portrait));
    else
      container.addChildAt(particle, container.getChildIndex(page.scope.portrait) + 1);
    var scale = Math.abs(Math.random()*0.3) + 0.1;
    particle.scaleX = scale;
    particle.scaleY = scale;
    particle.alpha = Math.abs(Math.random()*0.5) + 0.4;

    var wait = Math.random()*10000;

    createjs.Tween.get(particle).wait(wait).to({y: 0}, 10000, createjs.Ease.quadInOut);
    createjs.Tween.get(particle).wait(wait)
      .to({x: particle.x + Math.abs((Math.random()*2 - 1)*100)}, 2000, createjs.Ease.quadInOut)
      .to({x: particle.x + Math.abs((Math.random()*2 - 1)*100)}, 2000, createjs.Ease.quadInOut)
      .to({x: particle.x + Math.abs((Math.random()*2 - 1)*100)}, 2000, createjs.Ease.quadInOut)
      .to({x: particle.x + Math.abs((Math.random()*2 - 1)*100)}, 2000, createjs.Ease.quadInOut)
      .to({x: particle.x + Math.abs((Math.random()*2 - 1)*100)}, 2000, createjs.Ease.quadInOut);

    createjs.Tween.get(particle).wait(wait).to({alpha: 0}, Math.random()*5000 + 4000).call(function() {
      particle.visible = false;
      container.removeChild(particle);
      createParticle();
    });
  }
});

NoventEngine.novent().page(0).event(0, function(container, page, resolve) {
  createjs.Tween.get(page.scope.portrait).to({alpha: 1, scaleX: 1, scaleY: 1}, 3000, createjs.Ease.quadInOut);

  createjs.Tween.get(page.scope.smoke1, {loop: true}).to({y: -150, alpha: 0.7}, 2000).to({y: -300, alpha: 0}, 2000);

  createjs.Tween.get(page.scope.smoke2).wait(1000).call(function() {
    createjs.Tween.get(page.scope.smoke2, {loop: true}).to({y: -150, alpha: 0.7}, 2000).to({y: -300, alpha: 0}, 2000);
  });

  createjs.Tween.get(page.scope.smoke3).wait(2000).call(function() {
    createjs.Tween.get(page.scope.smoke3, {loop: true}).to({y: -150, alpha: 0.7}, 2000).to({y: -300, alpha: 0}, 2000);
  });

  resolve();
});
