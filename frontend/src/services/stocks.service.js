import http from "../http-common";

class StocksDataService {
    getStocks(values) {
      console.log(values)
      return http.get("/stocks/history", {params: values} );
    }
    predict(values){
      console.log(values)
      return http.get("/stocks/predict", {params: values} );
    }
    create(values) {
      console.log(values)
      return http.post("/stocks/create", {params: values} );
    }

}

export default new StocksDataService();