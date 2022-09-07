import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useCart } from "../../context/CartContext.js"
import { Link } from "react-router-dom";
import { getFirestore } from '../../firebase';

import { collection, addDoc } from "firebase/firestore";

export const Cart = (props) => {

    const {cart, removeItem, clearCart} = useCart();

    const removeFromCart = (evt) => {
      removeItem( evt.target.value );
    }

    let total = 0;

    const divStyle = { display: "flex", marginBottom: 8 }
    const labelStyle = { marginRight: 4 }
    const divItemStyle = { display: "flex", flexFlow: "row wrap", justifyContent: "center", alignItems: "stretch"}
    const ItemStyle = { paddingRight: 5, paddingTop: 5}
  
    const inputs = [
      {
        label: "Nombre",
        name: "name"
      },
      {
        label: "Telefono",
        name: "phone"
      },
      {
        label: "Email",
        name: "email"
      },
    ];
  
    const [formFields, setFormFields] = useState({
      name: "",
      phone: "",
      email: ""
    });
  
    function handleChange(evt) {
      setFormFields({ ...formFields, [evt.target.name]: evt.target.value });
    }
  
    function onSubmit(event) {
      alert(
        `Se ha emitido una orden de compra a nombre de ${formFields.name}. Teléfono: ${formFields.phone} Email: ${formFields.email} por el valor total de ${total}.`
      );

      const order = {
        Buyer: {Name: formFields.name, Phone: formFields.phone, Email: formFields.email},
        Items: cart,
        Total: total
      };

      const db = getFirestore();

      //agregar una orden a la coleccion
      const ordersCollection = collection(db, "orders");

      addDoc(ordersCollection, order)
        .then(({ id }) => console.log(id));

      clearCart();

    };
  

    return (

      <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
               Carrito
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <>
              <p>Los siguiente productos estan pendientes de compra:</p>
              {
              cart.length ?
              cart.map((suple) => {
                  total = total + suple.priceInCart;
                  return(
                    <>
                    <div style={divItemStyle}>
                    <p style={ItemStyle}><strong>Nombre:</strong> {suple.name} | <strong>Unidades:</strong> {suple.stockInCart} | <strong>Precio total:</strong> {suple.priceInCart} </p>
                    <Button value={suple.id} onClick={removeFromCart}>Remover Item</Button>
                    </div>
                    </>

                  )
              })
              : <p>El carrito esta vacío.</p>
              }
              <p className="total"><strong>COSTO TOTAL: </strong>{total}</p>

              <div style={divStyle}>
                <h4>Datos del comprador:</h4>
                {inputs.map((input) => (
                  <div key={input.name} >
                    <label style={labelStyle}>{input.label}</label>
                    <input
                      value={formFields[input.name]}
                      name={input.name}
                      type="text"
                      onChange={handleChange}
                    />
                  </div>
                ))}
              </div>
              </>
              
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={clearCart}>Vaciar carrito</Button>
            <Button onClick={onSubmit} disabled={!(formFields.name && formFields.phone && formFields.email)}>Terminar compra</Button>
            <Link to="/"><Button>Volver al Catálogo/Seguir comprando</Button></Link>
          </Modal.Footer>
        </Modal>
    );

}

export default Cart;