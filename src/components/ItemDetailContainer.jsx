import React from 'react'
import { BodyIndex, ButtonsCalculator} from './Style'
import { useState, useEffect } from "react";
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import Item from './Item'

const initialProducts = [
  {id: '1', name:'Pizza A', description:'Pizza description', price:80, category:'Pizza'},
  {id: '2', name:'Pizza B', description:'Pizza description', price:95, category:'Pizza'},
  {id: '3', name:'Pizza C', description:'Pizza description', price:110, category:'Pizza'},
  {id: '4', name:'Calzone A', description:'Calzone description', price:120, category:'Calzone'},
  {id: '5', name:'Calzone B', description:'Calzone description', price:90, category:'Calzone'},
  {id: '6', name:'Calzone C', description:'Calzone description', price:105, category:'Calzone'},
  {id: '7', name:'Pasta A', description:'Pasta description', price:105, category:'Pasta'},
  {id: '8', name:'Pasta B', description:'Pasta description', price:105, category:'Pasta'},
  {id: '9', name:'Dessert A', description:'Dessert description', price:105, category:'Dessert'},
  {id: '10', name:'Dessert B', description:'Dessert description', price:105, category:'Dessert'},
];

const ItemDetailContainer = () => {

  const [quantity, setQuantity] = useState(0)
  
  

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchedProduct = initialProducts.find(item => item.id === id);
    setProduct(fetchedProduct);
  }, [id]);

  
  return (
      <BodyIndex>
        {product ? <ItemDetail product={product} /> : null}
      </BodyIndex>
  )
}

export default ItemDetailContainer
export { initialProducts };