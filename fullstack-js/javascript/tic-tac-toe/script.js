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

    // resetBoard method
    const resetBoard = () => {
        for (let i = 0; i < rows; i++) {
            board[i] = [];
            for (let j = 0; j < columns; j++) {
                board[i].push(0);
            }
        }
    }

    // populate board upon instantiation
    if (board.length === 0) {
        resetBoard();
    }

    // getBoard method
    const getBoard = () => board;

    // addMarker method
    const addMarker = (row, column, marker) => {
        if (board[row][column] === 0) {   
            board[row][column] = marker;
        } else {
            alert('Cell already taken!');
        }
    }

    // checkDraw method
    const checkDraw = () => {
        return board.every((row) => row.every((cell) => cell !== 0));
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
                console.log('Won!');
                return true;
            }
        }

        return false;

        // count consecutive matching markers, excluding the placed marker itself
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

    const buildBoard = (doc, container, controller) => {
        container.innerHTML = ''
        
        for (let i = 0; i < board.length; i++) {
            currRow = board[i];

            const rowElement = doc.createElement('div');
            rowElement.classList.add('row');

            for (let j = 0; j < currRow.length; j++) {
                currCell = currRow[j];

                const cellElement = buildCellElement(currCell);

                cellElement.addEventListener('mouseover', () => {
                    cellElement.style.backgroundColor = 'gainsboro';
                });
    
                cellElement.addEventListener('mouseleave', () => {
                    cellElement.style.backgroundColor = 'white';
                });
                
                cellElement.addEventListener('click', () => {
                    controller.playRound(i, j);
                    buildBoard(doc, container, controller);
                });

                rowElement.appendChild(cellElement);
            }

            container.appendChild(rowElement);
        }

        function buildCellElement(cell) {
            const cellElement = doc.createElement('div');
            cellElement.classList.add('cell');
            cellElement.textContent = cell === 0 ? '' : cell;

            return cellElement;
        }
    }

    return { resetBoard, getBoard, addMarker, checkDraw, checkWin, buildBoard };
}   

function GameController(board, playerOneName = 'Player One', playerTwoName = 'Player Two') {
    const players = [
        new Player(playerOneName, 'X'),
        new Player(playerTwoName, 'O')
    ];

    let activePlayer = players[0];

    const getActivePlayer = () => activePlayer;

    const switchPlayer = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    }

    const playRound = (row, column) => {
        if (board.getBoard()[row][column] !== 0) {
            alert('Cell already taken!');
            return;
        } else {
            board.addMarker(row, column, activePlayer.token);
        }

        if (board.checkDraw()) {
            alert('Draw!');
        } else if (board.checkWin(row, column, activePlayer.token)) {
            alert(`${activePlayer.name} won!`);
        } else {
            switchPlayer();
        }
    }

    return { getActivePlayer, playRound }
}   


const TicTacToe = (function(doc) {
    const boardContainer = doc.querySelector('#board');
    const board = Gameboard();
    const controller = GameController(board);

    board.buildBoard(doc, boardContainer, controller);
})(document);