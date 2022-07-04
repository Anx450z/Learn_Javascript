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