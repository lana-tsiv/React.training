import React, { useState } from "react";

const Counter = (props) => {
  // const [value, setValue] = useState(props.value);
  const { value } = props;

  const formatValue = () => {
    return value === 0 ? "empty" : value;
  };

  const getBageClasses = () => {
    let classes = "badge m-2 ";
    classes += value === 0 ? "bg-warning" : "bg-primary";
    return classes;
  };

  const handleIncrement = () => {
    // console.log("handle Increment");
    // setValue((prevState) => prevState + 1);
    props.onIncrement(props.id);
  };

  const handleDecrement = () => {
    props.onDecrement(props.id);
    // console.log("handle Decrement");
    // setValue((prevState) => prevState - 1);
  };

  return (
    <div>
      {/* {props.children} */}
      <span>{props.name}</span>
      <span className={getBageClasses()}>{formatValue()}</span>
      <button className="btn btn-primary btn-sm m-2" onClick={handleIncrement}>
        +
      </button>
      <button className="btn btn-primary btn-sm m-2" onClick={handleDecrement}>
        -
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
