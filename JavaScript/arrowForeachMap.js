// Arraw Function daha kısa ve okunaklı fonksiyon yazmamızı sağlayan bir fonksiyon tanımlama yöntemidir. => (ok operatörü) kullanılarak tanımlanır.

const functionName = (param1, param2) => {
    // Fonksiyon gövdesi
    return param1 + param2;
  };
// Eğer tek bir işlem yapacaksak süslü parantez ve return kullanmamıza gerek yoktur.
const sum = (a, b) => a + b;

console.log(sum(5, 10)); // 15


// forEach()	Diziyi döngüye sokar, her eleman için bir işlem yapar fakat geriye değer döndürmez.
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(num => {
  console.log(num * 2);  // 2, 4, 6, 8, 10
});

console.log(numbers); // [1, 2, 3, 4, 5] (orijinal dizi değişmez)

// map() metodu, her eleman üzerinde işlem yapar ve yeni bir dizi döndürür.
const numbers1 = [1, 2, 3, 4, 5];

const doubled = numbers1.map(num => num * 2);

console.log(doubled);  // [2, 4, 6, 8, 10]
console.log(numbers1);  // [1, 2, 3, 4, 5] (orijinal dizi değişmez)
