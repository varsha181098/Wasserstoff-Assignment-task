import React from "react";
import "../Styles/ActiveNewUser.css"
function ActiveNewUser(props) {
  return (
    <div className="active">
      <div
        className="active-users"
        style={{
          background: `conic-gradient(${props.color} ${props.percentage},lightgray 25%)`,
        }}
      >
        <div style={{ color: "#383874", fontWeight: "400" }}>
          {props.percentage}
        </div>
      </div>
      <p  style={{ paddingLeft: "1rem", color: "#383874", fontWeight: "400" }}>
        <span className="active-para1">{props.title}</span>
        <br />
        <span className="active-para1">{props.user}</span>
      </p>
    </div>
  );
}
export default ActiveNewUser;
