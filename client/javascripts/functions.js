// jshint esversion: 7


//fill an array with the numbers from start to stop, in steps of step
let fillArray = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

//create an array of the numbers 1 - 100
let arrOf1To100 = fillArray(1, 100, 1);

//log the array for inspection
console.log(arrOf1To100);

let bitBatBotOrNot = (n) => { //finish
   //your code goes here
   let result = "";

   if(n % 3 == 0){
    result = `${result}Bit`;
  }
  if(n % 5 == 0){
   result = `${result}Bat`;
 }
 if (n % 7 == 0) {
   result = `${result}Bot`;
 }
 if (n % 3 != 0 && n % 5 != 0 && n % 7 != 0) {
   result = `${result}Not`;
 }
  return result;
};

let findAllbitBatBotOrNots1 = (arr) => {
   return arr.map(num => `$(num):`+bitBatBotOrNot(num));
};

let findAllbitBatBotOrNots2 = (arr) => {
   let ans = [];
   for(var n = 0; n < arr.length; n++) {
     ans.push(arr[n]+":" + bitBatBotOrNot(arr[n]));
   }
   return ans;
};

let findAllbitBatBotOrNots3 = (arr) => {
   let ans = [];
   for(var num of arr) {
     ans.push(num + ":" + bitBatBotOrNot(num));
   }
   return ans;
};

let findAllbitBatBotOrNots4 = (arr) => {
   let ans = [];
   arr.forEach(num => {
     ans.push(num + ":" + bitBatBotOrNot(num));
   });
   return ans;
};

let findAllbitBatBotOrNotXC = (arr) => {
  let ans = [];
  for(var num in arr) {
    ans.push(arr[num]+":" + bitBatBotOrNot(arr[num]));
  }
  return ans;
};

//test the functions

findAllbitBatBotOrNots1(arrOf1To100)

findAllbitBatBotOrNots2(arrOf1To100)

findAllbitBatBotOrNots3(arrOf1To100)

findAllbitBatBotOrNots4(arrOf1To100)
