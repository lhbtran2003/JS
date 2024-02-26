document.getElementById("mySubmit").onclick = function(){
    let number = Number(document.getElementById("theNumber").value);
    
    
    let reverse = 0;
    while (number > 0) {
        reverse = number%10 + reverse*10 ;
        number = Math.floor(number / 10);
    }
    console.log(reverse);
    document.getElementById("myH1").textContent = 'Số đảo ngược là ' + reverse + ' đó quý vị';
}