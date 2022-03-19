//girilen sayıların asal olup olmadığını kontrol etmek.
/*
let kontrol1 = 0, deger;
function sayiFonction(...sayi) {

    for (let index = 0; index < sayi.length; index++) {

        deger = sayi[index]

        for (let i = 2; i < deger; i++) {
            if (deger % i == 0) {
                kontrol1++;
            }
        }

        if (kontrol1 == 0) {
            console.log(deger + " Asaldır.")
        } else {
            console.log(deger + " Asal değildir.")
        }

        kontrol1 = 0;
    }

}

sayiFonction(7, 8, 9, 2, 3, 4, 5, 10, 12, 11, 13, 14, 15, 17, 23, 27);

//arkadaş sayıları bulma ödevi.
let arkadas1 = 97041735, arkadas2 = 97945785, kontrol2 = 0, kontrol3 = 0;

for (let index = 1; index < arkadas1; index++) {
    if (arkadas1 % index == 0) {
        kontrol2 = kontrol2 + index;
    }
}
for (let index = 1; index < arkadas2; index++) {
    if (arkadas2 % index == 0) {
        kontrol3 = kontrol3 + index;
    }
}
console.log("Sayı 1 : " + arkadas1);
console.log("Sayı 2 : " + arkadas2);

if (kontrol2 == arkadas2 && kontrol3 == arkadas1) {
    console.log(arkadas1 + " ve " + arkadas2 + " arkadaş sayılardır.")
} else {
    console.log(arkadas1 + " ve " + arkadas2 + " arkadaş sayı değildir.")
}

//1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
let dongu = 1000;

for (let index = 1; index < dongu; index++) {
    let kontrol4 = 0;
    for (let index2 = 1; index2 < index; index2++) {
        if (index % index2 == 0) {
            kontrol4 += index2;
        }
    }
    if (kontrol4 == index) {
        console.log(index + " arkadaş sayıdır.")
    }
}
*/
//1000'e kadarki tüm asal sayıları listeleyen programı yazınız.
let asalSayiSay = 100, sorgula = 0;

for (let i = 2; i < asalSayiSay; i++) {
    for (let i2 = 2; i2 < i; i2++) {
        if (i % i2 == 0) {
            sorgula++;
        }
    }
    if (sorgula == 0) {
        console.log(i + " asal sayıdır.")
    }
    sorgula = 0;
}