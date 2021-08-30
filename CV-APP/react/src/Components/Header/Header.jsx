import React from "react";
import './Header.css';
import {
    Link
  } from "react-router-dom";
  

const Header = () => {
    return(
        <div className="header-container">
           <h1 className="my-name"id="my-name">DELIA DANUT</h1>
           <nav>
               <Link to="/Home"><button>HOME</button></Link>
               <Link to="/CV"><button>My CV</button></Link>
               <Link to="/ShowOffPage"><button>Show Off Page</button></Link>
               <Link to="/Contact"><button>Contact</button></Link>
      
           </nav>
        </div>
    )
}
export default Header;
