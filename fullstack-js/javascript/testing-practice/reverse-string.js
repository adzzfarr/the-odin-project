function reverseString(string) {
    const length = string.length;
    let reversed = "";

    for (let i = length - 1; i >= 0; i--) {
        reversed += string[i];
    }

    return reversed;
}

module.exports = reverseString;