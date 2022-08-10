import { useState } from 'react'

export default function ItemCount({ stock, initial, onAdd}) {
	
    
    const [ counter, setCounter ] = useState(initial);
	const contar = val => {
		if ((stock >= val) && (val >= 0)) {
			setCounter(val)
		}
	}
	return <div className="counter">
		<div>
			<button onClick={() => contar(counter - 1)}>-</button>
			<span>{counter}</span>
			<button onClick={() => contar(counter + 1)}>+</button>
		</div>
        <button onClick={() => onAdd(counter+' agregados')}>Agregar</button>
		<button onClick={() => onAdd(counter)}>Agregar</button>
	</div>
}