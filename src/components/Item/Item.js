import React, {useState} from 'react';
import ItemDetail from '../../components/ItemDetailContainer/ItemDetail.js';
import Button from 'react-bootstrap/Button';

export const Item = ({suplements, showModal}) => {

    const [modalShow, setModalShow] = useState(showModal);

    return (
        <div className="item" id={suplements.name}>
           <div>
               <img src={suplements.pictureUrl} alt={suplements.name} title={suplements.name} />
               <div>
                    <div>
                        <h3>{suplements.name}</h3>
                        <p><strong>Precio:</strong> ${suplements.price}</p>

                        <>
                        <Button variant="primary" onClick={() => setModalShow(true)}>Ver detalles</Button>
                        <ItemDetail
                        id={suplements.id}
                        pictureUrl={suplements.pictureUrl}
                        name={suplements.name}
                        stock={suplements.stock}
                        price={suplements.price}
                        show={modalShow} onHide={() => setModalShow(false)} />
                        </>
                        
                    </div>
               </div>
           </div>
           </div>      
    )
};

export default Item;