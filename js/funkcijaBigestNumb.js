function bigNum(numList) {
    //input validation
    if (typeof numList !== 'object') {
        return 'ERROR: reikia teiksti array tipo verte su skaiciais'
    }
    if (numList.length === 0) {
        return 'ERROR: skaiciu sarasas turi buti ne tuscias'
    }
    //logic
    let maxNumber = -Infinity;

    for (let num of numList) {
        if (num > maxNumber) {
            maxNumber = num;
        }
    }

    maxNumber = numList[numList.length-1];

    if (maxNumber === Infinity) {
      return 'ERROR: sarase nerasta tikru skaiciu'
    }


    //return result
  return maxNumber;
}




console.log( bigNum( [ 1 ] ), '->', 1);
console.log( bigNum( [ 1, 2, 3 ] ), '->', 3 );
console.log( bigNum( [ -5, 78, 14, 0, 18 ] ), '->', 78 );
console.log( bigNum( [ 69, 69, 69, 69, 66 ] ), '->', 69 );
console.log( bigNum( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
console.log( bigNum( 'pomidoras' ) );
console.log(bigNum [-98, 15, 45, -3.14, 'labas']); 

// console.log( bigNum( ['Labas', 'rytas', 'tra', 'lia', 'lia'] ) );
