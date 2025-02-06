// let a = 10;
// let b = 3;
// console.log(a + b);  // 13
// console.log(a % b);  // 1
// console.log(2 ** 4); // 16 (2^4)

let x = 5;
x += 3; // x = x + 3
console.log(x); // 8

let a = 5, b = "5";
console.log(a == b);  // true (sadece değerler eşit)
// JavaScript'te == (eşittir) operatörü tip dönüşümü (type coercion) yaparak iki değeri karşılaştırır. Yani, farklı türdeki değerleri kıyaslarken önce bunları aynı türe çevirir, ardından karşılaştırma yapar.
console.log(a === b); // false (türleri farklı)
console.log(typeof a);
console.log(typeof b);

let yas = 20;
let ehliyet = true;
console.log(yas >= 18 && ehliyet); // true (İkisi de doğru)
console.log(yas < 18 || ehliyet);  // true (Bir tanesi doğru)
console.log(!ehliyet);             // false (Tersini alır)

let yas1 = 18;
let mesaj = (yas1 >= 18) ? "Ehliyet alabilirsin" : "Yaşın küçük!";
console.log(mesaj);

/*
 Aritmetik Operatörler → Matematiksel işlemler için
 Atama Operatörleri → Değişkenlere değer atamak için
 Karşılaştırma Operatörleri → Mantıksal karşılaştırmalar için
 Mantıksal Operatörler → Koşul birleştirme için
 Bitwise Operatörler → Binary işlemler için
 Koşul Operatörü → Kısa if-else işlemleri için
*/