let arr = [20, 18, 37, 11, 9, 54, 36];
let result;
let minNumber = arr[0];
function find_min_number (arr) {
    for (i = 1; i < 8; i++){
        if (minNumber > arr[i]){
            minNumber = arr[i];
        }
    }
    return minNumber;
}

let output = find_min_number (arr);
console.log(output);