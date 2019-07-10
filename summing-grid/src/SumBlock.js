import React, { Component } from "react";
import "./Sumblock.css";

class SumBlock extends Component {
  constructor(props) {
    super();
    this.state = { sum: 0 };
  }

  add(fields) {
    let sum = 0;
    for (let field in fields) {
      sum += parseInt(fields[field], 10);
    }
    return sum;
  }

  render() {
    return <p className="Sumblock">{this.add(this.props.fieldValues)}</p>;
  }
}

export default SumBlock;
