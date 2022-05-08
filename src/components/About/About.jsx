import React from "react";
import "./About.scss";

function About({ person }) {
  return (
    <div className="container">
      <h1 className="title">Información personal </h1>
      <div className="about">
        <p>
          Soy Argentino, tengo 29 años y después de 8 años en la venta, elegí la
          profesión de desarrollador porque soy una persona creativa y en este
          mundo encontré una vía donde poder expresarme y desarrollar mis ideas
          y así transformarlas en aplicaciones que brindaran soluciones. El
          desarrollo de aplicaciones me llena de vida, estoy disfrutando mucho
          este proceso y estoy ansioso por demostrarle a la empresa que apueste
          por mi, lo mucho que le puedo aportar al equipo!
        </p>
      </div>
    </div>
  );
}

export default About;
