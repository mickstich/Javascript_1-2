let Today = new Date();
let date = Today.getDate();

let month = Today.getMonth()+1; 
let year = Today.getFullYear();
if(date<10) 
{
    date='0'+date;
} 

if(month<10) 
{
    month='0'+month;
} 
today = month+'-'+date+'-'+year;
console.log(today);
today = month+'/'+date+'/'+year;
console.log(today);