import React from "react";
// import "..asset/styles/greetings.css";

// creating listitems
function ListItems() {
  return <ol><li>good</li>
  <li>Better</li>
  <li>Best</li></ol>;
}
// creating a component.....
function Greetings() {
  return <p>Hello Victor! gudmorning boss;
  <ListItems /></p>
}
export default Greetings;
