import http from "../http-common";

// We create a data service that uses axios object to send HTTP requests.
// import http-common.js to have access to Axios functionality 
class CompanyDataService {
  getAll() {
    return http.get("/companies");
  }

  get(id) {
    return http.get(`/companies/${id}`);
  }

  create(data) {
    return http.post("/companies", data);
  }

  update(id, data) {
    return http.put(`/companies/${id}`, data);
  }

  delete(id) {
    return http.delete(`/companies/${id}`);
  }

  deleteAll() {
    return http.delete(`/companies`);
  }

  findByName(name) {
    return http.get(`/companies?name=${name}`);
  }
}

export default new CompanyDataService();