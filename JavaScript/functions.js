// İki tür fonksiyonumuz vardır. Bunlar parametre alan ve almayan olarak ayrılırlar.
// Ayrıca geri değer döndüren ve döndürmeyen fonksiyonlar vardır.
function merhaba() {
    console.log("Merhaba, Dünya!");
}

// Fonksiyonu çağırma
merhaba();


function selamVer(isim) {
    console.log("Merhaba, " + isim + "!");
}

selamVer("Ali");
selamVer("Ayşe");


function kareAl(sayi) {
    return sayi * sayi;
}

let sonuc = kareAl(5);
console.log(sonuc); 

// fonksiyon içinde fonksiyon?
function disFonksiyon() {
    console.log("Dış Fonksiyon");

    function icFonksiyon() {
        console.log("İç Fonksiyon");
    }

    icFonksiyon();
}

disFonksiyon();

// Fonksiyon Türü	                         Açıklama
// Normal Fonksiyon	                        function merhaba() {}
// Parametreli Fonksiyon	                function topla(a, b) {}
// Return Döndüren Fonksiyon	            return ile değer döndürür
// Anonim Fonksiyon	                        let isim = function() {}
// Arrow Function	                        const isim = () => {}
// Varsayılan Parametreli	                function isim(param = "default") {}
// Rest Parametre (...)	                    function isim(...parametreler) {}