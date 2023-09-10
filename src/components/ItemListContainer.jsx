import React from 'react'
import { BodyIndex, ButtonsCalculator} from './Style'
import { useState } from "react";
import ItemList from './ItemList';


const ItemListContainer = () => {

  const [quantity, setQuantity] = useState(0)

  const products = [
    {id: '1', name:'Pizza A', description:'Pizza description', price:80},
    {id: '2', name:'Pizza B', description:'Pizza description', price:95},
    {id: '3', name:'Pizza C', description:'Pizza description', price:110}
  ]

  const showProducts = new Promise((resolve, reject)=>{
    if(products.length >0){
      setTimeout(()=>{
        resolve(products)
      }, 5000)
    }else{
      reject("Products cannot be loaded.")
    }
  })

  showProducts
  .then((result)=>{
    console.log(result)
  }).catch((error)=>{
    console.log(error)
  })

  return (
    <>
      <BodyIndex>
        <div className='buttons-container'>
          <h2>{quantity}</h2>
          <ButtonsCalculator className='buttons'>
            <button className='button-calculator' onClick={() => setQuantity(quantity + 1)}>Add</button>
            <button className='button-calculator' onClick={() =>
              setQuantity(quantity >= 1 ? quantity - 1 : 0)}>Delete</button>
          </ButtonsCalculator>
        </div>
        <ItemList products={products}/>
      </BodyIndex>
    </>

  )
}

export default ItemListContainer