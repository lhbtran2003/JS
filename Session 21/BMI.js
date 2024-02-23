let height;
let weight;


document.getElementById("yourSubmit").onclick = function() {
    height = document.getElementById("yourHeight").value;
    weight = document.getElementById("yourWeight").value;
    console.log(height);
    console.log(weight);
}

let bmi = weight / (height **2);


if (bmi < 18.5) {
    alert('Bạn thuộc dạng cân nặng thấp(gầy)')
} else if (bmi >= 18.5 && Bmi < 24.9) {
    alert('Bạn thuộc dạng bình thường')
} else if (bmi == 25) {
    alert('Bạn thuộc dạng thừa cân')
} else if (bmi > 25 && Bmi <= 29.9) {
    alert('Bạn thuộc dạng tiền béo phì')
} else if (bmi >= 30 && Bmi <= 34.9) {
    alert ('Bạn thuộc dạng béo phì độ I')
} else if (bmi >= 35 && Bmi <= 39.9) {
    alert('Bạn thuộc dạng béo phì độ II')
} else {
    alert('Bạn thuộc dạng béo phì độ III')
}

