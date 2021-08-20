require('dotenv').config();
const axios = require('axios');
// let url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=88724DTSJ93YB5VN'
// Give this file access to the models
const db = require("../models");
// Set the 'stocks' collection to a variable
const Stocks = db.stocks;

async function getStockData(fType, outSize, sym, interv) {
  const apiKey = process.env.ALPHAVANTAGE_API_KEY
  const baseUrl = 'https://www.alphavantage.co/query'
  const functionType = fType || 'TIME_SERIES_WEEKLY'
  const outputsize = outSize || 'compact'
  const symbol = sym || 'MSFT'
  const interval = interv || '15min'
  const datatype = 'json'

  try {
      const response = await axios.get(baseUrl, {
          params: {
              function: functionType,
              symbol: symbol,
              outputsize: outputsize,
              interval: interval,
              apikey: apiKey,
              datatype: 'json'
          }
      })
      // change this to response to have access to the response.status in the if condition below
      return response
  } catch (err) {
      console.log(err)
  }
}

exports.stockData = async (req, res) => {
    // let data = {test: "testinging"}
    const { functionType, outputsize, symbol, interval } = req.query
    console.log(req.query)
    const stonks = await getStockData(functionType, outputsize, symbol, interval)
    // const dataMap = processData(stonks);
    
    
    if (stonks.status == 200) {
      const stockSchema = new Stocks({
        name: symbol,
        type: functionType,
        data: JSON.stringify(stonks.data)
        // open: stonks.data["Weekly Time Series"]["1. open"],
        // high: stonks.data["Weekly Time Series"]["2. high"],
        // low: stonks.data["Weekly Time Series"]["3. low"],
        // close: stonks.data["Weekly Time Series"]["4. close"]
      })

      stockSchema
            .save(stockSchema)
            .then(data => {
              res.send(stonks.data);
            })
            .catch(err => {
              res.status(500).send({
                message:
                  err.message || "Some error occurred while creating the Company."
              });
            });
      // console.log(stonks)
      // console.log("weird")
    } else {
      res.send('not valid symbol')
    }

};

// Create and Save a new Stock entry
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Company
  const stocks = new Stocks({
    name: req.body.name,
    rating: req.body.rating,
    chosen: req.body.chosen ? req.body.chosen : false
  });

  stocks
      .save(stocks)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Company."
        });
      });
}

// async function processData(data, ) {
//   const valsByProp = stonks.data["Weekly Time Series"].map(item => { // do this })
// }