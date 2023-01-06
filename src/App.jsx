import "./App.css";

import React, { useState } from "react";

function App() {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });

  function handleNoClick() {
    // Generate a random number between 0 and 1
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    // Ensure that the "No" button is not positioned outside of the screen
    if (x + 50 > window.innerWidth) {
      x = window.innerWidth - 50;
    }
    if (y + 50 > window.innerHeight) {
      y = window.innerHeight - 50;
    }
    console.log("fdf", x, y);
    // Set the position of the "No" button to the random x and y values
    setNoButtonPosition({ x, y });
  }

  function handleYesClick() {
    alert("YOU'RE THE BEST GIRL EVER ,KHADIJAH ❤");
  }

  return (
    <div className="App-header">
      {/* Display a cat GIF */}
      <img src="cat.gif" alt="cat" />

      <div>Do you wanna hangout with me ?</div>

      {/* Display the "Yes" button */}
      <button className="bottone1" onClick={handleYesClick}>
        Yes
      </button>

      <div
        class="scene"
        style={{ position: "absolute", left: noButtonPosition.x, top: noButtonPosition.y }}
        onClick={handleNoClick}
      >
        <div class="cube">
          <span class="side top">Yes</span>
          <span class="side front">No</span>
        </div>
      </div>

      {/* Display the "No" button at the position specified by noButtonPosition */}
      {/* <button
        style={{ position: "absolute", left: noButtonPosition.x, top: noButtonPosition.y }}
        onClick={handleNoClick}
      >
        No
  </button>*/}
    </div>
  );
}

export default App;
