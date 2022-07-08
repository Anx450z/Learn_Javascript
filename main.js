let Phrase = require("mhartl-palindrome");

function palindromeTester() {
  let string = prompt("Plase enter your string for palindrome testing: ");
  let phrase = new Phrase(string);

  if(phrase.palindrome()){
    alert(`"${phrase.content}" is a palindrome`);
  }else{
    alert(`"${phrase.content}" is not a palindrome`);
  }
}

document.addEventListener("DOMContentLoaded", function(){
  let form = document.querySelector("#palindrome-tester");
  form.addEventListener("submit", function(){
    palindromeTester();
  });
});