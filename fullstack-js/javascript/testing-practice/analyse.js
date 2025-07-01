function analyseArray(arr) {
    const length = getLength(arr);

    if (length === 0) {
        return {
            average: null,
            min: null,
            max: null,
            length: 0
        };
    }

    return {
        average: getAverage(arr),
        min: getMinimum(arr),
        max: getMaximum(arr),
        length
    }

}

function getAverage(arr) {
    const sum = arr.reduce((prev, curr) => prev + curr, 0);
    const length = getLength(arr);

    return parseInt(sum / length);
}

function getMinimum(arr) {
    let min = Number.POSITIVE_INFINITY;

    for (let number of arr) {
        if (number < min) min = number 
    }

    return min;
}

function getMaximum(arr) {
    let max = Number.NEGATIVE_INFINITY;

    for (let number of arr) {
        if (number > max) max = number;
    }

    return max;
}

function getLength(arr) {
    let count = 0;

    for (let number of arr) {
        count++;
    }

    return count;
}

module.exports = analyseArray;