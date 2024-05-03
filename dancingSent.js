function generateDancingSentence(input) {
    return input.split('').map((char, index) => index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join('');
}

// Example usage
let inputString = "This is a dancing sentence!";
let dancingSentence = generateDancingSentence(inputString);
console.log(dancingSentence);





function alternateCase(input) {
    return input.split('').map((char, index) => index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()).join('');
}

// Example usage
let inputString = "abcd";
let alternatingString = alternateCase(inputString);
console.log(alternatingString); // Output: "aBcD"
