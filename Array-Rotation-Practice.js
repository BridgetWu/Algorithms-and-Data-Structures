function arrayRotation (arr, d, n){
    var temp = new Array(n);
    let k = 0;

    for (let i = d; i < n; i++){
        temp[k] = arr[i];
        k++;
    }
    console.log(arr)
    console.log(temp)

    for (let i = 0; i < d; i++) {
        temp[k] = arr[i];
        k++;
    }
    console.log(arr)
    console.log(temp)
}

let arr = [ 1, 2, 3, 4, 5, 6, 7 ];
let n = arr.length;
let d = 2; //number of times rotating the array
arrayRotation(arr, d, n);