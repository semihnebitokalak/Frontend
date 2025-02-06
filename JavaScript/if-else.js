let age = 18;

if (age >= 18) {
    console.log("Ehliyet alabilirsiniz.");
}

let age1 = 16;

if (age1 >= 18) {
    console.log("Ehliyet alabilirsiniz.");
} else {
    console.log("Ehliyet alamazsınız.");
}

let score = 75;

if (score >= 90) {
    console.log("Harf notunuz: A");
} else if (score >= 80) {
    console.log("Harf notunuz: B");
} else if (score >= 70) {
    console.log("Harf notunuz: C");
} else {
    console.log("Harf notunuz: F");
}

let age2 = 20;
let message = age2 >= 18 ? "Ehliyet alabilirsiniz." : "Ehliyet alamazsınız.";
console.log(message);

let isStudent = true;
let age3 = 20;

if (isStudent && age3 >= 18) {
    console.log("Öğrenci indirimi alabilirsiniz.");
} else {
    console.log("Öğrenci indirimi alamazsınız.");
}
// && operatörü: Her iki koşul da doğruysa blok çalışır.
// || operatörü: En az bir koşul doğruysa blok çalışır.