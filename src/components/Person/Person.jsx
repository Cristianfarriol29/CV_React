import React from "react";
import "./Person.scss";

export default function Person({ person }) {
  return (
    <div className="person">
      <img src="./assets/cv.jpg" className="logo" alt="logo" />
      <ul className="list">
        <li className="item">{person.name}</li>
        <li className="item">{person.adress}</li>
        <li className="item">{person.city}</li>
        <li className="item">{person.email}</li>
        <li className="item">{person.bithDate}</li>
        <li className="item">{person.gitHub}</li>
      </ul>
    </div>
  );
}
