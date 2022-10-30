import React from "react";
// create our root component => App component
function List() {
  const items = [
    "Juliet",
    "Blesed",
    "Esther",
    "Sunday",
    "Emmanuel",
    "Hendrick",
    "Joshua",
  ];
  // creating a new list with map
  const listItems = items.map((item) => {
    return <li key={item}>{item}</li>;
  });
  return <ol>
    {listItems}
  </ol>
}

export default List;
