function addItem() {
    var inputValue = document.getElementById("inputBox").value;

    var newItem = document.createElement("li");

    newItem.textContent = inputValue;

    document.getElementById("listContainer").appendChild(newItem);

    document.getElementById("inputBox").value = "";
}