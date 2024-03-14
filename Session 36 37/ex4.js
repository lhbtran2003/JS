function calculateSum1() {
    const input1 = parseFloat(document.getElementById("input1").value);
    const input2 = parseFloat(document.getElementById("input2").value);
    const sum = input1 + input2;
    document.getElementById("result1").value = sum;
}

function calculateSum2() {
    const input1 = parseFloat(document.getElementById("input1").value);
    const input2 = parseFloat(document.getElementById("input2").value); 
    document.getElementById("result2").value = input1 + input2;
}
