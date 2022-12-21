import React from "react";
import { useState } from "react";

const ItemCount = ({stockItems}) => {
    const [counter, setCounter] = useState(1);
    const [stock, setStock] = useState(stockItems);
     
    const aumentarStock = () =>{
        if (counter < stock)
        setCounter(counter + 1);
    }

    const disminuirStock = () =>{
        if (counter > 1){
            setCounter(counter - 1);
        }
    }

    const onAdd = () => {
        if  (counter <= stock) {
        setStock(stock - counter);
        setCounter(0);
        alert("Agregaste: " + counter + "productos");
        }
    }

    return (
        <div className="container text-center">
            <div ClassName="crow mb-3">
                <div className="col-md-12">
                     <div className="btn-group" role="group" aria-label="Basic outlined example">
                         <button type="button" className="btn btn-outline-primary" onClick={disminuirStock}>-</button>
                         <button type="button" className="btn btn-outline-primary">{counter}</button>
                         <button type="button" className="btn btn-outline-primary" onClick={aumentarStock}>+</button>
                     </div>
                 </div>
             </div>
            <div className="rowr">
                <div className="col-md-12">
                <button type="button" className="btn btn-outline-primary" onClick={onAdd}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;