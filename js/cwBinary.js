function addBinary(a,b) {
    return (a + b).toString(2);
  }

  est.describe("addBinary(1,2)", function() {
    var results1 = addBinary(1,2);
    Test.it("Should return something that isn't falsy", function() {
      Test.expect(results1, "Something is wrong, no results!");
    });
    Test.it("Should return \"11\"", function() {
      Test.assertEquals(results1, "11");
    });
  });


  /* arba */

  const addBinary = (a, b) => (a + b).toString(2);

/* arba */

function decimalToBinary(decimal){
    return (decimal >>> 0).toString(2);
  }
  
  function addBinary(a,b) {
    return decimalToBinary(a+b);
  }