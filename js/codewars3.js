const arr1 = [numbers1];
const arr2 = [numbers2];

const filteredArray = arr1.filter(function(x) { 
    return arr2.indexOf(x) < 0;
  });

console.log(arr2.indexOf([3,4], [3]), [4], `a was${arr1}, b was ${arr2}`);


// Test.describe("Sample tests", function() {
//     Test.it("Should pass Sample tests", function() {
//       Test.assertDeepEquals(arrayDiff([], [4,5]), [], "a was [], b was [4,5]");
//       Test.assertDeepEquals(arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]");
//       Test.assertDeepEquals(arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []");
//     });
//   }); 