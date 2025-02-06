let i = 1;

do {
    console.log("Sayaç:", i);
    i++;  // Sayaç değerini artır
} while (i <= 5);


let x = 10;

while (x < 5) {
    console.log("Bu mesaj asla yazdırılmayacak.");
}
// (Boş, çünkü koşul en başta yanlış.)

let y = 10;

do {
    console.log("Koşul yanlış olsa bile bu mesaj yazdırılacak.");
} while (y < 5);
// Koşul yanlış olsa bile bu mesaj yazdırılacak.

let password;
do {
    password = prompt("Şifreyi girin:");
} while (password !== "1234");

console.log("Giriş başarılı!");
// Bu kod, kullanıcı doğru şifreyi girene kadar döngüyü çalıştırır.

let option;

do {
    console.log("1 - Başlat");
    console.log("2 - Ayarlar");
    console.log("3 - Çıkış");
    option = prompt("Bir seçenek girin (1-3):");
} while (option !== "3");

console.log("Programdan çıkılıyor...");
// Bu kod, kullanıcı 3. seçeneği seçene kadar menüyü gösterir.

// do...while en az 1 kez çalışır.
// Koşul sağlanmazsa bile do bloğu en az bir defa çalıştırılır.
// Kullanıcıdan giriş alma, rastgele sayı üretme gibi durumlarda kullanışlıdır.
