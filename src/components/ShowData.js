import React, { Component } from "react";
import ShowItem from "./ShowItem";

export class ShowData extends Component {
  render() {
    return this.props.zipData.map((zip) => (
      <ShowItem key={zip.RecordNumber} zipData={zip} />
    ));
  }
}

export default ShowData;
