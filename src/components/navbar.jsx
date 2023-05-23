import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus
} from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  return (
    <nav className="navbar navbar-dark ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Blog Post App
        </Link>
        <Link to="/addPost">
          <button className="btn btn-outline-light" type="submit"><FontAwesomeIcon icon={faPlus} /></button>
        </Link>  
      </div>
    </nav>
  );
};

export default Navbar;
