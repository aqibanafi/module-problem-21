let arr = [10, 14, 87, 23, 50, 19, 60];
let sum = 0;
function arr_avg (arr) {
    for (let i = 0; i < arr.length; i++){
        // console.log(arr[i]);
        sum += arr[i];
    }
    console.log("The Sum of Elements of Array: ", sum);
    let averageOfArray = parseFloat((sum / arr.length).toFixed(1));
    console.log("The Average of Sum Element of Array: " , averageOfArray);
}


arr_avg (arr);