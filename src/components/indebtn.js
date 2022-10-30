import React, { useState } from "react";

function UserGame() {
// state
const [counter, setCounter] = useState (0);
// handle increament....
const handleIncrement = (event) => {
    event.preventDefault();
    setCounter (prev => prev + 1);
};
// handle decrement
const handleDecrement = (event) => {
    event.preventDefault();
    setCounter (prev => prev - 1);
};
// Render
    return (
    <section className="conter-container">
        <div className="conter-count">{counter}</div>
       <button className="action-btn" onClick={handleIncrement}>Increment</button>
       <button className="action-btn" onClick={handleDecrement}>Decrement</button>
      </section>
    );
   
  }

  export default UserGame;