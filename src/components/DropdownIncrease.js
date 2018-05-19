import React from 'react';
import Repeat from './common/Repeat';

const DropdownIncrease = (props) => {
  return (
    <div className="DropdownIncrease">
      <select className="custom-select" onChange={props.changeIncrease} value={props.selected}>
        <Repeat numTimes={10}>
          {(index) => <option key={index} value={index+1}>{index+1}</option>}
        </Repeat>
      </select>
    </div>
  );
}

export default DropdownIncrease;
