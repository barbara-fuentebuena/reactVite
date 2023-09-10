import React from 'react'
import Item from './Item'
import { CardsContainer } from './Style'

const ItemList = ({ products }) => {
  return (
    <CardsContainer>
      {
        products.map((p, index) => {
          return (
            <Item
              name={p.name}
              price={p.price}
              description={p.description}
              key={index}
            />
          )
        })
      }
    </CardsContainer>
  )
}

export default ItemList