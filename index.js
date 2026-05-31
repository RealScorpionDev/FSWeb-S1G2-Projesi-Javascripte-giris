/* Görev 1: Isınalım Biraz :) */

/* TÜM CEVAPLARINI BİR FUNCTION İÇİNDE VERDİĞİNİZ EMİN OL (GÖREV 1D - GÖREV 6). AKSİ TAKTİRDE, OTOMATİK TEST SİSTEMİ ÇALIŞMAYACAKTIR. */

// Görev 1a, 1b ve 1c puanlamaya dahil değildir

let surucuYasi = 20;
console.log(surucuYasi > 18);

let birinciDeger = 10;
let ikinciDeger = 5;

if (birinciDeger > ikinciDeger) {
  birinciDeger = 20;
}

console.log(birinciDeger);

let stringDeger = "1999";
let numberDeger = Number(stringDeger);

console.log(numberDeger);

/*
Görev 1d - Çarpma
*/

function carpma(a, b) {
  return a * b;
}

/* Görev 2 : Köpeğin Yaşı */

function kopeginYasi(yas) {
  return yas * 7;
}

/* Görev 3 */

function oyun(oyuncu, bilgisayar) {
  if (oyuncu === bilgisayar) {
    return "Beraberlik";
  }

  if (
    (oyuncu === "Makas" && bilgisayar === "Kağıt") ||
    (oyuncu === "Kağıt" && bilgisayar === "Taş") ||
    (oyuncu === "Taş" && bilgisayar === "Makas")
  ) {
    return "Kazandın!";
  }

  return "Kaybettin!";
}

function bilgisayarinSecimi() {
  const rastgele = Math.random();

  if (rastgele < 1 / 3) {
    return "Taş";
  } else if (rastgele < 2 / 3) {
    return "Kağıt";
  } else {
    return "Makas";
  }
}

/* Görev 4 : Metrik Dönüştürücü */

function milDonusturucu(kilometre) {
  return kilometre * 0.621371;
}

function feetDonusturucu(santimetre) {
  return santimetre * 0.0328084;
}

/* Görev 5 : 5 küçük maymun yatakta zıplamış şarkısı */

function cocukSarkisi(sayi) {
  return `${sayi} küçük maymun yatakta zıplamış, biri düşüp başını çarpmış, Anne doktoru aramış, Doktor çok kızmış: Bir daha yatakta zıplamak yok!`;
}

for (let i = 5; i >= 1; i--) {
  console.log(cocukSarkisi(i));
}

/* Görev 6 : Not Hesaplayıcı */

function notHesapla(not) {
  if (not >= 90) {
    return "A aldın";
  }

  if (not >= 80) {
    return "B aldın";
  }

  if (not >= 70) {
    return "C aldın";
  }

  if (not >= 60) {
    return "D aldın";
  }

  return "F aldın";
}

/* Bonus Çalışma: Sesli harf sayacı */

function sesliHarfSayaci(metin) {
  const sesliHarfler = "aeıioöuüAEIİOÖUÜ";
  let sayac = 0;

  for (let harf of metin) {
    if (sesliHarfler.includes(harf)) {
      sayac++;
    }
  }

  return sayac;
}

/* Lütfen bu satırın alt tarafını değiştirmeyin */
function sa() {
  console.log("Kodlar çalışıyor");
  return "as";
}
sa();
/* Bu satırdan sonrasını değiştirmeyin */
module.exports = {
  sa,
  carpma,
  kopeginYasi,
  oyun,
  milDonusturucu,
  feetDonusturucu,
  cocukSarkisi,
  notHesapla,
};