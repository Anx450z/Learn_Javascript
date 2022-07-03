const dayName = (date)=> {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday",
                         "Thursday", "Friday", "Saturday"];
  return days[date.getDay()];
}

const greetings = (date)=>{
  let day = dayName(date);
  return `Hello world!, Happy ${day}.`;
}