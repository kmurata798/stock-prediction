require('dotenv').config();
const axios = require('axios');
// let url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=88724DTSJ93YB5VN'


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

      return response.data
  } catch (err) {
      console.log(err)
  }
}

exports.stockData = async (req, res) => {
    // let data = {test: "testinging"}
    const { functionType, outputsize, symbol, interval } = req.query
    console.log(req.query)
    const stonks = await getStockData(functionType, outputsize, symbol, interval)
    console.log(stonks)
    res.send(stonks)
};