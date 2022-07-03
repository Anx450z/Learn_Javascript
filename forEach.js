
a = [23,44,44,67,67,324,87];

a.forEach(element => {
  console.log(element);
});

a.forEach(function(element){
  console.log(element);
});

let b = ["text", true, 45];

b.forEach(element=>{
  console.log(element);
});

let poem = "To be or not to be";

Array.from(poem).forEach( word=>{
  console.log(word);
});