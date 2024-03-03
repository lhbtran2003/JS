let arr = [0,7,4,6,3,7,1,4,2,9,9];
let count = {};

for (let i = 0; i < arr.length; i++) {
    element = arr[i]
    if (count[element]) {
        count[element]++;
    } else {
        count[element] = 1;
    }
}

for (let so in count) {
    if (count[so] > 1) {
        console.log(so);
    }
}
