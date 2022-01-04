for (var y = 2014; y <= 2050; y++)
    {
    var d = new Date(y,0,1);
    if ( d.getDay() === 0 )
        console.log("January 1 : Sunday  "+y);
    }