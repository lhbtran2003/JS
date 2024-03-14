document.getElementById("myBtn").onclick = function() {
    let stdID = document.getElementById("stdID").value;
    let stdName = document.getElementById("stdName").value;

    let stdAge = document.getElementById("stdAge").value;
    let stdPhone = document.getElementById("stdPhone").value;
    let stdEmail = document.getElementById("stdEmail").value;

    if(stdName.length < 6 || stdName.trim()==="") {
        alert("Name phải có ít nhất 6 kí tự, vui lòng nhập lại!");
        document.getElementById("stdName").value = "";
    }
    if(stdAge >= 18) {
        alert("Tuổi ko hợp lệ, vui lòng nhập lớn hơn hoặc bằng 18");
        document.getElementById("stdAge").value = "";
    }
    if(stdPhone.charAt(0) !== "0" && stdPhone.charAt(1) !== "9" && stdPhone.length !== "10"){
        alert("Vui lòng nhập lại");
        document.getElementById("stdPhone").value = "";
    }
    if(!email.includes('@')){
        alert("Vui lòng nhập lại");
        document.getElementById("stdEmail").value = "";
    }
}