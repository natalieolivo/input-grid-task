import React, { Component } from "react";
import SumBlock from "./SumBlock";

import "./GridBlock.css";

class GridBlock extends Component {
  setGridView() {
    if (this.props.contentType === "input") {
      return (
        <input
          className="Gridblock-input"
          onChange={this.props.onFieldUpdate}
          type="text"
        />
      );
    } else {
      return (
        <SumBlock className="sum-block" fieldValues={this.props.fieldValues} />
      );
    }
  }

  render() {
    return <section className="Gridblock">{this.setGridView()}</section>;
  }
}

export default GridBlock;
