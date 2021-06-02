import {useState} from 'react';



const Time=()=>{
    
    {/*Variables*/}
    const today=new Date;
    const monthDay=today.getDate();
    const hours=today.getHours();
    const day=today.getDay();
    const month=today.getMonth();
    const year=today.getYear();
    const [minutes1,setMinutes1]=useState();
    let currentDay='';
    let currentMonth='';
    
    {/*Function that get's called every second to update the current time*/}
   const timeVariables=()=>{
      let today=new Date;
       const minutes=today.getMinutes();
       setMinutes1(minutes);}

 setInterval(timeVariables,1000);
   
    
    
    
    {/*Switch for converting new date output to weekday name string*/}
 switch (day) {
  case 0:
    currentDay = "Sunday";
    break;
  case 1:
    currentDay = "Monday";
    break;
  case 2:
     currentDay = "Tuesday";
    break;
  case 3:
    currentDay = "Wednesday";
    break;
  case 4:
    currentDay = "Thursday";
    break;
  case 5:
    currentDay = "Friday";
    break;
  case 6:
    currentDay = "Saturday";
}
    
    {/*Converts new date month output number to a month string */}
    
    switch (month) {
  case 0:
    currentMonth = "January";
    break;
  case 1:
    currentMonth = "February";
    break;
  case 2:
    currentMonth = "March";
    break;
   case 3:
    currentMonth = "April";
    break;
  case 4:
    currentMonth = "May";
    break;
 case 5:
    currentMonth = "June";
    break;
case 6:
    currentMonth = "Jully";
    break;
 case 7:
    currentMonth = "August";
    break;
 case 8:
    currentMonth = "September";
    break;
  case 9 :
    currentMonth = "October";
    break;
  case 10:
    currentMonth = "November";
    break;
  case 11:
    currentMonth = "December";
    break;          
  
}
    
    
    
    
    return(
        <>
        
        <div className="timeContainer">
        
        {/*Adds a zero to the begining of a number if it's a single number*/}
        <div className="currentTime">
        {hours<10 ? <h1>{'0'+hours+':'}</h1> : <h1>{hours+':'}</h1>}
        {minutes1<10 ? <h1>{'0'+minutes1}</h1> : <h1>{minutes1}</h1>}
    
        </div>
        {/*Variable date outputs*/}
        <div className="dateOutputs">
        
       <p>{currentDay}</p>
       <p>{monthDay+'th'}</p>
      
   
       <p>{currentMonth}</p>
       <p>{year+1900}</p>
     
       </div>
       </div>
        </>
    )
}

export default Time;