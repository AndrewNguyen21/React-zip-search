import React from "react";
import "./../App.css";
import SearchBar from "./SearchBar";
import ShowData from "./ShowData";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();

    this.state = { zipData: [] };
  }

  //API request
  getZipData = (zipcode) => {
    axios
      .get(`https://ctp-zip-api.herokuapp.com/zip/${zipcode}`)
      .then((res) => {
        this.setState({ zipData: res.data });
        this.success();
      })
      .catch((err) => {
        this.setState({ zipData: [] });
        this.fail();
      });
  };

  success = () => {
    console.log(this.state.cityData);
    document.getElementById("error").style.display = "none";
  };

  fail = () => {
    document.getElementById("error").style.display = "block";
    setTimeout(this.goodRes, 2000);
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Zip Code Search</h1>
          <p>Enter a Zip Code to find more info!</p>
          <SearchBar getZipData={this.getZipData} />
          <p id="error">Zip Code Not Found!</p>
          <ShowData zipData={this.state.zipData} />
        </div>
      </div>
    );
  }
}

export default App;
