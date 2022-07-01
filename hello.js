
const print = (paper) => {
  console.log(paper);
}
puts = print;


console.log("hello, world!","this as well")

let a = "A man, a plan, a canal, Panama"
console.log(a.slice(", "));

let now = new Date();

print(now);
puts(now);

let moonlanding = new Date("July 20, 1969 20:18");

puts(now-moonlanding);

puts(now.getDay()) // JS uses sunday as first day, and months are offset by 1, i.e Jan = 0