import React from 'react'
import ItemCount from './Counter/ItemCount'

const ItemListContainer = (props) => {
    const styleText = {
        color: props.textColor,
    }
    return ( 
   
    <div >
        <h2>{props.greetings}</h2>
        <ItemCount initial={1} stock={6} />
    </div>
        )
    }
    