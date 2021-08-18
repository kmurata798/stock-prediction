import http from "../http-common";

class StocksDataService {
    getStocks(values) {
      console.log(values)
      return http.get("/stocks/history", {params: values} );
    }

}

export default new StocksDataService();