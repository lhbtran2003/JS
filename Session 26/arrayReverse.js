


document.getElementById("continueBtn").onclick = function() {
    let arr = [];
    let number;
    let i = 0;
    if (i < 10) {
        number = document.getElementById("theText").value;
        number = Number(number);
    }
    arr.push(number);
    console.log(arr);
}

   
    // if(document.getElementById("theSubmit").onclick) {
    //     console.log('Array is' + arr);
    // }