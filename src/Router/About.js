import React from "react";
import { NavLink } from "react-router-dom";


function About() {
    return (
      <>
      <section className="white">
        
        <section>
          <NavLink to="/">Home page</NavLink>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "red" } : { color: "black" }
            }
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
       
      <h1>About page</h1>
        <p>i am in the seconday page</p>

      </>
    );
  }

  export default About;