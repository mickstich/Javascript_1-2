let curday = function(a){
    today = new Date();
    let date = today.getDate()
    let month = today.getMonth()+1
    let year = today.getFullYear()
    
    if(date<10) 
      date='0'+date;
    if(month<10) 
       month='0'+month;
    return (date+a+month+a+year);
    };
    console.log(curday('/'));
    console.log(curday('-'));