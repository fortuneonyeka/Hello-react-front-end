import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css';


const NavBar = () => {
  return (
    <ul className="links">
      <li><NavLink to='/' className="link">Home</NavLink></li>
      <li><NavLink to='/greetings' className="link">Greet Me</NavLink></li>
    </ul>
   );
}
 
export default NavBar;