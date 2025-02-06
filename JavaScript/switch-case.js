let day = 3;

switch (day) {
    case 1:
        console.log("Pazartesi");
        break;
    case 2:
        console.log("Salı");
        break;
    case 3:
        console.log("Çarşamba");
        break;
    case 4:
        console.log("Perşembe");
        break;
    case 5:
        console.log("Cuma");
        break;
    case 6:
        console.log("Cumartesi");
        break;
    case 7:
        console.log("Pazar");
        break;
    default:
        console.log("Geçersiz gün numarası!");
}

/*
switch (day): day değişkenine göre durumu kontrol eder.
case blokları, değişkenin alabileceği değerlere göre çalışır.
break: Koşul sağlandığında, kodun diğer case bloklarına devam etmesini engeller.
default: Hiçbir case uyuşmazsa çalışır.
*/

let fruit = "elma";

switch (fruit) {
    case "elma":
        console.log("Elma seçtiniz.");
    case "armut":
        console.log("Armut seçtiniz.");
        break;
    case "muz":
        console.log("Muz seçtiniz.");
        break;
    default:
        console.log("Geçersiz meyve.");
}
// Elma seçtiniz. Armut seçtiniz.

let grade = "A";

switch (grade) {
    case "A":
    case "B":
    case "C":
        console.log("Geçtiniz!");
        break;
    case "D":
    case "F":
        console.log("Kaldınız!");
        break;
    default:
        console.log("Geçersiz not.");
}

let color = "kırmızı";

if (color === "kırmızı") {
    console.log("Renk kırmızı.");
} else if (color === "mavi") {
    console.log("Renk mavi.");
} else {
    console.log("Bilinmeyen renk.");
}

switch (color) {
    case "kırmızı":
        console.log("Renk kırmızı.");
        break;
    case "mavi":
        console.log("Renk mavi.");
        break;
    default:
        console.log("Bilinmeyen renk.");
}

// if-else, karmaşık karşılaştırmalar (büyüktür/küçüktür >, <, &&, || gibi) gerektirdiğinde daha iyidir.
// switch, sabit değerleri kontrol ederken daha okunaklıdır.