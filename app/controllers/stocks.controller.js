

let url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=88724DTSJ93YB5VN'

const axiosOptions = {
    headers: {
        "User-Agent": "request"
    }
}

exports.history = (req, res) => {
    let data = {test: "testinging"}
    return res.status(200).json(data);
    console.log(req.body.name);
}