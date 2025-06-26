function knightMoves(start, end) {

    // List of valid moves that a knight can make
    const moves = [
        [1, 2],
        [2, 1],
        [2, -1],
        [1, -2],
        [-1, -2],
        [-2, -1],
        [-2, 1],
        [-1, 2],
    ];
    
    // End coordinates
    const [endX, endY] = end;

    // Do a level order traversal beginning from the start square
    let q = [];
    // Store squares in an object that stores their coords [x, y] and a reference to their parent
    q.push({
        coords: start,
        parent: null
    });
    let currIndex = 0;

    // Keep track of visited squares to avoid redundancy if they were visited before
    const visited = new Set();

    while (currIndex < q.length) {
        let currSquare = q[currIndex];
        const nextSquares = getNextSquares(currSquare);     

        for (let square of nextSquares) {
            const [x, y] = square.coords;

            // Check if it is the target square
            if (x === endX && y === endY) {
                // Since we are doing BFS, encountering the target square for the first time already guarantees that it is the shortest path
                return getPath(square);
            }

            // If it is not the target square, enqueue it (if it has not already been visited)
            const identifier = `${x},${y}`;
            if (!visited.has(identifier)) {
                visited.add(identifier);
                q.push({
                    coords: square.coords,
                    parent: currSquare,
                });
            }
        }

        currIndex++;
    }

    function getNextSquares(square) {
        const [x, y] = square.coords;

        let nextSquares = [];
        for (let move of moves) {
            const [dx, dy] = move;
            const [nextX, nextY] = [x + dx, y + dy];

            if (0 <= nextX && nextX < 8 && 0 <= nextY && nextY < 8) {
                // If the next move is within the chessboard, add it to nextSquares
                nextSquares.push({
                    coords: [nextX, nextY],
                    parent: square,
                });
            }
        }

        return nextSquares;
    }

    function getPath(square) {
        let path = [square.coords];
        
        let currParent = square.parent;
        while (currParent) {
            path.unshift(currParent.coords);
            currParent = currParent.parent;
        }

        return path;
    }
}

console.log(knightMoves([0, 0], [1, 2]));
// Expected: [[0, 0], [1, 2]]
console.log(knightMoves([0, 0], [2, 1]));
// Expected: [[0, 0], [1, 2], [2, 1]] OR [[0, 0], [2, 1]]
// Accept any valid shortest path with 2 or fewer moves
console.log(knightMoves([0, 0], [3, 3]));
// Expected: shortest path from corner to center (length 2 or 3 depending on the route)
console.log(knightMoves([0, 0], [7, 7]));
// Expected: shortest path of 6 moves (exact path may vary, but length should be 6)
