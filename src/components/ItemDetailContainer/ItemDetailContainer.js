import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Item from '../ItemListContainer/Item.js';
import { Link } from "react-router-dom";
import { getFirestore } from '../../firebase';
// import { doc, getDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

export const ItemDetailContainer = (props) => {

    const { itemId } = useParams();

    const [suplements, setSuplements] = useState([]);


    useEffect(() => {

      
      const db = getFirestore();
            
      getDocs(collection(db, "items"))
        .then((snapshot) => {
           setSuplements(snapshot.docs.map( (doc) => doc.data() ) );
           
        });
    }, []);
  
    return (
        <>
          {
          suplements.length ?
          suplements.map((suple) => {
              if (itemId === suple.id){
                return(<Link to={`../item/${suple.id}`}><Item showModal={true} suplement={suple} key={suple.id} /></Link>)
              }
            })
          : "Loading..."
          }
        </>
      )
}

export default ItemDetailContainer;
