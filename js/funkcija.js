/* Tuscios funkcijos sablonas:

function emptyFunc() {
    return false;
}

console.log(emptyFunc()); */

/* uzduotis 
priima du skaičiaus tipo kintamuosius
atskirame kintamajame įsimena sandaugos reikšmę
gražina saudaugos rezultatą
TESTAI:
console.log( daugyba( skaicius1, skaicius2 ) );
console.log( daugyba( skaicius3, skaicius2 ) );
console.log( daugyba( skaicius1, skaicius3 ) );
rezultatas: teisingos reikšmės; */


function daugyba(pirmasisDaugiklis, antrasisDaugiklis) {
    console.log(pirmasisDaugiklis);
    console.log(antrasisDaugiklis);

    const rezultatas = pirmasisDaugiklis * antrasisDaugiklis;
    return rezultatas;
}

const skaicius1 = 5;
const skaicius2 = 10;
const skaicius3 = -30;


console.log( daugyba( skaicius1, skaicius2 ) );
// console.log( daugyba( skaicius3, skaicius2 ) );
// console.log( daugyba( skaicius1, skaicius3 ) );