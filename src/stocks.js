import Charts from './charts';
import {useState} from 'react';

const Stocks=()=>{
    
     const [apiData,setApiData]=useState([1,10,1,10,1,10,1]);   
    
    
    {/*Fetches stock data from an api*/}
     const fetchData=(apiKey)=>{
        fetch(apiKey)
      .then(res => res.json())
      .then(
        (result) => {
          setApiData([result.data[0].close,
                 result.data[1].close,
                 result.data[2].close,
                 result.data[3].close,
                 result.data[4].close,
                 result.data[5].close,
                 result.data[6].close])
        },
        (error) => {
          console.log('Not working'+error)
        }
      )
     }
     
     
     {/*Different api keys depending from the stock*/}
    const TESLA1="http://api.marketstack.com/v1/eod?access_key=11702c2bc92a345dad02d2f032829945&symbols=TSLA";
    const GME1="http://api.marketstack.com/v1/eod?access_key=11702c2bc92a345dad02d2f032829945&symbols=GME";
   const AMD1="http://api.marketstack.com/v1/eod?access_key=11702c2bc92a345dad02d2f032829945&symbols=AMD";
    const INTEL1="http://api.marketstack.com/v1/eod?access_key=11702c2bc92a345dad02d2f032829945&symbols=INTC";
    const APPLE1="http://api.marketstack.com/v1/eod?access_key=11702c2bc92a345dad02d2f032829945&symbols=AAPL";
   
   
    return(
       <section className="top5Stocks">
        <ul>
            <li><button onClick={()=>{fetchData(TESLA1)}}>TESLA</button></li>
             <li><button onClick={()=>{fetchData(GME1)}}>GME</button></li>
              <li><button onClick={()=>{fetchData(AMD1)}}>AMD</button></li>
               <li><button onClick={()=>{fetchData(INTEL1)}}>INTEL</button></li>
                <li><button onClick={()=>{fetchData(APPLE1)}}>APPLE</button></li>
        </ul>
        <Charts className="chart" apiData={apiData} />
        </section>
    )
}

export default Stocks; 