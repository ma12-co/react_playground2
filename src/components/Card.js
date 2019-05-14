import React from "react";

export default function Card(props) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Age: {props.age}</p>
    </div>
  );
}
