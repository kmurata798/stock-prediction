// 1 Set up the api url we want to use
const stockIntradayUrl = (func, symbol, interval) => `https://www.alphavantage.co/query?function=${func}&symbol=${symbol}&interval=${interval}&apikey=88724DTSJ93YB5VN`;

module.exports = {
    stockIntradayUrl
}