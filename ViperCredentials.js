// Viper Credentials
// v1.0.0

let password = "";

const charSet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+',
    '=', '{', '}', '[', ']', '|', ':', ';', '"', "'", '<', '>', ',',
    '.', '?', '/', '`', '~', '1', '2', '3', '4', '5', '6', '7', '8',
    '9', '0'
];
const passSet = [];
const preferredLength = process.argv[2];

function generatePass(passwordLength) {
    for (; passSet.length < passwordLength;) {
        passSet.push(`${charSet[Math.round(Math.random() * (charSet.length - 1))]}`);
    };

    password = passSet.join("");
};

generatePass(preferredLength);
console.log(password);