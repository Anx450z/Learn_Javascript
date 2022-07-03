const dayName = (date)=> {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday",
                         "Thursday", "Friday", "Saturday"];
  return days[date.getDay()];
}

const greetings = (date)=>{
  let day = dayName(date);
  return `Hello world!, Happy ${day}.`;
}

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