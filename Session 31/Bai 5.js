function chunkArrayInGroups(arr, n) {
    const result = [];

    for (let i = 0; i < arr.length; i += n) {
        result.push(arr.slice(i, i + n));
    }

    return result;
}

console.log(chunkArrayInGroups([1, 2, 3, 4, 5, 6, 7, 8], 3));

console.log(chunkArrayInGroups(['a', 'b', 'c', 'd', 'e'], 2));
