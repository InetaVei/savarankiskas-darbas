/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
*/

function XO(str) {
    let xCount = 0;
    let oCount = 0;
  
  for (let i = 0; i < str.length; i ++) {
    let letter = str[i];
    if (letter === "x" || letter === "X"){
      xCount++;
    } else if (letter === "o" || letter === "O"){
      oCount++;
    }
  }
  
  return xCount === oCount;
}


Test.assertEquals(XO('xo'),true);
Test.assertEquals(XO("xxOo"),true);
Test.assertEquals(XO("xxxm"),false);
Test.assertEquals(XO("Oo"),false);
Test.assertEquals(XO("ooom"),false);


/* arba*/

const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
  }