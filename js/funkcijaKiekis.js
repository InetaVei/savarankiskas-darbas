// /* Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
// priima vieną kintamąjį
// jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
// priešingu atveju, funkcija tęsia darbą
// į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
// gražina skaitmenų kiekį */


function skaitmenuKiekisSkaiciuje (number) {
   let text = number.toString(),
    size = text.length;

    if (typeof number !== 'number') {
     return 'Netinkamo tipo reiksme.';
    } 

    if (isFinite(number) === false) {
    return 'Netinkama reiksme (turi buti normalus skaicius).';
    }

    if (number % 1 !== 0) {
    size--;
    }

    if (number < 0) {
    size--;
    }

    return size; 
}


console.log(skaitmenuKiekisSkaiciuje(781));
console.log(skaitmenuKiekisSkaiciuje(37060123456));
console.log(skaitmenuKiekisSkaiciuje(3.14));
console.log(skaitmenuKiekisSkaiciuje('asd'));
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje(false));
console.log(skaitmenuKiekisSkaiciuje('asd'));
console.log(skaitmenuKiekisSkaiciuje(NaN));
console.log(skaitmenuKiekisSkaiciuje(Infinity));
console.log(skaitmenuKiekisSkaiciuje(-Infinity));