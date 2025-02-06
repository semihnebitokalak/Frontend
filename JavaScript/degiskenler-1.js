/* Değişken Nedir?
Değişken (variable), program içinde verileri saklamak için kullanılan bir isimlendirilmiş alandır. JavaScript’te değişkenler, bir değeri bellekte tutmamızı ve bu değeri daha sonra kullanmamızı sağlar.

Neden Kullanırız?
Verileri saklamak: Kullanıcının girdiği bir isim, yaş, skor gibi değerleri saklayabiliriz.
Kod tekrarını azaltmak: Aynı değeri birden fazla yerde kullanırken her seferinde yazmak yerine bir değişkene atayabiliriz.
Dinamik işlemler yapmak: Değişkenler sayesinde veriler üzerinde hesaplamalar yapabiliriz.
*/
// Aşağıda değişken kavramına ele alalım;
// ad = "Mehmet";
// soyad = "Kara";
// yas = 30;
// console.log(ad);
// console.log(soyad);
// console.log(yas);

// JavaScript’te değişken tanımlamak için var, let ve const anahtar kelimeleri kullanılır:
// var eski yöntem, artık çok fazla kullanılmıyor.
// Eskiden değişken tanımlamak için kullanılıyordu ama bazı dezavantajları var. Blok kapsamını desteklemediği için genellikle let ve const kullanılır.
// var isim = "Ahmet";
// console.log(isim); // Ahmet
// isim = "Mehmet";
// console.log(isim); // Mehmet

// let (Günümüzde en çok tercih edilen yöntem)
// Değiştirilebilir değişkenler oluşturmak için kullanılır.
let yas = 25;
yas = 26; // Değer değiştirilebilir
console.log(yas); // 26

// const (Sabit değişkenler için)
// Eğer bir değişkenin değerinin değişmesini istemiyorsak const kullanırız.
const pi = 3.14;
// pi = 3.1415; // ❌ Hata! const değiştirilemez
console.log(pi);

let ad = "Mehmet"; // String
let yas1 = 30; // Number
console.log("Merhaba, benim adım " + ad + " ve yaşım " + yas1);
console.log(typeof ad); // string
console.log(typeof yas1); // number

