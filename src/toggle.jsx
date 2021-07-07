import React from "react";

export class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    // https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(param) {
    console.log(param);
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
      <button onClick={this.handleClick.bind(this, "param")}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}
