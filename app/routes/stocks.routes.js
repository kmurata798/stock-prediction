module.exports = app => {
    const stocks = require("../controllers/stocks.controller.js");
    var router = require("express").Router();

    router.get("/stonks", stocks.getStockData);

    app.use("/api/stocks", router);
}