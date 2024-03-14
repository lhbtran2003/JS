document.getElementById("theBtn").onclick = function() {
    let data = document.getElementById("myInput").value;
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    li.textContent = data;
    ul.appendChild(li);
    document.body.appendChild(ul);
    document.getElementById("myInput").value = "";
}
