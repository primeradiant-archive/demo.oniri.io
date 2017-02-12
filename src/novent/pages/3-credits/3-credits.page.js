NoventEngine.novent().page(3, "Credits", {}, function(container, page) {
  page.scope.credits = new createjs.Text("Directed by\nANNE-LOUISE and GEORGES BIAUX\n\nWritten by\nGEORGES BIAUX\n\nMusic by\nANGELY CROQ\n\nIllustrated by\nGAETAN WELTZER", "200 24px Roboto", "#FFFFFF");
  page.scope.credits.maxWidth = 1000;
  page.scope.credits.textAlign = "center";
  page.scope.credits.textBaseline = "middle";
  page.scope.credits.x = 960;
  page.scope.credits.y = 400;
  page.scope.credits.alpha = 0;
  container.addChild(page.scope.credits);
});
