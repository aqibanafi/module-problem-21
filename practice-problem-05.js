let arr = [20, 18, 37, 11, 9, 54, 36];
let result;
let maxNumber = arr[0];
let secondMaxNumber = arr[0];
function find_max_number (arr) {
    for (i = 1; i < 8; i++){
        if (maxNumber < arr[i]){
            maxNumber = arr[i];
        }
    }
    let maxNumberPosition = arr.indexOf(maxNumber)
    console.log(maxNumberPosition);
    for (i = 1; i < 8; i++) {
        if (secondMaxNumber < arr[i] && arr[i] != arr[maxNumberPosition]) {
            secondMaxNumber = arr[i];
        }
    }
    return secondMaxNumber;
}

let output = find_max_number (arr);
console.log(output);