import "./App.scss";
import React, { useState } from "react";
import Education from "./components/Education/Education";
import { CV } from "./CV";
import Person from "./components/Person/Person";
import Experience from "./components/Experience/Experience";
import About from "./components/About/About";

const { person, education, experience, habilities } = CV;

function App() {
  const [component, setComponent] = useState("education");

  return (
    <div className="App">
      <header className="App-header">
        <Person person={person} />
      </header>
      <nav>
        <button
          class="btn-components"
          onClick={() => setComponent("education")}
        >
          Education
        </button>
        <button
          class="btn-components"
          onClick={() => setComponent("experience")}
        >
          Experience
        </button>
        <button class="btn-components" onClick={() => setComponent("about")}>
          About me
        </button>
      </nav>
      <div className="container-app">
        {component === "education" ? (
          <Education education={education} />
        ) : component === "experience" ? (
          <Experience experience={experience} />
        ) : (
          component === "about" && <About person={person} />
        )}
      </div>
    </div>
  );
}

export default App;
