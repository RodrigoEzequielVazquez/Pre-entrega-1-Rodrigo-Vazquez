import React from "react";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import Inicio from "./components/Inicio";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="container-fluid">
      <NavBar />
      <ItemListContainer greeting={"Registrate para poder comprar online"} />
      <Inicio />
      <Footer />
    </div>
  );
}

export default App;
