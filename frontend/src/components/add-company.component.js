import React, { Component } from "react";
import CompanyDataService from "../services/company.service";


export default class AddTutorial extends Component {
    constructor(props) {
      super(props);
      this.onChangeName = this.onChangeName.bind(this);
      this.onChangeRating = this.onChangeDescription.bind(this);
      this.saveCompany = this.saveCompany.bind(this);
      this.newCompany = this.newCompany.bind(this);
  
      this.state = {
        id: null,
        name: "",
        rating: "", 
        chosen: false,
  
        submitted: false
      };
    }
  
    onChangeName(e) {
      this.setState({
        title: e.target.value
      });
    }
  
    onChangeRating(e) {
      this.setState({
        rating: e.target.value
      });
    }
  
    saveCompany() {
      var data = {
        name: this.state.name,
        rating: this.state.rating
      };
  
      CompanyDataService.create(data)
        .then(response => {
          this.setState({
            id: response.data.id,
            name: response.data.name,
            rating: response.data.rating,
            chosen: response.data.chosen,
  
            submitted: true
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  
    newCompany() {
      this.setState({
        id: null,
        name: "",
        rating: "",
        chosen: false,
  
        submitted: false
      });
    }
  
    render() {
        return (
            <div className="submit-form">
            {this.state.submitted ? (
                <div>
                    <h4>You submitted successfully!</h4>
                    <button className="btn btn-success" onClick={this.newCompany}>
                        Add
                    </button>
                </div>
            ) : (
                <div>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            required
                            value={this.state.name}
                            onChange={this.onChangeName}
                            name="name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="rating">Rating</label>
                        <input
                            type="text"
                            className="form-control"
                            id="rating"
                            required
                            value={this.state.rating}
                            onChange={this.onChangeRating}
                            name="rating"
                        />
                    </div>

                    <button onClick={this.saveCompany} className="btn btn-success">
                        Submit
                    </button>
                </div>
            )}
            </div>
        );
    }
  }