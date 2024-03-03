function timCapSo(arr, targetSum) {
    const numbersSeen = {};

    for (let i = 0; i < arr.length; i++) {
        const complement = targetSum - arr[i];
        if (numbersSeen[complement] !== undefined) {
            return [numbersSeen[complement], arr[i]];
        }
        numbersSeen[arr[i]] = arr[i];
    }

    return null;
}

const arr = [2, 4, 6, 8, 10];

const target = parseInt(prompt("Nhập vào một số nguyên:"));

const capSo = timCapSo(arr, target);
if (capSo) {
    console.log(`Cặp số trong mảng có tổng bằng ${target} là: ${capSo[0]} và ${capSo[1]}`);
} else {
    console.log(`Không tìm thấy cặp số trong mảng có tổng bằng ${target}`);
}
