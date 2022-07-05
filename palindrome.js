
// const palindrome = (word) =>{
//   reverseWord = word.split("").reverse().join("");
//   if (reverseWord.toLowerCase() === word.toLowerCase()){
//     return 1;
//   }
//   return 0;
// }

// // Another way of palindrome

// const palindrome2 = (word) =>{
//   return word.toLowerCase() === word.split("").reverse().join("").toLowerCase();
// }

// console.log(palindrome("ankur")) ;
// console.log(palindrome("racecar")) ;
// console.log(palindrome2("Racecar")) ;
// console.log(palindrome2("Ankur")) ;

// const reverse = (word) =>{
//   return Array.from(word).reverse().join("")
// }

// console.log(reverse("😂❤️😂"));
// console.log(reverse("😂❤️🌐😂"));


// Define a phrase object
// const Phrase = (content)=>{
//   this.content = content;
// }

// Constructor
// function Phrase(content){
//   this.content = content;
// }
// let phrase = new Phrase("Racecar");
// console.log(phrase.content);

//native object modification
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Returns true if the phrase is a palindrome, false otherwise
function Phrase2(content){
  this.content = content;

  this.processor = function processor(){
    return string.toLowerCase(string);
  }

  this.processedContent = function processedContent(){
    return this.processor(this.content);
  }

  this.palindrome3 = function palindrome3() {
    return this.processedContent() === this.processedContent().reverse();
  }

  this.louder = function louder(){
    return this.content.toUpperCase();
  }
}
// phrase = new Phrase2("racecar");
// console.log(phrase.palindrome3());
// console.log(phrase.louder());

// Define a TranslatePhrase object
function TranslatePhrase(content, translation){
  this.content = content;
  this.translation = translation;

  // Return translation processed for palindrome testing.
  this.processedContent = function processedContent(){ // overriding
    return this.translation;
  }
}

TranslatePhrase.prototype = new Phrase2(); // prototype inherits methods of Phrase2

phrase = new TranslatePhrase("recognize", "reconocer");
console.log(phrase.palindrome3());
console.log(phrase.louder(), phrase.content,  phrase.translation );


console.log("hello! world!".reverse());

// exercise

String.prototype.blank = function(){
  return !!this.match(/\s+/);
}
console.log("".blank());
console.log("hello".blank());
console.log("  ".blank());
