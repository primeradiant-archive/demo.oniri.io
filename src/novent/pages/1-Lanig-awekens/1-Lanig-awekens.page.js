NoventEngine.novent().page(1, "Lanig awakens", {
  eye1: 'images/eye1.png',
  eye2: 'images/eye2.png',
  sky: 'images/sky.jpg',
  eyesClosed: 'images/eyesClosed.jpg',
  eyesOpen: 'images/eyesOpen.jpg',
  awake: 'images/awake.jpg',
  lanigFull: 'images/lanigFull.png',
  heartBeat: 'sounds/heart.mp3',
  wind: 'sounds/desert-wind.mp3'
}, function(container, page) {
  page.scope.sky = new createjs.Bitmap(page.lib.sky);
  page.scope.sky.x = 0;
  page.scope.sky.y = 0;
  page.scope.sky.scaleX = 0.75;
  page.scope.sky.scaleY = 0.75;
  page.scope.sky.alpha = 1;
  container.addChild(page.scope.sky);

  page.scope.whereAmI = new createjs.Text("Where am I ?", "bold 24px Amita", "#000000");
	page.scope.whereAmI.maxWidth = 1000;
	page.scope.whereAmI.textAlign = "center";
	page.scope.whereAmI.textBaseline = "middle";
	page.scope.whereAmI.x = 960;
	page.scope.whereAmI.y = 540;
  page.scope.whereAmI.alpha = 0;
	container.addChild(page.scope.whereAmI);

  page.scope.eye1 = new createjs.Bitmap(page.lib.eye1);
  page.scope.eye1.x = 0;
  page.scope.eye1.y = 0;
  page.scope.eye1.alpha = 1;
  container.addChild(page.scope.eye1);

  page.scope.eye2 = new createjs.Bitmap(page.lib.eye2);
  page.scope.eye2.x = 0;
  page.scope.eye2.y = 0;
  page.scope.eye2.alpha = 1;
  container.addChild(page.scope.eye2);

  page.scope.awake = new createjs.Bitmap(page.lib.awake);
  page.scope.awake.regX = 1090;
  page.scope.awake.regY = 819;
  page.scope.awake.x = 960;
  page.scope.awake.y = 540;
  page.scope.awake.alpha = 0;
  container.addChild(page.scope.awake);

  page.scope.eyesClosed = new createjs.Bitmap(page.lib.eyesClosed);
  page.scope.eyesClosed.regX = 960;
  page.scope.eyesClosed.regY = 540;
  page.scope.eyesClosed.x = 960;
  page.scope.eyesClosed.y = 350;
  page.scope.eyesClosed.alpha = 0;
  container.addChild(page.scope.eyesClosed);

  page.scope.eyesOpen = new createjs.Bitmap(page.lib.eyesOpen);
  page.scope.eyesOpen.regX = 960;
  page.scope.eyesOpen.regY = 540;
  page.scope.eyesOpen.x = 960;
  page.scope.eyesOpen.y = 350;
  page.scope.eyesOpen.alpha = 0;
  container.addChild(page.scope.eyesOpen);

  page.scope.lanigAwakens = new createjs.Text("Lanig awakens.", "500 24px Halant", "#000000");
	page.scope.lanigAwakens.maxWidth = 1000;
	page.scope.lanigAwakens.textAlign = "center";
	page.scope.lanigAwakens.textBaseline = "middle";
	page.scope.lanigAwakens.x = 970;
	page.scope.lanigAwakens.y = 880;
  page.scope.lanigAwakens.alpha = 0;
	container.addChild(page.scope.lanigAwakens);

  page.scope.asHeOpens = new createjs.Text("As he opens his black eyes, a feeling of pure fear flows through his chest.", "500 24px Halant", "#000000");
	page.scope.asHeOpens.maxWidth = 1000;
	page.scope.asHeOpens.textAlign = "center";
	page.scope.asHeOpens.textBaseline = "middle";
	page.scope.asHeOpens.x = 970;
	page.scope.asHeOpens.y = 928;
  page.scope.asHeOpens.alpha = 0;
	container.addChild(page.scope.asHeOpens);

  page.scope.iMustRun = new createjs.Text("I must run.", "bold 24px Amita", "#000000");
	page.scope.iMustRun.maxWidth = 1000;
	page.scope.iMustRun.textAlign = "center";
	page.scope.iMustRun.textBaseline = "middle";
	page.scope.iMustRun.x = 970;
	page.scope.iMustRun.y = 880;
  page.scope.iMustRun.alpha = 0;
	container.addChild(page.scope.iMustRun);

});
