import React from "react";
import { NavLink } from "react-router-dom";



function Home() {
  return (
    <>
    <section className="white">
      <section>
        <NavLink  style={({ isActive }) =>
            isActive ? { color: "red" } : { color: "black" }
          } to="/">Home page</NavLink>
        <NavLink 
          to="/about"
        >
          About page
        </NavLink>
        <NavLink 
          to="/user"
        >
          Users Page
        </NavLink>
        {/* <NavLink to="/Not Found">NoPage</NavLink> */}

        </section>
        
    </section>
    <h1>Home page</h1>
    <p>i am in the first page</p>
    
    </>
  );
}

export default Home;