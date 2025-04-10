function Player(name, token) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }

    return { name, token };
}

function Gameboard() {
    const rows = 3;
    const columns = 3;
    const board = [];

    // create a 2D array
    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push(0);
        }
    }

    // getBoard method
    const getBoard = () => board;

    // addMarker method
    const addMarker = (row, column, marker) => {
        board[row][column] = marker;
    }

    // checkWin method
    const checkWin = (row, column, marker) => {
        // declare positive directions
        const directions = [
            [0, 1], // right
            [1, 0], // down
            [1, 1], // right-down
            [1, -1], // left-down
        ];

        for (direction of directions) {
            const [dx, dy] = direction;

            // start from the placed marker
            let count = 1

            // countConsecutive in the positive direction
            count += countConsecutive(row, column, dx, dy);

            // countConsecutive in the negative direction
            count += countConsecutive(row, column, -dx, -dy);

            if (count === 3) {
                console.log(true);
                return true;
            }
        }

        console.log(false);
        return false;

        // helper function to count consecutive matching markers, excluding the placed marker itself
        function countConsecutive(startRow, startColumn, dx, dy) {
            count = 0;
            currRow = startRow + dx;
            currColumn = startColumn + dy;

            while (currRow >= 0 && currRow < rows && 
                currColumn >= 0 && currColumn < columns && 
                board[currRow][currColumn] === marker) {
                count += 1;
                currRow += dx;
                currColumn += dy;
            }

            return count;
        }
    }

    // displayBoard method  
    const displayBoard = () => {
        const boardSnapshot = board.map(
            (row) => row.map(
                (cell) => cell
            )
        );

        console.log(boardSnapshot);
    }

    return { getBoard, addMarker, checkWin, displayBoard };
}   


const board = Gameboard();
board.displayBoard();
board.addMarker(0, 0, 1);    
board.addMarker(1, 1, 1);
board.addMarker(2, 1, 1);
board.displayBoard();    
board.checkWin(0, 0, 1);   