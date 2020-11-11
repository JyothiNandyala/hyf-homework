
let weekday = ["Sunday" ,"Monday" ,"Tuesday" ,"Wednesday" ,"Thursday" ,"Friday" ,"Saturday"]
let date = new Date();
const day = weekday[date.getDay()];
console.log(day);
let eventHeldDay=4;
function getEventWeekday(number){
  
  const eventDay=(date.getDay()+number)%7;
  return weekday[eventDay];
}
console.log("Today is " + day + " the event is in " + eventHeldDay + " days ." + " So the event will be in " 
+ getEventWeekday(4)+ "." );



