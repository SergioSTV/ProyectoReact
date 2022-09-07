import Item from './Item.js';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const ItemList = ({info}) => {

    const { categoryId } = useParams();

    return (
      <>
        {
        info.length ?
          info.map((suple) => {
          
            if (categoryId === undefined) {
              return(<Link to={`../item/${suple.id}`}><Item showModal={false} suplement={suple} key={suple.id} /></Link>)
            }
          })
        : "Loading..."
        }
      </>
    )

}

export default ItemList;