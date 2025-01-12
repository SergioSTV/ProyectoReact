import React, {useState} from 'react';
import ItemCount from '../../components/ItemCount.js';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useCart } from "../../context/CartContext.js"
import { Link } from "react-router-dom";

export const ItemDetail = (props) => {

    const {addItem, removeItem} = useCart();

    //Defino estado para el componente ItemCount
    const [counter, setCounter] = useState(1);

    const addCounter = () => {
        if (counter < props.stock){
        setCounter(counter + 1)
        } else {
        alert("LLego al máximo de stock de este producto")
        }
    }
    
    const removeCounter = () => {
        if (counter > 1){
        setCounter(counter - 1)
        } else {
        alert("LLego al mínimo de stock de este producto")
        }
    }

    const addToCart = () => {
      if (counter != 0){
        let item = {id: props.id, name: props.name, stockInCart: counter, priceInCart: (props.price*counter)};
        addItem( item );
      } else {
        alert("No se pueden agregar 0 unidades al carrito!");
      }
    }

    const removeFromCart = () => {
      removeItem( props.id );
    }

    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                {props.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <img src={props.pictureUrl} alt={props.name} title={props.name} />
              <p><strong>Unidades disponibles:</strong> {props.stock}</p>
              <p><strong>Precio por unidad:</strong> {props.price}</p>
          </Modal.Body>
          <Modal.Footer>
            <ItemCount value={counter} onAddCounter={addCounter} onRemoveCounter={removeCounter} />
            <Button onClick={addToCart}>Agregar al carrito</Button>
            <Button onClick={removeFromCart}>Remover del carrito</Button>
            <Link to="/"><Button>Volver al Catálogo/Seguir comprando</Button></Link>
            <Link to="/Cart"><Button>Ir al Carrito</Button></Link>
          </Modal.Footer>
        </Modal>
    );

}

export default ItemDetail;