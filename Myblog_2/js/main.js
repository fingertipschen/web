var board = new Array();

$(function() {
	newgame();
});

function newgame() {
	init();
	//生成2个随机位置的随机数字
	generateOneNumber();
	generateOneNumber();

}

function init() {
	for(var i = 0; i < 4; i++) {
		board[i] = new Array();
		for(var j = 0; j < 4; j++) {
			//初始化各自为0
			board[i][j] = 0;
			var girdCell = $("#gird-cell-" + i + "-" + j);
			girdCell.css("top", getPosTop(i, j));
			girdCell.css("left", getPosLeft(i, j));
		}
	}
	updateBoardView();
	
}

function updateBoardView() {
	$(".number-cell").remove();
	for(var i = 0; i < 4; i++) {
		for(var j = 0; j < 4; j++) {
			$("#grid_container").append("<div class='number-cell' id='number-cell-" + i + "-" + j + "'></div>");
			var numberCell = $("#number-cell-" + i + "-" + j);
			//如果棋盘的值我0的话，设置数字格的宽高都2为0；
			if(board[i][j] == 0) {
				numberCell.css("width", "0px");
				numberCell.css("height", "0px");
				numberCell.css("top", getPosTop(i, j) + 50);
				numberCell.css("left", getPosLeft(i, j) + 50);
			} else {
				numberCell.css("width", "100px");
				numberCell.css("height", "100px");
				numberCell.css("top", getPosTop(i, j));
				numberCell.css("left", getPosLeft(i, j));
				numberCell.css("background-color", getNumberBackgroundColor(board[i][j]));
				numberCell.css("color", getNumberColor(board[i][j]));
				numberCell.text(board[i][j]);
			}
		}
	}
}

function generateOneNumber() {
	//生产一个随机位置的随机数字
	//1先生产是一个随机位置(浮点数0~0.5)
	var randx = parseInt(Math.floor(Math.random() * 4));
	var randy = parseInt(Math.floor(Math.random() * 4));

	while(true) {
		if(board[randx][randy] == 0) {
			break;
		} //否则重新生成
		var randx = parseInt(Math.floor(Math.random() * 4));
		var randy = parseInt(Math.floor(Math.random() * 4));
	}
	//2生产一个随机数字
	var randNumber = Math.random() < 0.5 ? 2 : 4;
	//3在随机位置上显示随机数字
	board[randx][randy] = randNumber;
	//实线随机数字显示的动画
	showNumberWithAnimation(randx, randy, randNumber);
}


//最高分
function changeScores(board) {
	for(var i = 0; i < 4; i++) {
		for(var j = 0; j < 4; j++) {
			for(var a = 0; a < 4; a++) {
				for(var b = 0; b < 4; b++) {
					if(board[a][b] >= board[i][j]) {
						var a = board[a][b];
					} else var a = board[i][k];
				}
			}
		}
	}
	var scores = $("#score");
	scores.text(a);
}