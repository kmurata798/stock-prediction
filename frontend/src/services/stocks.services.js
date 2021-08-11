import http from "../http-common";

class StocksDataService {
    getHistory() {
      return http.get("/history");
    }

}

export default new StocksDataService();