today=new Date();
let christmas_date=new Date(today.getFullYear(), 11, 25);
if (today.getMonth()==11 && today.getDate()>25) 
{
christmas_date.setFullYear(christmas_date.getFullYear()+1); 
}  
let one_day=1000*60*60*24;
console.log(Math.ceil((christmas_date.getTime()-today.getTime())/(one_day))+
" days left ");