function generateButton(container) {
    const button = document.createElement("button");
    button.textContent = "Input Grid Size";

    button.addEventListener("click", () => {
        let n = Number(prompt("Grid Size: "));

        while (!Number.isInteger(n) || n < 2) {
            n = Number(prompt("Please input an integer between 2 and 100."));
        };

        while (n > 100) {
            n = Number(prompt("Please input an integer between 2 and 100."));
        }

        // remove previous grid, if any
        removeGrid(container);

        // generate the new grid
        generateGrid(container, n, n)
    });


    container.appendChild(button);
}

function generateGrid(container, height, width) {
    for (let i = 0; i < height; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < width; j++) {
            const square = document.createElement("div");

            // allows for css selector
            square.classList.add("square"); 

            // set the square size based on container size
            setSquareSize(square);

            //add required eventListeners
            addRequiredEventListeners(square);

            row.appendChild(square);
        }
        container.appendChild(row);
    }

    function setSquareSize(square) {
        const containerHeight = container.offsetHeight;
        const squareHeight = containerHeight / height;
        // squareWidth == squareHeight

        square.style.height = `${squareHeight}px`;
        square.style.width = `${squareHeight}px`;
    }

    function addRequiredEventListeners(square) {
        const randomColor = getRandomColor();

        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = randomColor;
        });

        square.addEventListener("mouseleave", () => {
            darkenSquare(square);
        })
    }
}

function removeGrid(container) {
    const grid = container.querySelectorAll(".row");
    grid.forEach((row) => container.removeChild(row));
}

function getRandomColor() {
    const values = [0, 0, 0].map(() => Math.floor(Math.random() * 256));

    return `rgb(${values[0]}, ${values[1]}, ${values[2]})`;
}

function darkenSquare(square) {
    const opacity = Number(window.getComputedStyle(square).getPropertyValue("opacity"));
    square.style.opacity = opacity + 0.1;
    console.log(square.style.opacity);
}

const container = document.querySelector("#container");
const n = generateButton(container);