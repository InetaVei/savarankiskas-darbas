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


console.log('-----------');


//KITAS VARIANTAS 


// function hasDot (text) {
//    for (let letter of text) {
//         if (letter === '.') {
//      return true;    
//     }
//     return false;
// }
// }

// function numLenght(num) {
//    if (typeof num !== 'number') {
//        return 'ERROR: duotas ne skaicius.';
//    }

//      if (isNan(num)) {
//          return 'ERROR: skaicius turi buti tikras (ne Infinity).'
//  }
//     if (!isFinite(num)) {
//         return 'ERROR: skaicius turi buti tikras.'
//     }

//     let length = 0;
//     const textNumber = '' + num;
//     length = textNumber.length;

//     if (hasDot(textNumber)) {
//         length--;
//     }

//     return length;
// }

// console.log(numLenght(781));
// console.log(numLenght(37060123456));
// console.log(numLenght(3.14));
// console.log(numLenght('asd'));
// console.log(numLenght(true));
// console.log(numLenght(false));
// console.log(numLenght('asd'));
// console.log(numLenght(NaN));
// console.log(numLenght(Infinity));
// console.log(numLenght(-Infinity));