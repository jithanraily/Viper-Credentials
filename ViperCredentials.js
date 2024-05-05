// Viper Credentials
// v1.1.0

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

const selection = [];
const preferredLength = process.argv[2];

function generatePass(args) {
    switch (args.length) {
        case 2: {
            console.log("Password length not specified!");
        };
        break;
        case 3: {
            for (; selection.length < args[2];) {
                selection.push(`${charSet[Math.round(Math.random() * (charSet.length - 1))]}`);
            };
        
            password = selection.join("");
            console.log(password);
        }
        break;
    };
};

generatePass(process.argv);