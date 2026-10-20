class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */

    // O(n^2) O(n^2)
    isValidSudoku(board) {
        const n = board.length;
        // check rows
        for (let i = 0; i < n; i++) {
            const rowRecord = new Set();
            const colRecord = new Set();
            for (let j = 0; j < n; j++) {
                let tile = board[i][j];

                if (tile != ".") {
                    if (rowRecord.has(tile)) {
                        return false;
                    } else {
                        rowRecord.add(tile);
                    }
                }

                tile = board[j][i];

                  if (tile != ".") {
                    if (colRecord.has(tile)) {
                        return false;
                    } else {
                        colRecord.add(tile);
                    }
                }

            }   
        }

        for (let square = 0; square < 9; square++) {
            let seen = new Set();
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    let row = Math.floor(square / 3) * 3 + i;
                    let col = (square % 3) * 3 + j;
                    if (board[row][col] === .) continue;
                    if (seen.has(board[row][col])) return false;
                    seen.add(board[row][col]);
                }
            }
        }

        // check subBox? 

      
        return true;
    }
}


/*
naive: O(3n^2)
- row no duplicates
- col no duplicates
- sub box no duplicates

Optimized: 
 */
