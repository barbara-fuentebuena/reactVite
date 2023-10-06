import React from 'react'
import Item from './Item'
import { CardsContainer } from './Style'

const ItemList = ({ products }) => {

  if (!products || products.length === 0) {
    return <div>No products found.</div>;
  }

  return (
    <CardsContainer>
      {products.map((product) => (
        <Item key={product.id} id={product.id} name={product.name} price={product.price} description={product.description} image={product.image}/>
      ))}
    </CardsContainer>
  )
}

export default React.memo (ItemList)