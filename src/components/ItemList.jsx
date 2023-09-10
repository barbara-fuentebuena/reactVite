import React from 'react'
import Item from './Item'

const ItemList = ({products}) => {
  return (
    <div>
        {
            products.map((p) =>{
                return(
                    <Item
                    name={p.name}
                    price={p.price}
                    description={p.description}
                    />
                )
            })
        }
    </div>
  )
}

export default ItemList