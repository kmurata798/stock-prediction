require('dotenv').config();
const axios = require('axios');
// let url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=88724DTSJ93YB5VN'


async function stockData() {
    // const apiKey = process.env.ALPHAVANTAGE_API_KEY
    // const baseUrl = 'https://www.alphavantage.co/query'
    // const functionType = 'TIME_SERIES_DAILY'
    // const outputsize = 'compact'
    // const symbol = 'MSFT'

    const apiKey = process.env.ALPHAVANTAGE_API_KEY
    const baseUrl = 'https://www.alphavantage.co/query'
    const functionType = 'TIME_SERIES_WEEKLY_ADJUSTED'
    const symbol = 'MSFT'

    // Intraday API parameters
    // const apiKey = process.env.ALPHAVANTAGE_API_KEY
    // const baseUrl = 'https://www.alphavantage.co/query'
    // const functionType = 'TIME_SERIES_INTRADAY'
    // const interval = '5min'
    // const outputsize = 'compact'
    // const symbol = 'MSFT'

    // Intraday extended APIparameters
    // const apiKey = process.env.ALPHAVANTAGE_API_KEY
    // const baseUrl = 'https://www.alphavantage.co/query'
    // const functionType = 'TIME_SERIES_INTRADAY_EXTENDED'
    // const interval = '60min'
    // const outputsize = 'compact'
    // const adjusted = true
    // const slice = 'year1month1'
    // const symbol = 'MSFT'
    try {
      const response = await axios.get(baseUrl, {
        params: {
          function: functionType,
          symbol: symbol,
          apikey: apiKey,
          datatype: 'json'
        }
      })

      return response.data
    } catch (err) {
      console.log(err)
    }
  }

exports.getStockData = async (req, res) => {
    // let data = {test: "testinging"}
    const stonks = await stockData()
    console.log(stonks)
    console.log("ho you do did")
    res.send(stonks)
};