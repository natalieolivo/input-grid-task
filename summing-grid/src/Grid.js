import React, { Component } from "react";
import GridBlock from "./GridBlock";
import "./Grid.css";

class Grid extends Component {
  constructor() {
    super();

    this.state = {};
  }

  validateStrings(inputValue) {
    if (typeof inputValue === "string") {
      if (inputValue.match(/^[0-9]*$/g) && inputValue !== "") {
        return (inputValue = parseInt(inputValue, 10));
      } else {
        return 0;
      }
    }
  }

  storeFieldValues(index, event) {
    let inputValue = this.validateStrings(event.target.value);

    this.setState(state => {
      return { [index]: parseInt(inputValue, 10) };
    });
  }

  render() {
    return (
      <section className="Grid">
        {Array.apply(null, { length: this.props.tiles }).map((event, i) => {
          return (
            <GridBlock
              key={i}
              contentType={i < this.props.tiles - 1 ? "input" : "sum"}
              onFieldUpdate={this.storeFieldValues.bind(this, i)}
              fieldValues={this.state}
            />
          );
        })}
      </section>
    );
  }
}

export default Grid;
