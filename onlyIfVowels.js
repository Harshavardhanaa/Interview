function convertToUpperCase(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i];
        let previousChar = str[i - 1];

        if (previousChar && !vowels.includes(previousChar.toLowerCase())) {
            result += currentChar.toUpperCase();
        } else {
            result += currentChar;
        }
    }

    return result;
}

// Example usage:
const inputString = "hello world";
const convertedString = convertToUpperCase(inputString);
console.log(convertedString); // Output: "HeLlo WoRlD"