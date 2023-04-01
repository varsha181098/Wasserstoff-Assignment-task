import React from "react";
import "../Styles/Distributes.css"
function Distributes(props) {
  // earning sales  and purchases
  return (
    <div className="earning-purchases">
      <div className="totallearnicon"style={{backgroundColor:`${props.bg}`}}>
        <div>{props.icon}</div>
      </div>
      <div className="total-earn">
        <p className="heading">{props.title}</p>
        <p className="count">{props.count}</p>
      </div>
    </div>
  );
}

export default Distributes;
