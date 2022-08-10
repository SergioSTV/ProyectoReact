import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount'

export default function ItemDetail({ title, description, price, pictureUrl, stock }) {
	const [ selectedCount, setSelectedCount ] = useState(0)

	const addHandler = i => {
		setSelectedCount(i)
	}

	return <div className="item-detail">
		<img src={pictureUrl} alt={title}/>
		<h3>{title || '🕛'}</h3>
		<p style={{color:'#f90'}} >ARS {price || '$$$'}</p>
		<p>{description}</p>

		{selectedCount > 0 ? 
			<Link to="/cart" className="btn1">Agregar {selectedCount} al carrito</Link>
			:
			<ItemCount stock={stock} initial={0} onAdd={addHandler} />
		}
	</div>
} 