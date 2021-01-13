import React, { Component } from "react";

export class ShowItem extends Component {
  render() {
    const {
      LocationText,
      State,
      Long,
      Lat,
      TotalWages,
      EstimatedPopulation,
    } = this.props.zipData;
    return (
      <div className="dataContainer">
        <header className="headerContainer">{LocationText}</header>
        <div className="innerDataContainer">
          <p>
            <li>State: {State}</li>
            <li>
              Location: ({Lat}, {Long})
            </li>
            <li>Population (estimated): {EstimatedPopulation}</li>
            <li>Total Wages: {TotalWages}</li>
          </p>
        </div>
      </div>
    );
  }
}

export default ShowItem;
