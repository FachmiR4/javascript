// Random Password Generator

function generatorPassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers,includeSymbols){
    lowerCase = "abcdefghijklmnopqrstuvwxyz";
    upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    numberCase = "1234567890";
    symbolCase = "!@#$%^&*?-_+=";
    length = passwordLength;
    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowerCase : "";
    allowedChars += includeUpperCase ? upperCase : "";
    allowedChars += includeNumbers ? numberCase : "";
    allowedChars += includeSymbols ? symbolCase : "";

    if(length <= 0){
            return `(password length mush be at least 1)`;
    }
    if(allowedChars.length === 0){
        return `(at least 1 set of charcter needs to be selected)`;
    }
    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
}



const passwordLength = 50;
const includeLowerCase = true;  
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;


const password = generatorPassword(passwordLength,
                                    includeLowerCase,
                                    includeUpperCase,
                                    includeNumbers,
                                    includeSymbols);

console.log(`Generated Password: ${password}`);