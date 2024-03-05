function findMaxNumbers(...arrays) {
    const maxNumbers = [];

    for (const array of arrays) {
        maxNumbers.push(Math.max(...array));
    }

    return maxNumbers;
}

console.log(findMaxNumbers([1, 2, 3], [4, 5, 6], [7, 8, 9])); // Output: [3, 6, 9]
console.log(findMaxNumbers([10, 20, 30], [40, 50, 60], [70, 80, 90])); // Output: [30, 60, 90]
