// frontend react component
import React, {useState} from "react";
import axios from "axios";

function StocksForm() {

  const [data, setData] = useState(null);
  const [values, setValues] = useState({
    function: '',
    symbol: '',
    interval: '',
    datatype: ''
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(values)

    const res = await axios.get('stonks', { params: values })
    // console.log(res.data)
    setData(res.data)
    console.log(data)
  }

  const handleFunctionChange = (event) => {
    setValues((values) => ({
      ...values,
      function: event.target.value,
    }));
  };

  const handleSymbolChange = (event) => {
      setValues((values) => ({
          ...values,
          symbol: event.target.value,
      }));
  };

  const handleIntervalChange = (event) => {
    setValues((values) => ({
        ...values,
        interval: event.target.value,
      }));
  };

  const handleDatatypeChange = (event) => {
    setValues((values) => ({
        ...values,
        datatype: event.target.value,
      }));
  };

  return (
    <div className ="App-header">
      <form className="stockform" onSubmit={onSubmit}>
        <label htmlFor="Function">Name</label>
        <input id="Function" name="Function" type="text" value={values.name} onChange={handleFunctionChange}></input>
        <label htmlFor="Symbol">Symbol</label>
        <input id="Symbol" name="Symbol" value={values.symbol} onChange={handleSymbolChange}></input>
        <label htmlFor="Interval">Interval</label>
        <input id="Interval" name="Interval" value={values.interval} onChange={handleIntervalChange}></input>
        <label htmlFor="Datatype">Datatype</label>
        <input id="Datatype" name="Datatype" value={values.datatype} onChange={handleDatatypeChange}></input>
        <input type="submit" value="Submit" />
      </form>
      <div className="displayData">
        <h2>Results</h2>
        <pre>
        { data !== null ? JSON.stringify(data, null, 2) : 'Enter Request Above' }
        </pre>
      </div>
    </div>
  );
}

export default StocksForm