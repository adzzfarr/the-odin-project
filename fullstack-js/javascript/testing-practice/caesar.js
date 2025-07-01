function caesarCipher(string, shift) {
    const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const uppercase = [...lowercase].map((letter) => letter.toUpperCase());

    let cipher = '';

    for (let i = 0; i < string.length; i++) {
        const char = string[i];

        if (isLetter(char)) {
            if (isUpperCase(char)) {
                const index = uppercase.findIndex((elem) => elem === char);
                const newIndex = (index + shift) % 26;
                cipher += uppercase[newIndex];
            } else {
                const index = lowercase.findIndex((elem) => elem === char);
                const newIndex = (index + shift) % 26;
                cipher += lowercase[newIndex];
            }
        } else {
            cipher += char;
        }
    }

    return cipher;
}

function isLetter(char) {
    return char.match(/[A-Z|a-z]/i);
}

function isUpperCase(letter) {
    return letter === letter.toUpperCase();
}

caesarCipher('', 1)

module.exports = caesarCipher;