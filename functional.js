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
