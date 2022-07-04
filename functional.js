let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// urls: Imperative version
const imperativeUrls = (elements)=> {
  let urls = [];
  elements.forEach(element => {
    urls.push(element.toLowerCase().split(/\s+/).join("-"));
  });
  return urls;
}
console.log(imperativeUrls(states));

// using functional version : map
const functionalUrls = (elements)=>{
  return elements.map(element => element.toLowerCase().split(/\s+/).join("-"));
}
console.log(functionalUrls(states));

// exercise
const urlsFriendly = (elements)=>{
  return elements.map(element => `https://example.com/${element.toLowerCase().split(/\s+/).join("-")}`);
}
console.log(urlsFriendly(states));

// Filter
// singles: Imperative form
const imperativeString =(elements)=>{
  let singles = [];
  elements.forEach(element => {
    if (element.split(/\s+/).length === 1){
      singles.push(element);
    }
  });
  return singles;
}
console.log(imperativeString(states));

// using filter
const functionalString= (elements)=>{
  return elements.filter(element => element.split(/\s+/).length === 1); //works on true
}
console.log(functionalString(states));

// exercise
const filter1 = (elements)=>{
  return elements.filter(element => element.split(/\s+/).length == 2); // 1st method
}

const filter2 = (elements)=> {
  return elements.filter(element => element.split(/\s+/).includes("Dakota"));// second method
}

console.log(filter1(states));
console.log(filter2(states));

// Reduce
// sum: Imperative solution
let numbers = [1,2,3,4,5,6,7,8,9,10];
const imperativeSum= (elements)=>{
  let sum = 0;
  numbers.forEach(number =>{
    sum += number;
  })
  return sum;
}
console.log(imperativeSum(numbers));

// using reduce
numbers.reduce((sum, number) => { // takes 2 arguments : 1- accumulator, 2- array element
  sum += number;
  return sum;
}, 0);// 0 is default value of sum

// second method

const functionalSum = (elements)=>{
  return elements.reduce((sum, element) =>{return sum += element;});// double return
}
console.log(functionalSum(numbers));

// example 2 for reduce

// lengths: Imperative solution
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));

// functional method
const functionalLengths = (elements)=>{
  return elements.reduce((lengths, element) => {
    lengths[element] = element.length;
    return lengths;
  }, {});
}
console.log(functionalLengths(states));