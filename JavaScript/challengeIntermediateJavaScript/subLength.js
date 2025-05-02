/*
Write a function subLength() that takes 2 parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. If there are less than 2 or more than 2 occurrences of the character the function should return 0.

Examples:

subLength('Saturday', 'a'); // returns 6
subLength('summer', 'm'); // returns 2
subLength('digitize', 'i'); // returns 0
subLength('cheesecake', 'k'); // returns 0

*/

function subLength (arr, letter) {
    let count = [];
    for (let i=0 ; i < arr.length ; i++){
        if (arr[i] === letter){
            count.push(i);
            if(count.length > 2){
                return 0;
            }
        }
    } if (count.length === 2) {
        return count[1] - count[0] + 1;
    } else {
        return 0;
    }
}

console.log(subLength('Saturday', 'a')); // returns 6
console.log(subLength('summer', 'm')); // returns 2
console.log(subLength('digitize', 'i')); // returns 0
console.log(subLength('cheesecake', 'k')); // returns 0
