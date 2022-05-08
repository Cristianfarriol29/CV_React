import React from "react";
import "./Education.scss";

function Education({ education }) {
  return (
    <div className="container">
      <h1 className="title">Formación académica</h1>

      <div className="container__card">
        <h2>2021-2022</h2>
        <p>
          FP- DAM (Desarrollo de aplicaciones multiplataforma) Centro de
          Formación Profesional, IFP Madrid.
        </p>

        <h2>2022</h2>
        <p>Bootcamp FullStack Developer UpgradeHub, Madrid</p>
      </div>
    </div>
  );
}

export default Education;
