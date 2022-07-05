
const palindrome = (word) =>{
  reverseWord = word.split("").reverse().join("");
  if (reverseWord.toLowerCase() === word.toLowerCase()){
    return 1;
  }
  return 0;
}

// Another way of palindrome

const palindrome2 = (word) =>{
  return word.toLowerCase() === word.split("").reverse().join("").toLowerCase();
}

console.log(palindrome("ankur")) ;
console.log(palindrome("racecar")) ;
console.log(palindrome2("Racecar")) ;
console.log(palindrome2("Ankur")) ;

const reverse = (word) =>{
  return Array.from(word).reverse().join("")
}

console.log(reverse("😂❤️😂"));
console.log(reverse("😂❤️🌐😂"));


// Define a phrase object
// const Phrase = (content)=>{
//   this.content = content;
// }

// Constructor
function Phrase(content){
  this.content = content;
}
let phrase = new Phrase("Racecar");
console.log(phrase.content);

// Returns true if the phrase is a palindrome, false otherwise
function Phrase2(content){
  this.content = content;

  this.palindrome3 = function palindrome3() {
    let processedContent = this.content.toLowerCase();
    return processedContent === reverse(processedContent);
  }

  this.louder = function louder(){
    return this.content.toUpperCase();
  }
}
phrase = new Phrase2("racecar");
console.log(phrase.palindrome3());
console.log(phrase.louder());