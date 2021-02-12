import React, { Component } from "react";
import Table from "../components/Table";
import API from "../utils/API";

class Home extends Component {
  state = {
    results: [],
  };

  componentDidMount() {
    API.getEmployees()
    .then((res) => {
      this.setState({ results: res.data.results });
      console.log(res.data.results);
    });
  }

  render() {
    return (
      <div>
        {this.state.results.length ? (
          <Table results={this.state.results} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Home;
