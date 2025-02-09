// JavaScript’te Object (Nesne) yapısı, anahtar-değer (key-value) çiftlerinden oluşan veri yapılarıdır. Nesneler, değişkenler, fonksiyonlar ve diğer nesneleri içerebilir.
// Bir nesne {} süslü parantezler içinde tanımlanır. Anahtarlar (key) genellikle string veya symbol türündedir, değerler (value) ise herhangi bir tür olabilir (string, number, boolean, array, function, başka bir nesne vb.).

let person = {
    name: "Ahmet",
    age: 25,
    isStudent: true
  };
  
  console.log(person.name);  // "Ahmet"
  console.log(person["age"]); // 25

  
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    start: function() {
    console.log(this.brand + " çalıştırıldı.");
    }
  };
  
  car.start(); // "Toyota çalıştırıldı."


  let student = {
    name: "Zeynep",
    school: {
      name: "ABC Üniversitesi",
      department: "Bilgisayar Mühendisliği"
    }
  };
  
  console.log(student.school.name); // "ABC Üniversitesi"

  
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  let person1 = new Person("Mehmet", 30);
  let person2 = new Person("Ayşe", 22);
  
  console.log(person1.name); // "Mehmet"
  console.log(person2.age);  // 22
  
  