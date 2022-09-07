import React, { useState } from "react";
import { useParams } from "react-router-dom";
import getCategories, { getCategory } from "../services/getData";
import ItemList from "./ItemList";
import './styles/ItemListContainer.css'

export default function ItemListContainer() {
	const [ categories, setCategories ] = useState([]);
	const [ loading, setLoading ] = useState(false);
	const amountDisplayed = React.useRef(true)
	const { name } = useParams();


	const capitalize = word => {
		word = word.split('')
		word[0] = word[0].toUpperCase()
		return word.join('')
	}


	const setHooks = (res,all) => {
		amountDisplayed.current = all ? 4 : true
		setCategories(all ? res : [{id:res.id, ...res.data()}])
		setLoading(false)
	}


	React.useEffect(() => {
		setLoading(true);

		if (name) {
			
			getCategory(name).then(res => { setHooks(res,false) })
		} else {
			
			getCategories().then(res => { setHooks(res,true) });
		}

	}, [name])


	const categoriesList = categories.map(category => 
		<div key={category.name} className="category flx-clmn-ctr">
		<p>{category.icon} {capitalize(category.name)}</p>
		<div className="item-list-container">
			<ItemList categoryName={category.name} categoryId={category.id} render={amountDisplayed.current} />
		</div>
	</div>)
	
	
	if (loading) return <h1 className="loading">🕛</h1>

	return <div className="categories">{categoriesList}</div>
}