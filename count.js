const sonnet = `Let me not to the marriage of true minds
Admit impediments. Love is not love
Which alters when it alteration finds,
Or bends with the remover to remove.
O no, it is an ever-fixed mark
That looks on tempests and is never shaken;
It is the star to every wand'ring bark,
Whose worth's unknown, although his height be taken.
Love's not time's fool, though rosy lips and cheeks
Within his bending sickle's compass come:
Love alters not with his brief hours and weeks,
But bears it out even to the edge of doom.
  If this be error and upon me proved,
  I never writ, nor no man ever loved.`;

let uniques = {};
let words = sonnet.match(/\w+/g);
// console.log(words);

for (let i =0 ; i < words.length; i++){
  if(uniques[words[i]]){
    uniques[words[i]] += 1;
  }
  else{
    uniques[words[i]] = 1;
  }
}

// other way using map

uniques = new Map();
let current_value = 0;
for (let i = 0; i < words.length; i ++){
  current_value = uniques.get(words[i]);
  if (current_value){
    current_value = uniques.get(words[i]);
    uniques.set(words[i], current_value + 1);
  }
  else{
    uniques.set(words[i], 1);
  }
}

// console.log(uniques);

function numberCompare(a, b){
  if(a>b){
    return 1;
  }
  else if(a<b){
    return -1;
  }
  else{
    return 0
  }
}

console.log(numberCompare(1,3)) ;
a =[17, 42, 8, 99]

console.log(a.sort()); // using default alphabetical comparison
console.log(a.sort(numberCompare)); //using numerical comparison

// fat arrow function

let altStringMessage = (str) => {
  if (str){
    return "String non empty";
  }
  return "String is empty";
}

console.log(altStringMessage("hi"));
console.log(altStringMessage(""));

// JS only cares about the sign of the number in sorting

aSorted = a.sort(function(a,b) {return a-b;});
console.log(aSorted);
