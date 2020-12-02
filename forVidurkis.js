
const skaiciai = [11, 12, 13, 14, 15, 16];
let suma = 0;
const kiekis = skaiciai.length;

for (let i = 0; i < skaiciai.length; i ++) {
     const skaicius = skaiciai[i];
     suma += skaiciai[i];
}

const vidurkis = suma / kiekis;
console.log(`Siu skaiciu ${skaiciai} vidurkis yra: ${vidurkis}`);
