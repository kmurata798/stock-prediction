import React, { Component } from "react";
import CompanyDataService from "../services/company.service";
import { Link } from "react-router-dom";

export default class CompaniesList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.retrieveCompanies = this.retrieveCompanies.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveCompany = this.setActiveCompany.bind(this);
    this.removeAllCompanies = this.removeAllCompanies.bind(this);
    this.searchName = this.searchName.bind(this);

    this.state = {
      companies: [],
      currentCompany: null,
      currentIndex: -1,
      searchName: ""
    };
  }

  componentDidMount() {
    this.retrieveCompanies();
  }

  onChangeSearchName(e) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName
    });
  }

  retrieveCompanies() {
    CompanyDataService.getAll()
      .then(response => {
        this.setState({
          companies: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveCompanies();
    this.setState({
      currentCompany: null,
      currentIndex: -1
    });
  }

  setActiveCompany(company, index) {
    this.setState({
      currentCompany: company,
      currentIndex: index
    });
  }

  removeAllCompanies() {
    CompanyDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchName() {
    CompanyDataService.findByName(this.state.searchName)
      .then(response => {
        this.setState({
          companies: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchName, companies, currentCompany, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name"
              value={searchName}
              onChange={this.onChangeSearchName}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchName}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Companies List</h4>

          <ul className="list-group">
            {companies &&
              companies.map((company, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveCompany(company, index)}
                  key={index}
                >
                  {company.name}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllCompanies}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentCompany ? (
            <div>
              <h4>Company</h4>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {currentCompany.name}
              </div>
              <div>
                <label>
                  <strong>Rating:</strong>
                </label>{" "}
                {currentCompany.rating}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentCompany.chosen ? "Chosen" : "Pending"}
              </div>
                {/* access page using /companies/:id */}
              <Link
                to={"/companies/" + currentCompany.id}
                className="badge badge-warning "
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Company...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}