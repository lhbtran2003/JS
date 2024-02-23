let a;
let b;
let c;
document.getElementById("submit").onclick = function () {
    a = parseFloat(document.getElementById("aNumber").value);
    b = parseFloat(document.getElementById("bNumber").value);
    c = parseFloat(document.getElementById("cNumber").value);

    let numbers = [a,b,c];
    numbers.sort((x,y) => x - y);

    console.log(`Thứ tự tăng dần là:`);
    for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
}

