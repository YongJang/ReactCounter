import React from 'react';

const Controlls = (props) => {
  const up = 'plus';
  const down = 'minus';
  const multiply = 'multiply';
  const divide = 'divide';

  return (
    <div>
      <button onClick = {props.clickUp}>+</button>
      <button onClick = {props.clickDown}>-</button>
      <button onClick = {props.clickMultiply}>x2</button>
      <button onClick = {props.clickDivide}>÷2</button>
    </div>
  );
}

export default Controlls;
