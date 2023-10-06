import React, { useEffect, useState } from 'react';
import { BodyIndex } from './Style';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const itemsCollection = collection(db, 'food');

      try {
        const snapshot = await getDocs(itemsCollection);

        const filteredProducts =
          category && category !== 'all'
            ? snapshot.docs
                .map(doc => ({ id: doc.id, ...doc.data() }))
                .filter(product => product.category.toLowerCase() === category.toLowerCase())
            : snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        setProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [category]);

  return (
    <BodyIndex>
      <ItemList products={products} />
    </BodyIndex>
  );
};

export default ItemListContainer;
