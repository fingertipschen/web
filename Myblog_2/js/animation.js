function showNumberWithAnimation(i, j, randNumber) {
	//获取当前数字格
	var numberCell = $("#number-cell-" + i + "-" + j);
	//设置背景色和前景色以及数字值
	numberCell.css("background-color", getNumberBackgroundColor(randNumber));
	numberCell.css("color", getNumberColor(randNumber));
	numberCell.text(randNumber);
	//设置当前数字歌心事的动画
	numberCell.animate({
		width: "100px",
		height: "100px",
		top: getPosTop(i, j),
		left: getPosLeft(i, j)
	}, 50);

}

function showMoveAnimation(fromx, fromy, tox, toy) {
	var numberCell = $("#number-cell-" + fromx + "-" + fromy);
	numberCell.animate({
		top: getPosTop(tox, toy),
		left: getPosLeft(tox, toy)
	}, 200);

}