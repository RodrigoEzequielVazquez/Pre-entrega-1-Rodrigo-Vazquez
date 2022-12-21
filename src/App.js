import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import Inicio from "./components/Inicio";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Error404 from "./components/Error404";

function App() {
  return (
    <div>
      <BrowserRouter>
       <NavBar />
       <Routes>
          <Route path={"/"} element={<ItemListContainer/>} />
          <Route path={"/category/:id"} element={<ItemListContainer/>} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />}/>
          <Route path={"*"} element={<Error404/>} />
       </Routes>
       <Inicio />
       <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
