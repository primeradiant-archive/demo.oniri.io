NoventEngine.novent(1080, 1920);

function justifyText(container, content, font, lineHeight, width, color) {
	var words = content.split(' ');
	var line = '';
	var x = 0;
	var y = 0;

	for(var n = 0; n < words.length; n++) {
		var testLine;
		if(n === 0) {
			testLine = words[0];
		}
		else {
			testLine = line + ' ' + words[n];
		}

		var testTextContainer = new createjs.Text(testLine, font, color);
		var testWidth = testTextContainer.getMeasuredWidth();


		if (testWidth > width && n > 0) {
			container = justifyLine(container, line, font, color, width, x, y);

			line = words[n];
			if(lineHeight)
				y += lineHeight;
			else
				y += testTextContainer.getMeasuredLineHeight();
		}
		else {
			line = testLine;
		}
	}

	if(line !== '') {
		var lastLine = new createjs.Text(line, font, color);
		lastLine.x = x;
		lastLine.y = y;

		container.addChild(lastLine);
	}

	return container;
}

function justifyLine(container, line, font, color, width, x, y) {
	var words = line.split(' ');
	var lineWithoutSpace = new createjs.Text(line.replace(/ /g, ""), font, color);

	var spaceWidth = (width - lineWithoutSpace.getMeasuredWidth())/(words.length - 1);
	var lineX = x;

	for(var n = 0; n < words.length; n++) {
		var word = new createjs.Text(words[n], font, color);
		word.x = lineX;
		word.y = y;

		container.addChild(word);
		lineX = lineX + word.getMeasuredWidth() + spaceWidth;
	}

	return container;
}
