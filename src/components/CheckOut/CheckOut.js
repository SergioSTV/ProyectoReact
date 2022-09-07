import React from 'react'
import { Link, useParams } from 'react-router-dom'
import CartContext from '../context/CartContext'

export default function Success() {
	const { products, clear } = React.useContext(CartContext)
	const { id } = useParams()

	// Limpia el carrito al terminar de renderizar el componente
	React.useEffect(() => clear)

	return <div className="🛒">
		<h3>¡ Compra realizada con éxito !	<Link to="/" ><u>Volver a INICIO</u></Link></h3>
		{ products.map((product,i) => <div key={i}>
				<img src={product.item.pictureUrl} alt={product.item.title} />
				<span>{product.item.title}</span>
				<span>$ {product.item.price}</span>
				<span>&times; {product.quantity}</span>
			</div> 
		)}
		<p>Orden: {id}</p>
	</div>
}