import React from "react";
import { NavLink } from "react-router-dom";



const NoPage = () => {
    return (
      <>
        <section className="white">
            <NavLink to="/">Home page</NavLink>
            {/* <NavLink 
              to="/about"
            >
              About page
            </NavLink>
            <NavLink 
              to="/user"
            >
              User Page
            </NavLink>
            <NavLink  style={({ isActive }) =>
                isActive ? { color: "red" } : { color: "black" }
              } to="/Not Found">NoPage</NavLink>
               */}
              
        </section>
        <hr/>
           <h1>404 Error page Not Found</h1>
              </>
      );
    }
    
  export default NoPage;