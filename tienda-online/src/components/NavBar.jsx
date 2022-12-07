import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
return (
    <div className="row bg-dark">
        <div className="col-md-8 d-flex justify-content-end align-items-center">
        <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img src={"images/wendy-logo.png"} alt={"logo principal"} width= {80} /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div className="navbar-nav text-white">
        <a className="nav-link active text-white" aria-current="page" href="menu">MENÚ</a>
        <a className="nav-link text-white" href="locales">LOCALES</a>
        <a className="nav-link text-white" href="promociones">PROMOCIONES</a>
        <a className="nav-link text-white" href="wndys cafe">WENDY'S CAFÉ</a>
        <a className="nav-link text-white" href="hace tu pedido">HACE TU PEDIDO</a>
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