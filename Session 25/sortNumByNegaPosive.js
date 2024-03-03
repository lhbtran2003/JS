let  = arr[1, -2, 3, -4, 5, -6, 7, -8, 9];
let negativeArray = [];
let positiveArray = [];
for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
        negativeArray.push(mang[i]);
    } else {
        positiveArray.push(mang[i]);
    }
}

for (let i = 0; i < positiveArray.length; i++) {
    negativeArray.push(positiveArray[i]);
}

console.log(negativeArray);
