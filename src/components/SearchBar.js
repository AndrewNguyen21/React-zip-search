import React from "react";

class SearchBar extends React.Component {
  state = {
    zipcode: "",
    noEntry: true,
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.getZipData(this.state.zipcode);

    if (this.state.zipcode === "") {
      this.setState({ noEntry: true });
    } else {
      this.setState({ noEntry: false });
    }
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, isEmpty: true });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="zipcode"
            value={this.state.zipcode}
            onChange={this.onChange}
            placeholder={
              this.state.noEntry ? "Enter Zip Code..." : this.state.zipcode
            }
          />
          <input className="btn" type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
