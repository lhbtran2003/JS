const info = document.getElementById("infoForm");
const displayInfo = document.getElementById('displayInfo');

const luuInfo = JSON.parse(localStorage.getItem('infoPerson'));

if (luuInfo) {
    displayInfo.innerHTML = `Họ tên cầu thủ: ${luuInfo.name}<br>`;
}
else{localStorage.clear();}

info.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    
    const infoPerson = {
        name: name,
    };

    localStorage.setItem('infoPerson', JSON.stringify(infoPerson)); 

    displayInfo.innerHTML =  `Họ tên cầu thủ: ${name}`;

    info.reset();
})
