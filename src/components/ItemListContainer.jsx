import React from 'react'
import {BodyIndex} from './Style'


const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <BodyIndex>
        <h2>{greeting}</h2>
      </BodyIndex>
    </>

  )
}

export default ItemListContainer