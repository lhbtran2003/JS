class Human {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    display() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Address:", this.address);
    }
}

let human = new Human("John", 30, "123 Main St");
human.display();

human.birthDate = "1994-01-01";
delete human.age;

console.log("\nAfter adding birth date and removing age:");
console.log("Name:", human.name);
console.log("Address:", human.address);
console.log("Birth Date:", human.birthDate);
