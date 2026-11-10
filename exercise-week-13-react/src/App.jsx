import React, { useState } from "react";
import MainTab from "./components/MainTab";

const App = () => {
  const [index, setIndex] = useState(1);

  return (
    <>
      <header>
        <h1>Tab Components With React!</h1>
        <div>
          <span onClick={() => setIndex(1)}>Tab Number 1</span>
          <span onClick={() => setIndex(2)}>Tab Number 2</span>
          <span onClick={() => setIndex(3)}>Tab Number 3</span>
          <span onClick={() => setIndex(4)}>Tab Number 4</span>
        </div>
      </header>
      <main>
        <MainTab index={index} />
      </main>
    </>
  );
};

export default App;
