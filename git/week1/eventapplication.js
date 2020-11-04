
var weekday = ["Sunday" ,"Monday" ,"Tuesday" ,"Wednesday" ,"Thursday" ,"Friday" ,"Saturday"]
var date = new Date();
var day = weekday[date.getDay()];
console.log(day);
var eventHeldDay=4;
function getEventWeekday(number){
  
  let eventDay=((date.getDay()+number)+7)%7;
  return weekday[eventDay];
}
console.log("Today is " + day + " the event is in " + eventHeldDay + " days ." + " So the event will be in " 
+ getEventWeekday(eventHeldDay)+ "." );



