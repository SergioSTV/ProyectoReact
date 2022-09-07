import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import CartContext from '../context/CartContext'
import './styles/ItemDetail.css'

export default function ItemDetail(item) {
	const [ selectedCount, setSelectedCount ] = React.useState(0)
	const { addItem, getProduct } = React.useContext(CartContext)
	const { id, title, description, price, pictureUrl, stock } = item

	const addHandler = (quantity = 0) => {
		setSelectedCount(quantity)
	}

	
	const onCartQuantity = getProduct(id)?.quantity || 0

	
	const virtualStock = stock - onCartQuantity

	
	const virtualPrice = selectedCount > 1 ? `${price * selectedCount} (x${selectedCount})` : price

	if (item.loading) return <h1 className="loading">🕛</h1>

	return <div className="item-detail">
		<img src={pictureUrl} alt={title}/>

		<div className="detail">
			<div className="info">
				<h3>{title || '🕛'}</h3>
				<p>{description}</p>
				<p style={{color:'#f90'}} >ARS {virtualPrice}</p>
			</div>

			<div className="selection">
				{selectedCount > 0 
					
					? <Link 
						to="/cart" 
						className="btn1" 
						onClick={() => addItem(item, selectedCount)}
					>Agregar {selectedCount} al carrito</Link>
					
					: <ItemCount stock={virtualStock} initial={0} onAdd={addHandler} />
				}
			</div>
			{selectedCount > 0 && <button id="cancel" onClick={addHandler}>cancelar</button>}
		</div>
	</div>
}