let a;
let b;
let c;

document.getElementById("mySubmit").onclick = function() {
    a = parseFloat(document.getElementById("aNumber").value);
    b = parseFloat(document.getElementById("bNumber").value);
    c = parseFloat(document.getElementById("cNumber").value);

    let delta = b ** 2 - 4 * a * c;
    if (delta > 0) {
        let x1 = (-b + Math.sqrt(delta)) / 2;
        let x2 = (-b + Math.sqrt(delta)) / 2;
        console.log(`Nghiem x1 = ${x1}`);
        console.log(`Nghiem x2 = ${x2}`);
    }
    else if (delta = 0) {
        let x1 = -b / (2 * a);
        let x2 = -b / (2 * a);
        console.log(`Nghiem x1 = ${x1}`);
        console.log(`Nghiem x2 = ${x2}`);
    }
    else {
        console.log(`Phuong trinh vo nghiem`);
    }
}