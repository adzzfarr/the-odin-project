let x;
let y;
let op;

function round(n, significantDigits = 10) {
    return Number(n.toPrecision(significantDigits));
}

function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {
    return Number(a) / Number(b);
}

function modulo(a, b) {
    return Number(a) % Number(b);
}

function operate(a, b, operator) {
    return operator(a, b);
}

function generateButtons(container) {
    const numpad = container.querySelector('#numpad');
    const display = container.querySelector('#display');

    const buttonLabels = [
        ['C', '÷'],
        ['7', '8', '9', '*'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['%', '0', '.', '='],
    ];

    for (const buttonRow of buttonLabels) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (const buttonLabel of buttonRow) {
            const button = document.createElement('button');
            button.textContent = buttonLabel;
            setButtonStyle(button);
            addButtonEventListeners(button);
            row.appendChild(button);
        }
        numpad.appendChild(row);
    }

    function setButtonStyle(button) {
        const numpadHeight = parseFloat(window.getComputedStyle(numpad).height);
        const numpadWidth = parseFloat(window.getComputedStyle(numpad).width);
        const marginTopBottom = 2;
        const marginLeftRight = 2;
        
        button.style.margin = `${marginTopBottom}px ${marginLeftRight}px`;
        button.style.height = `${numpadHeight / 5 - 2 * marginTopBottom}px`;

        if (button.textContent === 'C') {
            button.style.width = `${numpadWidth * (3 / 4) - 2 * marginLeftRight}px`;
        } else {
            button.style.width = `${numpadWidth / 4 - 2 * marginLeftRight}px`;
        }
    }

    function addButtonEventListeners(button) {
        let buttonLabel = button.textContent;

        if (!isNaN(Number(buttonLabel))) {
            button.addEventListener('click', () => {
                if (x === undefined && y === undefined) {
                    x = buttonLabel;
                } else if (x !== undefined && op === undefined) {
                    x += buttonLabel;
                } else if (x !== undefined && y === undefined && op !== undefined) {
                    y = buttonLabel;
                } else if (x !== undefined && y !== undefined && op !== undefined) {
                    y += buttonLabel;
                };

                display.textContent = y ?? x;

                console.log(`x: ${x}, y: ${y}, op: ${op}`);
            });
        } else {
            switch(buttonLabel) {
                case 'C':
                    button.addEventListener('click', () => {
                        display.textContent = ' ';
                        x = undefined;
                        y = undefined;
                        op = undefined;
                    });
                    break
                    

                case '÷':
                    button.addEventListener('click', () => {
                        if (x !== undefined && op === undefined) {
                            op = divide;
                        };

                        if (x !== undefined && y !== undefined && op !== undefined) {
                            x = operate(x, y, op);
                            display.textContent = round(x, 10);
                            y = undefined;
                            op = divide;
                        };
                    });
                    break

                case '*':
                    button.addEventListener('click', () => {
                        if (x !== undefined && op === undefined) {
                            op = multiply;
                        };

                        if (x !== undefined && y !== undefined && op !== undefined) {
                            x = operate(x, y, op);
                            display.textContent = round(x, 10);
                            y = undefined;
                            op = multiply;
                        };
                    });
                    break

                case '-':
                    button.addEventListener('click', () => {
                        if (x !== undefined && op === undefined) {
                            op = subtract;
                        };

                        if (x !== undefined && y !== undefined && op !== undefined) {
                            x = operate(x, y, op);
                            display.textContent = round(x, 10);
                            y = undefined;
                            op = subtract;
                        };
                    });
                    break

                case '+':
                    button.addEventListener('click', () => {
                        if (x !== undefined && op === undefined) {
                            op = add;
                        };

                        if (x !== undefined && y !== undefined && op !== undefined) {
                            x = operate(x, y, op);
                            display.textContent = round(x, 10);
                            y = undefined;
                            op = add;
                        };
                    });
                    break

                case '%':
                    button.addEventListener('click', () => {
                        if (x !== undefined && op === undefined) {
                            op = modulo;
                        };

                        if (x !== undefined && y !== undefined && op !== undefined) {
                            x = operate(x, y, op);
                            display.textContent = round(x, 10);
                            y = undefined;
                            op = modulo;
                        };
                    });
                    break

                case '.':
                    button.addEventListener('click', () => {
                        if (x === undefined && y === undefined) {
                            x = '0.';
                        } else if (x !== undefined && y === undefined && op === undefined && !x.includes('.')) {
                            x += '.';
                        } else if (x !== undefined && y === undefined && op !== undefined) {
                            y = '0.';
                        } else if (x !== undefined && y !== undefined && op !== undefined && !y.includes('.')) {
                            y += '.';
                        };

                        display.textContent = y ?? x;
                    });
                    break

                case '=':
                    button.addEventListener('click', () => {
                        if (y === 0 && op === divide) {
                            display.textContent = 'NaN';
                            x = undefined;
                            y = undefined;
                            op = undefined;
                        }

                        if (x !== undefined && y !== undefined && op !== undefined) {
                            x = operate(x, y, op);
                            display.textContent = round(x, 10);
                            y = undefined;
                            op = undefined;
                            console.log(x);
                        };
                    });
                    break

                default:
                    return
            };
        }
    }
}

const container = document.querySelector('#container');
generateButtons(container);