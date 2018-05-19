import React, { Component } from 'react';
import Counter from './Counter';
import DropdownIncrease from './DropdownIncrease';

import { connect } from 'react-redux';
import { incrementUpdated, increaseCounter } from '../actions';

class Calculator extends Component {

  changeIncrease(value) {
    const increaseSelected = parseInt(value, 10);
    this.props.incrementUpdated(increaseSelected)
  }

  changeCounter(value) {
    const { counter, increaseSelected } = this.props;
    var newValue = counter+(increaseSelected*value);
    this.props.increaseCounter(newValue)
  }

  render() {
    const { increaseSelected } = this.props;
    return (
      <div className="Calculator">
        <DropdownIncrease
         changeIncrease={(event) => this.changeIncrease(event.target.value)}
         selected={increaseSelected}
         />
        <Counter
          changeCounter={this.changeCounter.bind(this)}
          increaseSelected={increaseSelected}
          counter={this.props.counter}
          />
      </div>
    )
  }
}

function mapStateToProps({ calculator }) {
  const { counter, increaseSelected } = calculator;
  return { counter, increaseSelected }
}

export default connect(mapStateToProps, { incrementUpdated, increaseCounter })(Calculator);
