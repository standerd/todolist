import React from "react";
import "./listItem.css";

const listItem = props => {
  let itemArray = props.items;

  let item = itemArray.map((key, i) => {
    return (
      <div key={i} className="listItem">
        <ul>
          <li>{key}</li>
        </ul>
        <button onClick={props.remove} id={i} className="remove">
          X
        </button>
      </div>
    );
  });

  return <div>{item}</div>;
};

export default listItem;
