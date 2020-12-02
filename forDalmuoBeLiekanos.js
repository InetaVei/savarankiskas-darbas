/* Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
0 - 11
8 - 31
-18 - 18
rezultatą pateikti tokiu formatu:
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
*/

const nuo = 0;
const iki = 11;
const dalmuo = 7;
let kiekis = 0;

for (let i = nuo; i <= iki; i ++) {
    console.log( i % dalmuo);
    if ( i % dalmuo === 0) {
     kiekis++;
    }

}

console.log(`Skaičių intervale tarp ${nuo} ir ${iki}, besidalijančių be liekanos iš ${dalmuo} yra ${kiekis} vienetai.`);