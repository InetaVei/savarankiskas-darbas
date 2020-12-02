// panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:

const raides = 'kopusteliai';
let backwards = '';

for (i = raides.length -1; i >= 0; i--) {
    const raide = raides[i];
    backwards += raide;
}

console.log(`${raides} is kitos puses gaunasi ${backwards}`);