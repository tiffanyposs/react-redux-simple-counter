import React, { Component } from 'react';

class Counter extends Component {

  render() {
    return (
      <div className="Counter">
        <div className="flex-row flex-center">
          <div>
            <button onClick={ () => this.props.changeCounter(-1) }>
              <span>-</span>
            </button>
          </div>

          <div className="counter-number flex-row flex-center">
            <h2>{this.props.counter}</h2>
          </div>

          <div>
            <button onClick={ () => this.props.changeCounter(1) }>
              <span>+</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
