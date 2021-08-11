import React from 'react';
import {useState,useEffect} from 'react';
import Plot from 'react-plotly.js';
import './searchAPI.css'




const Api =({symbol}) => {

    const [stocks,setStocks] = useState([]);
    const [yAxis,setYAxis] = useState([]);
    const x = [];
    const y = [];

    useEffect(() => {
        fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=88724DTSJ93YB5VN`)

       .then((response) => response.json())
       .then((result ) => {
         for(var key in result['Time Series (Daily)']){
             y.push(result['Time Series (Daily)'][key]['1. open']);
             x.push(key)
         }

         setStocks(x);
         setYAxis(y);
       })
     },[symbol])
     
     return(
        <div className = 'Plot'>
            <Plot
        data={[
          {
            x: stocks,
            y: yAxis,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},   
          },
          
        ]}
        layout={ {width: 1000, height: 500, title: symbol} }
      />
          </div>
     )





}
export default Api
