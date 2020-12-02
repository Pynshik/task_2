let numbers = [2, 3, 5, 7, 11, 13, 17, 19];

function currentSums(numbers){
    let result = [];
    numbers.reduce(function(sum, currentValue, i) {
        return result[i] = sum + currentValue;
    },0)
    console.log(result)
}

currentSums(numbers);


let str = 'Каждый охотник желает знать, где сидит фазан.';

function firstLetters(str) {
    let array = str.split('');
    let newArray = array.filter((letter, index) => index === 0 || array[index - 1] === ' ');

    return newArray;
}

firstLetters(str);


let array = [1, 2, 3, 4, 5, 6, 7];

function changeArray(array) {
    let middle = Math.floor(array.length/2)
    if(array.length % 2 === 0) {
        let firstPart = array.splice(middle, middle);
        let secondPart = array.splice(0, middle)
        let newArray = [...firstPart, ...secondPart];
        return newArray;
    } else {
        let everage = array[middle];
        let firstPart = array.splice(middle+1, middle);
        let secondPart = array.splice(0, middle)
        let newArray = [...firstPart, everage, ...secondPart];
        return newArray;
    }
}

changeArray(array);