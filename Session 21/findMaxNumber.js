let a;
let b;
let c;
document.getElementById("submit").onclick = function () {
    a = parseFloat(document.getElementById("aNumber").value);
    b = parseFloat(document.getElementById("bNumber").value);
    c = parseFloat(document.getElementById("cNumber").value);
    console.log(a);
    console.log(b);
    console.log(c);
    if (a > b && a > c) {
        alert(`Số lớn nhất là ${a}`);
        console.log(`Số lớn nhất là ${a}`);
     } else if (b > c && b > a) {
         alert(`Số lớn nhất là ${b}`);
         console.log(`Số lớn nhất là ${b}`);
     } else if (c > a && c > b) {
         alert(`Số lớn nhất là ${c}`);
         console.log(`Số lớn nhất là ${c}`);
     }
}

