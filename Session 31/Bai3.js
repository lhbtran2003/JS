function endsWith(str, target) {
    return str.endsWith(target);
}

console.log(endsWith('Hello world', 'world')); // Output: true
console.log(endsWith('Hello world', 'World')); // Output: false
console.log(endsWith('JavaScript is awesome', 'awesome')); // Output: true
console.log(endsWith('JavaScript is awesome', 'amazing')); // Output: false
