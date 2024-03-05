function longestWord(str) {
    const words = str.split(' ');
    
    let maxLength = 0;
    let longestWord = '';

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
            longestWord = words[i];
        }
    }

    return `${longestWord} (${maxLength} ký tự)`;
}

const str = "Hôm nay là một ngày đẹp trời";
console.log(longestWord(str)); // Output: "ngày (4 ký tự)"
