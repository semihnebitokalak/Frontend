for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// Dış döngü (i) → 1'den 3'e kadar döner.
// İç döngü (j) → Her i değeri için 3 kez döner.

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;  // Döngü 5'te durur
    }
    console.log(i);
}


let person = { name: "Ali", age: 25, city: "İstanbul" };

for (let key in person) {
    console.log(key + ":", person[key]);
}


let cars = ["BMW", "Audi", "Mercedes"];

for (let car of cars) {
    console.log(car);
}


let fruits = ["Elma", "Armut", "Muz", "Çilek"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
