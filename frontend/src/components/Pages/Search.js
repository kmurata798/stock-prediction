import React from 'react';
import './Search.css'
import {useState} from 'react';
import SearchAPI from './SearchAPI';

function Search() {


  const [search,setSearch] = useState('');
  const [apiSymbol,setApiSymbol]= useState(search);

  const handleChange = (e) => {
    console.log(e)
    setSearch(e.target.value);
    

  }
  

const handleSubmit = (e) => {
    e.preventDefault();
    setApiSymbol(search);
   
}

  
     return (
      <div className="Api">
       <form onSubmit = {handleSubmit}> 
    <input className = 'btn' type = 'text' placeholder= 'Search Stocks'  value = {search}
           onChange={handleChange}
    />
      <button className = 'button' type= 'submit' > Search</button>
     
      </form>
      <SearchAPI symbol = {apiSymbol}/>
      
    </div>
  );
      
}
export default Search;
