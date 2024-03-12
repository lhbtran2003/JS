function addRow() {
    const rowCount = document.getElementById("table-body").rows.length;

    const newRow = document.createElement("tr");

    for (let i = 1; i <= 3; i++) {
        const newCell = document.createElement("td");
        const cellText = document.createTextNode(`Cell ${i} row ${rowCount + 1}`);
        newCell.appendChild(cellText);
        newRow.appendChild(newCell);
    }

    document.getElementById("table-body").appendChild(newRow);
}
