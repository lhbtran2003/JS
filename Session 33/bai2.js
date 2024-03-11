class listContact {
    constructor(name, sdt, email){
        this.name = name;
        this.sdt = sdt;
        this.email = email;
    }
    active(){
        console.log(this.name);
        console.log(this.sdt);
        console.log(this.email);
    }
}
let contact=[
     new listContact('Bảo Trân', '0523657457', 'lhbtran2003@gmail.com' ),
     new listContact('Như Ngọc', '0383009171', 'nhungoc@gmail.com'),
     new listContact('Việt Hoàng', '0123456789', 'hoang@gmail.com')
];

for (let i=0; i<contact.length; i++){
    contact[i].active();
}
