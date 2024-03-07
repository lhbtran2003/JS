function truncate(str, n) {
    if (str.length <= n) {
        return str;
    }

    return str.slice(0, n) + '...';
}

console.log(truncate('Hello world', 5)); // Output: "Hello..."
console.log(truncate('Hello', 10)); // Output: "Hello"
console.log(truncate('JavaScript is awesome', 15)); // Output: "JavaScript is..."
console.log(truncate('This is a long string', 7)); // Output: "This is..."
