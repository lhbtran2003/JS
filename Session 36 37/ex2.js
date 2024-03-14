const btn = document.getElementById("theBtn");
btn.onclick = function(){
    if(btn.textContent === "ON") {
        btn.textContent = "OFF";
    }
    else {
        btn.textContent = "ON";
    }
}