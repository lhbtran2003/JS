document.getElementById("way1").onclick = function() {
    const textInput = document.getElementById("textInput").value;
    document.getElementById("displayDiv").textContent = textInput;
}

document.getElementById("way2").onclick = function() {
    const textInput = document.getElementById("textInput").value;
    document.getElementById("displayDiv").innerHTML = textInput;
}
