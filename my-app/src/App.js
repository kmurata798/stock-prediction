
import './App.css';
import {useState,useEffect} from 'react';

function App() {

  const [stocks,setStocks] = useState([]);
  const [search,setSearch] = useState('');
  const [loaded,isLoaded] = useState(null);
  
  useEffect(() => {
    const api = fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  .then((response) => response.json())
  .then((result ) => {
    console.log(result)
    setStocks(result)
    isLoaded(true)
  })
},[])

const handleChange = e =>{
setSearch(e.target.value)

}
const searchedCoins = stocks.filter(coin =>
  coin.name.toLowerCase().includes(search.toLowerCase())
)
  if(!loaded){
    return <div className = 'container'>....Loading</div> 
  }else{
     return (
    <div className="App">
      <header className="App-header">
      <h1 style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>Cryptocurreny Market</h1>
    <input className = 'btn' type = 'text' placeHolder= 'Search Crypto' onChange = {handleChange}
  
    />
    <div>
        {searchedCoins.map(data =>{
         return (
           <div className="coin"
           style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
           
           <p>
             <div className="name">
             <img src={data.image} alt={data.name} height = '100' />
             <h1 key = {data.id}>{data.name}</h1>
             </div>
             <div>
              <li>Price: ${data.current_price}</li>
              <li>High: ${data.high_24h}</li>
              <li>Low: ${data.low_24h}</li>
              <li>Market Cap: ${data.market_cap.toLocaleString()}</li>
              </div>
           </p>
           </div>
         )
        })  }

    </div>
      </header>
    </div>
  );
      }
}

export default App;
