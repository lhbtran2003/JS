document.getElementById("theBtn").onclick = function() {
    let input = document.getElementById("myInput");
    let inputValue = input.value;
    if (inputValue.length > 10) {
        alert('Câu trả lời không hợp lệ, vui lòng nhập lại!');
        // Xóa dữ liệu trong ô text
        input.value = "";
    }
    console.log(inputValue);
}
