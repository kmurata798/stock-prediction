const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
require('dotenv').config();
const axios = require('axios');

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
// bodyParser has been added back into the methods: express.json() and express.urlencoded()
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Give this file access to the mongo models we created
const db = require("./app/models");
// Initialize MongoDB connection
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


// simple route
app.get("/", (req, res) => {
  res.json([
    { Company: "Apple", Rating: "5", name: "AAPL" },
    { Company: "Twitter", Rating: "3", name: "TWTR" },
    { Company: "Target", Rating: "4", name: "TGT" },
    { Company: "Amazon", Rating: "4", name: "AMZN" }]
  );
});

// import app/routes from the app model initialized earlier
require("./app/routes/company.routes")(app);
require("./app/routes/stocks.routes")(app);

// async function getStockData() {
//   const apiKey = process.env.ALPHAVANTAGE_API_KEY
//   const baseUrl = 'https://www.alphavantage.co/query'
//   const functionType = 'TIME_SERIES_DAILY'
//   const outputsize = 'compact'
//   const symbol = 'MSFT'

//   try {
//     const response = await axios.get(baseUrl, {
//       params: {
//         function: functionType,
//         symbol: symbol,
//         outputsize: outputsize,
//         apikey: apiKey,
//         datatype: 'json'
//       }
//     })

//     return response.data
//   } catch (err) {
//     console.log(err)
//   }
// }

// // http://localhost:3000/stonks
// app.get('/stonks', async (req, res) => {
//   const stonks = await getStockData()
//   console.log(stonks)
//   res.send(stonks)
// });

// set port, listen for requests (Use environment variable or default 8080 port)
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});