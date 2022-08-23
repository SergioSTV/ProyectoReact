import React from 'react'
import ItemCount from '../Counter/ItemCount';

import { useEffect, useState } from "react";
import ItemList from '../ItemList/ItemList';

const jpg = 'G:\fitcommerce\imagenes\suple.png';

const items = [
	{ id:1, title:'Creatina', price:5000.00, stock:1, pictureUrl:jpg},
	{ id:2, title:'Proteína', price:6500.00, stock:19, pictureUrl:jpg},
	{ id:3, title:'Colágeno', price:1500.00, stock:4, pictureUrl:jpg},
	
]

const task = new Promise((res, rej) => {
	setTimeout(() => res(items), 2000)
});

export default function ItemListContainer() {
	const [ itemlist, setItemlist ] = useState([]);

	useEffect(()=>{
		task.then(res => setItemlist(res), err => setItemlist(err));
		console.log(itemlist);
	}, [itemlist])

	return <div className="item-list-container">
		<ItemList items={itemlist} />
	</div>
}