module.exports = app => {
    const stocks = require("../controllers/stocks.controller.js");
    
    var router = require("express").Router();

    router.get("/history", stocks.history);

    app.use("/api/stocks", router);
}