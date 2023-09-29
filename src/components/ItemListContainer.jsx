import React from 'react'
import { BodyIndex} from './Style'
import { useState, useEffect } from "react";
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { initialProducts } from './ItemDetailContainer'; 



const ItemListContainer = () => {

  const [products, setProducts] = useState(initialProducts);
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      const filteredProducts = initialProducts.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
      setProducts(filteredProducts);
    }
  }, [category]);

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
      <BodyIndex>
        <ItemList products={products}/>
      </BodyIndex>
  )
}

export default ItemListContainer