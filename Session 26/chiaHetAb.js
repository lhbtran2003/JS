let a;
let b;
let arrDivisorB = [];
let arrDivisorA = [];
document.getElementById("mySubmit").onclick = function() {
    a = document.getElementById("aNumber").value;
    b = document.getElementById("bNumber").value;
    
    for(let i=1; i<=a; i++) {
        if (i % b == 0) {
            arrDivisorA.push(i);
        }
    }
    // for(let i=1; i<=b; i++) {
    //     if (i % b == 0) {
    //         arrDivisorB.push(i);
    //     }
    // }
    console.log(arrDivisorA);
    // console.log(arrDivisorB);


}
