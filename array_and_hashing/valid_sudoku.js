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
class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const cols = new Map();
        const rows = new Map();
        const squares = new Map();

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] === .) continue;

                const squareKey = `${Math.floor(r / 3)},${Math.floor(c / 3)}`;

                if (
                    (rows.get(r) && rows.get(r).has(board[r][c])) ||
                    (cols.get(c) && cols.get(c).has(board[r][c])) ||
                    (squares.get(squareKey) &&
                        squares.get(squareKey).has(board[r][c]))
                ) {
                    return false;
                }

                if (!rows.has(r)) rows.set(r, new Set());
                if (!cols.has(c)) cols.set(c, new Set());
                if (!squares.has(squareKey)) squares.set(squareKey, new Set());

                rows.get(r).add(board[r][c]);
                cols.get(c).add(board[r][c]);
                squares.get(squareKey).add(board[r][c]);
            }
        }
        return true;
    }
}
class Solution {
    isValidSudoku(board) {
        let rows = new Array(9).fill(0);
        let cols = new Array(9).fill(0);
        let squares = new Array(9).fill(0);

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] === .) continue;

                let val = board[r][c] - 1;

                if (
                    rows[r] & (1 << val) ||
                    cols[c] & (1 << val) ||
                    squares[Math.floor(r / 3) * 3 + Math.floor(c / 3)] &
                        (1 << val)
                ) {
                    return false;
                }

                rows[r] |= 1 << val;
                cols[c] |= 1 << val;
                squares[Math.floor(r / 3) * 3 + Math.floor(c / 3)] |= 1 << val;
            }
        }
        return true;
    }
}
class Solution {
    isValidSudoku(board) {
        let rows = new Array(9).fill(0);
        let cols = new Array(9).fill(0);
        let squares = new Array(9).fill(0);

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] === .) continue;

                let val = board[r][c] - 1;

                if (
                    rows[r] & (1 << val) ||
                    cols[c] & (1 << val) ||
                    squares[Math.floor(r / 3) * 3 + Math.floor(c / 3)] &
                        (1 << val)
                ) {
                    return false;
                }

                rows[r] |= 1 << val;
                cols[c] |= 1 << val;
                squares[Math.floor(r / 3) * 3 + Math.floor(c / 3)] |= 1 << val;
            }
        }
        return true;
    }
}
