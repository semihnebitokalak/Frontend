// String Tanımlama
let str1 = "Merhaba";
let str2 = 'Dünya';
let str3 = `JavaScript`;

// Template Literals (Değişken içerebilir)
let name = "Semih";
let greeting = `Merhaba, ${name}!`; 
console.log(greeting); // Merhaba, Semih!

// String Uzunluğu Bulma
let text = "JavaScript";
console.log(text.length); // 10

// Büyük/Küçük Harfe Çevirme
let msg = "Merhaba Dünya";
console.log(msg.toUpperCase()); // "MERHABA DÜNYA"
console.log(msg.toLowerCase()); // "merhaba dünya"

// String Birleştirme
let str4 = "Hello";
let str5 = "World";
console.log(str4 + " " + str5);  // "Hello World"
console.log(str4.concat(" ", str5));  // "Hello World"
//concat() Metodu Nedir?
// JavaScript’te concat() metodu, bir veya birden fazla string'i birleştirerek yeni bir string oluşturur. Mevcut string’i değiştirmez, yeni bir string döndürür.
// concat() yerine genellikle + operatörü kullanılır çünkü daha kısa ve pratiktir.
// Ancak çok sayıda string birleştirirken concat() daha okunaklı olabilir.

// String İçinde Arama
let sentence = "JavaScript öğrenmek çok eğlenceli!";
console.log(sentence.indexOf("öğrenmek")); // 11 (Bulduğu ilk konumu döner)
console.log(sentence.includes("çok")); // true (Kelime içeriyor mu?)
console.log(sentence.startsWith("Java")); // true (Bu kelimeyle mi başlıyor?)
console.log(sentence.endsWith("!")); // true (Bu karakterle mi bitiyor?)

//  Parçalama (Substring & Slice)
let word = "JavaScript";
console.log(word.slice(0, 4)); // "Java"
console.log(word.substring(4, 10)); // "Script"

// Boşlukları Silme (trim)
// let text = "   Merhaba   ";
// console.log(text.trim()); // "Merhaba" (Baş ve sondaki boşlukları siler)
// console.log(text.trimStart()); // "Merhaba   " (Sadece baştaki boşlukları siler)
// console.log(text.trimEnd()); // "   Merhaba" (Sadece sondaki boşlukları siler)
