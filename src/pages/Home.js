import React, { Component } from "react";
import Table from "../components/Table";
import Search from "../components/Search";
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
      <div>
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
          <input className="submitBtn" type="submit" value="Submit" />
        </form>
        {this.state.results.length ? (
          <Table
            results={this.state.results}
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
