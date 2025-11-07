import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("construktor")
  }

  componentDidMount() {
    this.setState({count: this.state.count = 10})
    console.log("componentDidmount")
  }

  componentDidUpdate() {
    if(this.state.count === 10) {
      this.setState({count : 0})
    }
    console.log("componentDidUpdate")
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button
          className="p-4 border border-gray-400"
          onClick={() => {
            this.setState({count: this.state.count + 1})
          }}
        >
          +
        </button>
        {console.log("render")}
      </div>
    );
  }
}

export default Counter;
