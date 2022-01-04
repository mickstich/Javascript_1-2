function leap(year)
{
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log("leap year : " +leap(1972));

       
        

       
