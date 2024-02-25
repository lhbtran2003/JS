let height;
let weight;


document.getElementById("yourSubmit").onclick = function() {
    height = document.getElementById("yourHeight").value;
    weight = document.getElementById("yourWeight").value;
    console.log(height);
    console.log(weight);


let bmi = weight / (height **2);


if (bmi < 18.5) {
   document.getElementById("myH3").textContent = `Bạn thuộc dạng gầy (yếu)`;
} else if (bmi >= 18.5 && bmi < 24.9) {
document.getElementById("myH3").textContent = 'Bạn thuộc dạng bình thường';
} else if (bmi == 25) {
    document.getElementById("myH3").textContent = 'Bạn thuộc dạng thừa cân';
} else if (bmi > 25 && bmi <= 29.9) {
   document.getElementById("myH3").textContent = 'Bạn thuộc dạng tiền béo phì';
} else if (bmi >= 30 && bmi <= 34.9) {
    document.getElementById("myH3").textContent = 'Bạn thuộc dạng béo phì độ I';
} else if (bmi >= 35 && bmi <= 39.9) {
    document.getElementById("myH3").textContent = 'Bạn thuộc dạng béo phì độ II';
} else {
    document.getElementById("myH3").textContent = 'Bạn thuộc dạng béo phì độ III';
}

}