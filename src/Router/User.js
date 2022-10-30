import React from "react";
import { NavLink } from "react-router-dom";
import Testpage from "../Altschool/pnation";
function Users() {
    return (
      <> 
      <section className="white">
       
        <section>
          <NavLink to="/">Home page</NavLink>
          <NavLink 
            to="/about"
          >
            About page
          </NavLink>
          <NavLink  style={({ isActive }) =>
              isActive ? { color: "red" } : { color: "black" }
            }
            to="/user"
          >
            Users Page
          </NavLink>
          {/* <NavLink to="/NotFound">NoPage</NavLink> */}
          </section>
          </section>

          <h1>List of Users</h1>
          {/* <PageApp/> */}
<Testpage/>        
</>

    );
  }

  export default Users;