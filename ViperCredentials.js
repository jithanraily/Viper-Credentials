// Viper Credentials
// v1.2.0

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

function createPassword(passwordLength) {
    for (; selection.length < passwordLength;) {
        selection.push(`${charSet[Math.round(Math.random() * (charSet.length - 1))]}`);
    };

    const password = selection.join("");
    const output = `\nPassword: ${password}`;

    console.log(output);
};

function processOptions(args) {
    switch (args.length) {
        case 2: {
            createPassword(12);
        };
        break;
        case 3: {
            const passwordLength = Number(args[2]);

            if (!(Object.is(passwordLength, NaN))) {
                createPassword(args[2]);
            } else {
                console.log('\nERROR: Password length must be numeric!');
            };
        };
        break;
        default: {
            console.log("\nERROR: Could not generate password\nCAUSE: Unexpected argument");
        };
    };
}

processOptions(process.argv);