import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail";

const getItems = new Promise((res,rej) => {
    setTimeout(() => res({ id:1, title:'Creatina', price:5000.00, stock:1, pictureUrl:jpg}), 2000);
})

export default function ItemDetailContainer() {
	const [ item, setItem ] = useState({});
	const { id } = useParams();

	useEffect(() => {
        getProductById(parseInt(id)).then(res => setItem(res))
	},[id])

	return <ItemDetail {...item} />
}