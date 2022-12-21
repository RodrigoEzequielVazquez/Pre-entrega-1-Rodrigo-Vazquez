import React from "react";
import {Link, NavLink} from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
return (
    <div className="row bg-dark">
        <div className="col-md-8 d-flex justify-content-end align-items-center">
        <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src={"/images/wendy-logo.png"} alt={"logo principal"} width= {80} /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div className="navbar-nav text-white">
        <NavLink className="nav-link text-white" to={"/category/carne"}>Carne</NavLink>
        <NavLink className="nav-link text-white" to={"/category/pollo"}>Pollo</NavLink>
        <NavLink className="nav-link text-white" to={"/category/ensaladas"}>Ensaladas</NavLink>
        <NavLink className="nav-link text-white" to={"/category/postres"}>Postres</NavLink>
      </div>
    </div>
  </div>
</nav>
        </div>
        <div className="col-md-4 d-flex justify-content-end align-items-center">
            <CartWidget />
        </div>
       
    </div>

    
   )
}

export default NavBar