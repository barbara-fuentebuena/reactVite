import React from 'react'
import Item from './Item'
import { CardsContainer } from './Style'

const ItemList = ({ products }) => {
  return (
    <CardsContainer>
      {
        products.map((product) => {
          return (
            <Item key={product.id} id={product.id} name={product.name} price={product.price} description={product.description} />

          )
        })
      }
    </CardsContainer>
  )
}

export default React.memo (ItemList)