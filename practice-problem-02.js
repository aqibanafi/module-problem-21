let lowestNumber;
function lowest_number (num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        lowestNumber = num1;
    } else if (num2 < num1 && num2 < num3 ) {
        lowestNumber = num2;
    } else {
        lowestNumber = num3;
    }
    return lowestNumber;
}

let result = lowest_number (50, 90, 20);
console.log(result);