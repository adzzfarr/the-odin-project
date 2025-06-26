class Square {
    // Each square on the board is a node
    constructor(location) {
        // [x, y] coordinates of a square
        this.location = location;
        // Array of adjacent squares
        this.adjacents = [];
    }
}