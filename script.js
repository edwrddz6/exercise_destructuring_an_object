/*
Write a 3 functions - reverseVowelsAndReplaceL(), reverseVowelsAndReplaceO(), reverseVowelsAndReplaceS(). Apply the following rules:

Each function will receive a string, sometimes provided by other functions
Each function should reverse the vowels
Each function should console.log the reversed vowels
Use .split(), .join(), .includes() and .replace()
The input string may contain uppercase and lowercase letters, spaces, and punctuation. You should preserve the position of other characters.

reverseVowelsAndReplaceL():
Replaces all 'L's (uppercase and lowercase) with '1's (ones)
Calls reverseVowelsAndReplaceO() while providing it reverseVowelsAndReplaceL’s reversed string
reverseVowelsAndReplaceO():
Takes reverseVowelsAndReplaceL’s reversed string and reverses it AGAIN
Replaces all 'O's (uppercase and lowercase) with '0's (zeros)
Calls reverseVowelsAndReplaceS() while providing it reverseVowelsAndReplaceO’s reversed string
reverseVowelsAndReplaceS():
Replaces all 'S's (uppercase and lowercase) with '5's (fives)
Consoles and returns the final reversed string
*/

const reverseVowelsAndReplaceL = (string) => {
    const replacedString = string.replace(/[Ll]/g, '1');
    const reversedString = replacedString.split('').reverse().join('');
    
    reverseVowelsAndReplaceO(reversedString);
}

const reverseVowelsAndReplaceO = (reversedString) => {
    const replacedString = reversedString.replace(/[Oo]/g, '0');
    const reversedStringAgain = replacedString.split('').reverse().join('');

    reverseVowelsAndReplaceS(reversedStringAgain);
}

const reverseVowelsAndReplaceS = (reversedStringAgain) => {
    const lastString = reversedStringAgain.replace(/[Ss]/g, '5');
    const reversedLastString = lastString.split('').reverse().join('');
    
    console.log(reversedLastString);

    return reversedLastString;
}

const string = "Sally Cinnamon, You're My World!";
const reversedLastString = reverseVowelsAndReplaceL(string);