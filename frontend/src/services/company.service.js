import http from "../http-common";

// We create a data service that uses axios object to send HTTP requests.
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

  findByTitle(title) {
    return http.get(`/companies?title=${title}`);
  }
}

export default new CompanyDataService();