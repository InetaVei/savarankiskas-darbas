function rentalCarCost(days){
    let day = 1;
    const sum = 40;
    const totalPrise = '';
   if (days >= 7) {
       const totalPrise = days * sum - 50;
       return totalPrise;

     } else if (days >= 3) {
         const totalPrise = days * sum - 20;
         return totalPrise;
     } else {
         const totalPrise = days * sum;
         return totalPrise;
     }
     
    }
    console.log(rentalCarCost(3));

// Test.describe("Regular Tests:", function() {
//     Test.it("Should work for under 3 days:", function() {
//       Test.assertEquals(rentalCarCost(1), 40);
//       Test.assertEquals(rentalCarCost(2), 80);
//     });


//     Test.it("Should work for under 7 days:", function() {
//       Test.assertEquals(rentalCarCost(3), 100);
//       Test.assertEquals(rentalCarCost(4), 140);
//       Test.assertEquals(rentalCarCost(5), 180);
//       Test.assertEquals(rentalCarCost(6), 220);
//     });
//     Test.it("Should work for 7 or more days:", function() {
//       Test.assertEquals(rentalCarCost(7), 230);
//       Test.assertEquals(rentalCarCost(8), 270);
//       Test.assertEquals(rentalCarCost(9), 310);
//       Test.assertEquals(rentalCarCost(10), 350);    
//     });
//   });

/* arba*/

function rentalCarCost(d) {
    return d * 40 - (d >= 7 ? 50 : (d >= 3 ? 20 : 0));
  }

  /* arba */ 

  function baseCost(days, rate) {
    return days * rate;
  }
  
  function discountRate(days) {
    if ( days >= 7 ) {
      return 50;
    }
    else if ( days >= 3 ) {
      return 20;
    }
    else {
      return 0;
    }
  }
  
  function rentalCarCost(days) {
    return baseCost(days, 40) - discountRate(days);
  }


