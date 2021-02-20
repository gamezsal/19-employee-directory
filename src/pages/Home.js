import React, { Component } from "react";
import Table from "../components/Table";
import API from "../utils/API";

class Home extends Component {
  state = {
    results: [],
    nameFilter: "",
  };

  componentDidMount() {
    API.getEmployees()
      .then((res) => this.setState({ results: res.data.results }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="container-fluid text-center bg-dark border-bottom border-thick">
        <form>
          <label>
            <input
              type="text"
              name="search"
              value={this.state.nameFilter}
              onChange={(e) => {
                this.setState({ ...this.state, nameFilter: e.target.value });
              }}
            />
          </label>
         
        </form>
        {this.state.results.length ? (
          <Table
            results={this.state.results}
            setResults={(results) => this.setState({...this.state, results}) }
            nameFilter={this.state.nameFilter}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Home;
