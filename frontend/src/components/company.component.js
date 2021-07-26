import React, { Component } from "react";
import CompanyDataService from "../services/company.service";

export default class Company extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeRating = this.onChangeRating.bind(this);
        this.getCompany = this.getCompany.bind(this);
        this.updateChosen = this.updateChosen.bind(this);
        this.updateCompany = this.updateCompany.bind(this);
        this.deleteCompany = this.deleteCompany.bind(this);

        this.state = {
            currentCompany: {
                id: null,
                Name: "",
                rating: "",
                chosen: false
            },
            message: ""
        };
    }

    componentDidMount() {
        this.getCompany(this.props.match.params.id);
    }

    onChangeName(e) {
        const name = e.target.value;

        this.setState(function(prevState) {
            return {
                currentCompany: {
                ...prevState.currentCompany,
                name: name
                }
            };
        });
    }

    onChangeRating(e) {
        const rating = e.target.value;
        
        this.setState(prevState => ({
            currentCompany: {
                ...prevState.currentCompany,
                rating: rating
            }
        }));
    }

    getCompany(id) {
        CompanyDataService.get(id)
        .then(response => {
            this.setState({
                currentCompany: response.data
            });
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    updateChosen(status) {
        var data = {
            id: this.state.currentCompany.id,
            name: this.state.currentCompany.name,
            rating: this.state.currentCompany.rating,
            chosen: status
        };

        CompanyDataService.update(this.state.currentCompany.id, data)
        .then(response => {
            this.setState(prevState => ({
                currentCompany: {
                    ...prevState.currentCompany,
                    chosen: status
                }
            }));
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    updateCompany() {
        CompanyDataService.update(
            this.state.currentCompany.id,
            this.state.currentCompany
        )
        .then(response => {
            console.log(response.data);
            this.setState({
                message: "The company was updated successfully!"
            });
        })
        .catch(e => {
            console.log(e);
        });
    }

    deleteCompany() {    
        CompanyDataService.delete(this.state.currentCompany.id)
            .then(response => {
                console.log(response.data);
                this.props.history.push('/companies')
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        const { currentCompany } = this.state;

        return (
        <div>
            {currentCompany ? (
            <div className="edit-form">
                <h4>Company</h4>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={currentCompany.name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rating">Rating</label>
                        <input
                            type="text"
                            className="form-control"
                            id="rating"
                            value={currentCompany.rating}
                            onChange={this.onChangeRating}
                        />
                    </div>
        
                    <div className="form-group">
                        <label>
                            <strong>Status:</strong>
                        </label>
                        {currentCompany.chosen ? "Chosen" : "Pending"}
                    </div>
                </form>
    
                {currentCompany.chosen ? (
                    <button
                        className="badge badge-primary mr-2"
                        onClick={() => this.updateChosen(false)}
                    >
                        Don't choose
                    </button>
                ) : (
                    <button
                        className="badge badge-primary mr-2"
                        onClick={() => this.updateChosen(true)}
                    >
                        Choose
                    </button>
                )}
    
                <button
                    className="badge badge-danger mr-2"
                    onClick={this.deleteCompany}
                >
                    Delete
                </button>
    
                <button
                    type="submit"
                    className="badge badge-success"
                    onClick={this.updateCompany}
                >
                    Update
                </button>
                <p>{this.state.message}</p>
            </div>
            ) : (
            <div>
                <br />
                <p>Please click on a Company...</p>
            </div>
            )}
        </div>
        );
    }
}