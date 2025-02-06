// Diziler (Array), birden fazla veriyi tek bir değişkende saklamamıza olanak tanır.
// Köşeli Parantez ([]) ile Tanımlama
let fruits = ["Elma", "Armut", "Muz", "Çilek"];
console.log(fruits); 

// new Array() Kullanarak Tanımlama
let numbers = new Array(10, 20, 30, 40);
console.log(numbers);
//  Genellikle [] kullanılır, çünkü daha kısa ve okunaklıdır.

let fruits1 = ["Elma", "Armut", "Muz"];

console.log(fruits1[0]); // "Elma"
console.log(fruits1[1]); // "Armut"
console.log(fruits1[2]); // "Muz"

fruits1[1] = "Karpuz"; // "Armut" yerine "Karpuz" yazılır
console.log(fruits); 

let numbers1= [10, 20, 30, 40, 50];
console.log(numbers1.length); // 5


let colors = ["Kırmızı", "Mavi"];
// push() – Dizinin Sonuna Eleman Ekleme
colors.push("Yeşil");
console.log(colors);
console.log(colors[2]); // "Yeşil"

// pop() – Dizinin Sonundan Eleman Silme
colors.pop();
console.log(colors);

// unshift() – Dizinin Başına Eleman Ekleme
colors.unshift("Sarı");
console.log(colors);

// shift() – Dizinin Başından Eleman Silme
colors.shift();
console.log(colors);


let numbers2 = [10, 20, 30, 40];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers2[i]);
}

// Yukarıdakiler gibi daha bir sürü kullanabileceğimiz kısa yollar mevcut.
// push()	Diziye sona eleman ekler
// pop()	Dizinin son elemanını siler
// unshift()	Dizinin başına eleman ekler
// shift()	Dizinin başındaki elemanı siler
// indexOf()	Elemanın indeksini döndürür
// includes()	Eleman dizide var mı kontrol eder
// slice()	Dizinin bir bölümünü alır
// splice()	Eleman ekler veya siler
// join()	Diziyi stringe çevirir
// reverse()	Diziyi ters çevirir
// sort()	Diziyi sıralar
// concat()	Dizileri birleştirir
// Bunları deneyip test edebilirsiniz.
