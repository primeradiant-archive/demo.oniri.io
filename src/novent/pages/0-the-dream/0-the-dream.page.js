NoventEngine.novent().page(0, "The Dream", {
  smoke: 'images/smoke.png',
  portrait: 'images/portrait.png',
  particle: 'images/particle.png',
  portrait2: 'images/portrait2.png',
  crack1: 'images/crack1.png',
  crack2: 'images/crack2.png',
  sword: 'images/sword.png',
  blood: 'images/blood.png',
  eye1: 'images/eye1.png',
  eye2: 'images/eye2.png',
  crack3: 'images/crack3.png',
  particle2: 'images/particle2.png',
  crackSound: 'sounds/crack.mp3',
  whisper: 'sounds/whisper.mp3',
  iceCrack: 'sounds/ice_crack.mp3',
  theDream: 'musics/The_Dream.mp3',
  thePortrait: 'musics/The_Portrait.mp3'
}, function(container, page) {
  page.scope.particleType = true;
  for(var i = 0; i < 100; i++)
    createParticle();

  page.scope.portrait = new createjs.Bitmap(page.lib.portrait);
  page.scope.portrait.regX = 960;
  page.scope.portrait.regY = 540;
  page.scope.portrait.x = 960;
  page.scope.portrait.y = 540;
  page.scope.portrait.scaleX = 0.8;
  page.scope.portrait.scaleY = 0.8;
  page.scope.portrait.alpha = 0;
  container.addChild(page.scope.portrait);

  page.scope.portrait2 = new createjs.Bitmap(page.lib.portrait2);
  page.scope.portrait2.regX = 960;
  page.scope.portrait2.regY = 540;
  page.scope.portrait2.x = 960;
  page.scope.portrait2.y = 540;
  page.scope.portrait2.scaleX = 1;
  page.scope.portrait2.scaleY = 1;
  page.scope.portrait2.alpha = 0;
  container.addChild(page.scope.portrait2);

  page.scope.crack1 = new createjs.Bitmap(page.lib.crack1);
  page.scope.crack1.regX = 960;
  page.scope.crack1.regY = 540;
  page.scope.crack1.x = 960;
  page.scope.crack1.y = 540;
  page.scope.crack1.scaleX = 1;
  page.scope.crack1.scaleY = 1;
  page.scope.crack1.alpha = 1;
  container.addChild(page.scope.crack1);

  page.scope.crack2 = new createjs.Bitmap(page.lib.crack2);
  page.scope.crack2.regX = 960;
  page.scope.crack2.regY = 540;
  page.scope.crack2.x = 960;
  page.scope.crack2.y = 540;
  page.scope.crack2.scaleX = 1;
  page.scope.crack2.scaleY = 1;
  page.scope.crack2.alpha = 1;
  container.addChild(page.scope.crack2);

  page.scope.crack1.mask = new createjs.Shape();
  page.scope.crack1.mask.graphics.drawCircle(975, 850, 1);
  page.scope.crack2.mask = page.scope.crack1.mask;

  page.scope.blood = new createjs.Bitmap(page.lib.blood);
  page.scope.blood.regX = 960;
  page.scope.blood.regY = 540;
  page.scope.blood.x = 960;
  page.scope.blood.y = 540;
  page.scope.blood.scaleX = 1;
  page.scope.blood.scaleY = 1;
  page.scope.blood.alpha = 1;
  container.addChild(page.scope.blood);

  page.scope.blood.mask = new createjs.Shape();
  page.scope.blood.mask.graphics.drawCircle(993, 487, 1);

  page.scope.sword = new createjs.Bitmap(page.lib.sword);
  page.scope.sword.regX = 960;
  page.scope.sword.regY = 540;
  page.scope.sword.x = 970;
  page.scope.sword.y = 660;
  page.scope.sword.scaleX = 0.3;
  page.scope.sword.scaleY = 0.3;
  page.scope.sword.alpha = 1;
  container.addChild(page.scope.sword);

  page.scope.sword.mask = new createjs.Shape();
  page.scope.sword.mask.graphics.drawRect(0, 795, 1920, 285);

  page.scope.smoke1 = new createjs.Bitmap(page.lib.smoke);
  page.scope.smoke1.x = - 300;
  page.scope.smoke1.alpha = 0;
  container.addChild(page.scope.smoke1);

  page.scope.smoke2 = new createjs.Bitmap(page.lib.smoke);
  page.scope.smoke2.x = - 600;
  page.scope.smoke2.alpha = 0;
  container.addChild(page.scope.smoke2);

  page.scope.imCold = new createjs.Text("I am cold.", "bold 24px Amita", "#FFFFFF");
	page.scope.imCold.maxWidth = 1000;
	page.scope.imCold.textAlign = "center";
	page.scope.imCold.textBaseline = "middle";
	page.scope.imCold.x = 960;
	page.scope.imCold.y = 540;
  page.scope.imCold.alpha = 0;
	container.addChild(page.scope.imCold);

  page.scope.myDreams = new createjs.Text("My dreams are always cold, filled with frozen mist.", "bold 24px Amita", "#FFFFFF");
	page.scope.myDreams.maxWidth = 1000;
	page.scope.myDreams.textAlign = "center";
	page.scope.myDreams.textBaseline = "middle";
	page.scope.myDreams.x = 960;
	page.scope.myDreams.y = 540;
  page.scope.myDreams.alpha = 0;
	container.addChild(page.scope.myDreams);

  page.scope.andYet = new createjs.Text("And yet, I welcome this cold with relief and delight.", "bold 24px Amita", "#FFFFFF");
	page.scope.andYet.maxWidth = 1000;
	page.scope.andYet.textAlign = "center";
	page.scope.andYet.textBaseline = "middle";
	page.scope.andYet.x = 960;
	page.scope.andYet.y = 516;
  page.scope.andYet.alpha = 0;
	container.addChild(page.scope.andYet);

  page.scope.InThisMoment = new createjs.Text("In this moment, the idea of living in a world without sun gives me an odd pleasure.", "bold 24px Amita", "#FFFFFF");
	page.scope.InThisMoment.maxWidth = 1000;
	page.scope.InThisMoment.textAlign = "center";
	page.scope.InThisMoment.textBaseline = "middle";
	page.scope.InThisMoment.x = 960;
	page.scope.InThisMoment.y = 564;
  page.scope.InThisMoment.alpha = 0;
	container.addChild(page.scope.InThisMoment);

  page.scope.notAnySense = new createjs.Text("It makes no sense, I never liked the cold...", "bold 24px Amita", "#FFFFFF");
	page.scope.notAnySense.maxWidth = 1000;
	page.scope.notAnySense.textAlign = "center";
	page.scope.notAnySense.textBaseline = "middle";
	page.scope.notAnySense.x = 960;
	page.scope.notAnySense.y = 540;
  page.scope.notAnySense.alpha = 0;
	container.addChild(page.scope.notAnySense);

  page.scope.aMemory = new createjs.Text("A memory...", "bold 24px Amita", "#FFFFFF");
	page.scope.aMemory.maxWidth = 1000;
	page.scope.aMemory.textAlign = "center";
	page.scope.aMemory.textBaseline = "middle";
	page.scope.aMemory.x = 970;
	page.scope.aMemory.y = 690;
  page.scope.aMemory.alpha = 0;
	container.addChild(page.scope.aMemory);

  page.scope.justAMemory = new createjs.Text("She is but a memory now,", "bold 24px Amita", "#FFFFFF");
	page.scope.justAMemory.maxWidth = 1000;
	page.scope.justAMemory.textAlign = "center";
	page.scope.justAMemory.textBaseline = "middle";
	page.scope.justAMemory.x = 970;
	page.scope.justAMemory.y = 738;
  page.scope.justAMemory.alpha = 0;
	container.addChild(page.scope.justAMemory);

  page.scope.haunts = new createjs.Text("a memory that haunts my dreams.", "bold 24px Amita", "#FFFFFF");
	page.scope.haunts.maxWidth = 1000;
	page.scope.haunts.textAlign = "center";
	page.scope.haunts.textBaseline = "middle";
	page.scope.haunts.x = 970;
	page.scope.haunts.y = 786;
  page.scope.haunts.alpha = 0;
	container.addChild(page.scope.haunts);

  page.scope.letMeGo = new createjs.Text("Let me go, Lanig...", "bold 44px Tangerine", "#899FA3");
	page.scope.letMeGo.maxWidth = 1000;
	page.scope.letMeGo.textAlign = "center";
	page.scope.letMeGo.textBaseline = "middle";
	page.scope.letMeGo.x = 970;
	page.scope.letMeGo.y = 740;
  page.scope.letMeGo.scaleX = 0.9;
  page.scope.letMeGo.scaleY = 0.9;
  page.scope.letMeGo.alpha = 0;
  page.scope.letMeGo.shadow = new createjs.Shadow("rgba(255,255,255,.2)", 2, 2, 0);
	container.addChild(page.scope.letMeGo);

  page.scope.herWhisper = new createjs.Text("Her whisper resonates with my souls, like a distant call from my past.", "bold 24px Amita", "#FFFFFF");
	page.scope.herWhisper.maxWidth = 1000;
	page.scope.herWhisper.textAlign = "center";
	page.scope.herWhisper.textBaseline = "middle";
	page.scope.herWhisper.x = 970;
	page.scope.herWhisper.y = 800;
  page.scope.herWhisper.alpha = 0;
	container.addChild(page.scope.herWhisper);

  page.scope.blurFilter = new createjs.BlurFilter(30,30,3);
  page.scope.letMeGo.filters = [page.scope.blurFilter];
  page.scope.letMeGo.cache(-200,-200,400,400);

  page.scope.howManyTimes = new createjs.Text("How many times will I witness her death again ?", "bold 24px Amita", "#FFFFFF");
	page.scope.howManyTimes.maxWidth = 1000;
	page.scope.howManyTimes.textAlign = "center";
	page.scope.howManyTimes.textBaseline = "middle";
	page.scope.howManyTimes.x = 970;
	page.scope.howManyTimes.y = 800;
  page.scope.howManyTimes.alpha = 0;
	container.addChild(page.scope.howManyTimes);

  page.scope.whyDoI = new createjs.Text("Why do I still torture myself with this image ?", "bold 24px Amita", "#FFFFFF");
	page.scope.whyDoI.maxWidth = 1000;
	page.scope.whyDoI.textAlign = "center";
	page.scope.whyDoI.textBaseline = "middle";
	page.scope.whyDoI.x = 970;
	page.scope.whyDoI.y = 848;
  page.scope.whyDoI.alpha = 0;
	container.addChild(page.scope.whyDoI);

  page.scope.collapsing = new createjs.Text("My dream collapses", "bold 24px Amita", "#FFFFFF");
	page.scope.collapsing.maxWidth = 1000;
	page.scope.collapsing.textAlign = "center";
	page.scope.collapsing.textBaseline = "middle";
	page.scope.collapsing.x = 970;
	page.scope.collapsing.y = 516;
  page.scope.collapsing.alpha = 0;
	container.addChild(page.scope.collapsing);

  page.scope.reassuringCold = new createjs.Text("The reassuring cold leaves me. I feel pain, thirst...", "bold 24px Amita", "#FFFFFF");
	page.scope.reassuringCold.maxWidth = 1000;
	page.scope.reassuringCold.textAlign = "center";
	page.scope.reassuringCold.textBaseline = "middle";
	page.scope.reassuringCold.x = 970;
	page.scope.reassuringCold.y = 564;
  page.scope.reassuringCold.alpha = 0;
	container.addChild(page.scope.reassuringCold);


  page.scope.smoke3 = new createjs.Bitmap(page.lib.smoke);
  page.scope.smoke3.x = - 900;
  page.scope.smoke3.alpha = 0;
  container.addChild(page.scope.smoke3);

  page.scope.crack3 = new createjs.Bitmap(page.lib.crack3);
  page.scope.crack3.regX = 960;
  page.scope.crack3.regY = 540;
  page.scope.crack3.x = 960;
  page.scope.crack3.y = 540;
  page.scope.crack3.scaleX = 1;
  page.scope.crack3.scaleY = 1;
  page.scope.crack3.alpha = 1;
  container.addChild(page.scope.crack3);

  page.scope.eye1 = new createjs.Bitmap(page.lib.eye1);
  page.scope.eye1.x = 0;
  page.scope.eye1.y = 1080;
  page.scope.eye1.alpha = 1;
  container.addChild(page.scope.eye1);

  page.scope.eye2 = new createjs.Bitmap(page.lib.eye2);
  page.scope.eye2.x = 0;
  page.scope.eye2.y = -1080;
  page.scope.eye2.alpha = 1;
  container.addChild(page.scope.eye2);

  page.scope.crack3.mask = new createjs.Shape();
  page.scope.crack3.mask.graphics.drawRect(0, 1080, 1920, 0);

  function createParticle() {
    var particle;
    if(page.scope.particleType)
      particle = new createjs.Bitmap(page.lib.particle);
    else
      particle = new createjs.Bitmap(page.lib.particle2);
    particle.x = Math.abs(Math.random()*1920);
    particle.y = 1090;
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
