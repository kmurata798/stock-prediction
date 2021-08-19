// import the url for mongoDB connection
const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
// import the mongo model: companies
db.companies = require("./company.model.js")(mongoose);
db.stocks = require("./stocks.model.js")(mongoose);


module.exports = db;