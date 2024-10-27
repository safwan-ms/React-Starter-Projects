import React from "react";
import { accordionData } from "./utils/content";
import Accordian from "./components/Accordian";

const App = () => {
  return (
    <div className="container">
      {accordionData.map(({ title, content }) => (
        <Accordian title={title} content={content} />
      ))}
    </div>
  );
};

export default App;
