$(document).keydown(function(event) {
	switch(event.keyCode) {
		case 37: //left
			if(moveLeft()) {
				generateOneNumber();
				//isgameover();
			}
			break;
		case 38: //up
			break;
		case 39: //right
			if(moveright()) {
				generateOneNumber();
			}
			break;
		case 40: //down
			break;
		default:
			break;
	}
});

function moveLeft() {
	//返回布尔值
	if(!canMoveLeft(board)) {
		return false; //当前格子无法移动
	}
	for(var i = 0; i < 4; i++) {
		for(var j = 1; j < 4; j++) {
			//判断当前位置是否有值
			if(board[i][j] != 0) {
				for(var k = 0; k < j; k++) {
					if(board[i][k] == 0 && noBlokHorizontalCol(i, k, j, board)) {
						//才能向左移动
						showMoveAnimation(i, j, i, k);
						board[i][k] = board[i][j];
						board[i][j] = 0;

					} else if(board[i][k] == board[i][j] && noBlokHorizontalCol(i, k, j, board)) {
						showMoveAnimation(i, j, i, k);
						board[i][k] += board[i][j];
						board[i][j] = 0;
					}
				}
			}
		}

	}
	setTimeout("updateBoardView();", 200);
	return true;

}

function moveright() {
	if(!canMoveRight(board)) {
		return false;
	}
	for(var i = 0; i < 4; i++) {
		for(var j = 0; j < 3; j++) {
			if(board[i][j] != 0) {
				for(var k = j+1; k <4; k++) {
					if(board[i][k] == 0 && noRightCenter(i, k, j, board)) {
						showMoveAnimation(i, j, i, k);
						board[i][k] = board[i][j];
						board[i][j] = 0;
					} else if(board[i][k] == board[i][j] && noRightCenter(i, k, j, board)) {
						showMoveAnimation(i, j, i, k);
						board[i][k] += board[i][j];
						board[i][j] = 0;
					}
				}
			}
		}
	}
	setTimeout("updateBoardView();", 200);
	return true;
}

function isgameover() {

}