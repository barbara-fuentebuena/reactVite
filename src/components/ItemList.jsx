import React from 'react'
import Item from './Item'
import { CardsContainer } from './Style'

const ItemList = ({ products }) => {

  if (!products || products.length === 0) {
    return <div>No products found.</div>;
  }

  console.log("Products:", products);


  return (
    <CardsContainer>
      {products.map((product) => (
        <Item key={product.id} id={product.id} name={product.name} price={product.price} description={product.description} />
      ))}
    </CardsContainer>
  )
}

export default React.memo (ItemList)