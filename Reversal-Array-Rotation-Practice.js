function reverseArray(arr, start, end){
    while (start < end){
        var temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}
//reverseArray is essentially switching
//ex[1, 2, 3, 4] -> [4, 2, 3, 1] 4 and 1 switch -> [4, 3, 2, 1] 2 and 3 switch

function leftRotate(arr, d, n){
    reverseArray(arr, 0, d - 1);
    //[2, 1, 3, 4, 5, 6, 7]
    reverseArray(arr, d, n - 1);
    //[2, 1, 7, 4, 5, 6, 3]
    //[2, 1, 7, 6, 5, 4, 3]
    reverseArray(arr, 0, n - 1);
    //[3, 1, 7, 6, 5, 4, 2]
    //[3, 4, 7, 6, 5, 1, 2]
    //[3, 4, 5, 6, 7, 1, 2]
}

function printArr(size){
    for (i = 0; i < size; i++){
        console.log(arr[i]);
    }
}

let arr = [ 1, 2, 3, 4, 5, 6, 7 ];
let n = arr.length;
let d = 2; //number of times rotating the array

leftRotate(arr, d, n);
printArr(n);
