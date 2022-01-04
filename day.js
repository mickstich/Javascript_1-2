const d = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[d.getDay()];
console.log("Today is :", day)
console.log(d.getHours())

let hour =d.getHours()
let minute =d.getMinutes()
let second =d.getSeconds()
let meridian=(hour>=12)? "PM":"AM"
hour=(hour>=12)?hour-12:hour

if(hour===0 && meridian === 'PM')
{
if(minute===0 && second===0)
{ 
    hour=12
    meridian='noon'
}
else
{
    hour=12
    meridian='PM'
}
}
if(hour===0 && meridian === 'AM')
{
if(minute===0 && second===0)
{ 
    hour=12
    meridian='midnight'
}
else{
    hour=12
    meridian="AM"
}
}
console.log("Time is :",+hour,"" +meridian,":",+minute,":",+second)



