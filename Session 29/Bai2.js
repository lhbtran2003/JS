function phanTuCoDoDaiLonNhat(arr) {
    let maxElement = arr[0]; // Gán phần tử đầu tiên làm phần tử có độ dài lớn nhất

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > maxElement.length) {
            maxElement = arr[i];
        }
    }

    return maxElement;
}

const arr = ["apple", "banana", "orange", "strawberry", "kiwi"];

const maxElement = phanTuCoDoDaiLonNhat(arr);
console.log("Phần tử có độ dài lớn nhất trong mảng là:", maxElement);

