const getAverage = arr => {
   const reducer = (total, currentValue) => total + currentValue;
   const sum = arr.reduce(reducer);
   let rezult = sum / arr.length;
   return rezult;
}

console.log(getAverage([2,2,2,2]),2);
console.log(getAverage([1,2,3,4,5,]),3);
console.log(getAverage([1,1,1,1,1,1,1,2]),1);