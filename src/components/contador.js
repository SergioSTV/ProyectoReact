import React, {useState} from "react";

function contador ({stock,initial}){
    let [count,setCount] = useState(initial);
    let [newStock,setNewStock] = useState(stock);

   
    function addclick(){
        if (count < newStock){
            setCount (count +1)
        }
    }

   
    function lessclick(){
        if (count >1){
            setCount (count -1)
        }
    }

    
    function addingToCart (){
        if (count <= newStock){
            setNewStock (newStock - count)
        alert("Producto agregado al carrito",count);
        setCount(initial)
        }
        else {
            alert("No hay stock");
        }
    }

    return (
        <div className >
            <h4>Nombre del producto</h4>
            <div className ="quantityButtonContainer d-flex justify-content-between">
                <button className ="quantityButton ms-2" onClick={lessclick}> - </button>
                <p className ="mt-2"> {count} </p>
                <button className ="quantityButton me-2" onClick={addclick}> + </button>
            </div>
            <button className="AddToCartButton" onClick={addingToCart}> Agregar Item</button>
            <p>Stock disponible: {newStock}</p>
        </div>
    )
}
export default contador;