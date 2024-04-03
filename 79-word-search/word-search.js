/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let rows = board.length;
    let cols = board[0].length;

    const checkChar = (i, j, k) => {
        if(k === word.length) {
            return true;
        }
        if(i < 0 || i >= rows || j < 0 || j >= cols || board[i][j] !== word.charAt(k)) {
            return false;
        }
        const tempBoard = board[i][j];
        board[i][j] = '\0';

        const result = checkChar(i-1, j, k+1) || 
                        checkChar(i+1, j, k+1) || 
                        checkChar(i, j-1, k+1) || 
                        checkChar(i, j+1, k+1);
        board[i][j] = tempBoard;
        return result;
    }
    for (let i = 0; i < rows; ++i) {
        for (let j = 0; j < cols; ++j) {
            if(checkChar(i, j, 0)) {
                return true;
            }
        }
    }
    return false;
};
