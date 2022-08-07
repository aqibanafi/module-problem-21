let arr = [20, 18, 37, 11, 9, 54, 36];
let result;
let maxNumber = arr[0];
function find_max_number (arr) {
    for (i = 1; i < 8; i++){
        if (maxNumber < arr[i]){
            maxNumber = arr[i];
        }
    }
    return maxNumber;
}

let output = find_max_number (arr);
console.log(output);