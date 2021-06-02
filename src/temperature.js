import {useState,useEffect} from 'react';

const Temperature=()=>{
   
    {/*Contains returns from an api*/}
    let [temperature,setTemperature]=useState('');
    let [weather,setWeather]=useState('');
    
    {/*Async fetch from an api,sets the state*/}
    useEffect(() => {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=54.687157&lon=25.279652&exclude={part}&appid=0ea4f961aae42bfa56f75ca058577e1e&units=metric")
      .then(res => res.json())
      .then(
        (result) => {
          setTemperature(Math.round(result.current.temp)+'°');
           setWeather(result.current.weather[0].description);
            
        },
      
        (error) => {
          console.log('Not working'+error)
        }
      )
  }, [])
    
    

    
    return(
        
        <section className="temperature">
        <h1>{temperature}</h1>
        <h1>{weather}</h1>
        </section>
    )
}

export default Temperature;