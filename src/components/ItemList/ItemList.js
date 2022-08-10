import React from 'react'
import Item from '../Item/Item.js';
import ItemCount from '../ItemCount/ItemCount.js';

function ItemList({ items }) {
  return (
    <>
    { items.map(thisitem => {
      return (
        <Container key={thisitem.id}>
        <Item item={thisitem.id} name={thisitem.name} description={thisitem.description} price={thisitem.price}/>
        <ItemCount stock={thisitem.stock} initial={1} itemName={thisitem.name} onAdd={thisitem.onAdd} />
        </Container>
            )
          })}
          </>
        )
      }
      export default ItemList