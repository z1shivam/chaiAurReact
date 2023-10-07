// import {useEffect, useState} from 'react'

// function useCurrencyInfo(currency){
//     const [currencyInfo, setCurrencyInfo] = useState({})
//     useEffect(()=>{
//         fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//         .then((res)=> res.json())
//         .then((res)=> setCurrencyInfo(res[currency]))
//         .console.log(currencyInfo);
//     },[currency])
//     return currencyInfo
// };

// export default useCurrencyInfo;

import {useEffect, useState} from "react" 
  
  
 function useCurrencyInfo(currency){ 
     const [data, setData] = useState({}) 
     useEffect(() => { 
         fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`) 
         .then((res) => res.json()) 
         .then((res) => setData(res[currency])) 
         console.log(data); 
     }, [currency]) 
     console.log(data); 
     return data 
 } 
  
 export default useCurrencyInfo;