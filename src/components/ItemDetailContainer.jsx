import React from 'react'
import { BodyIndex} from './Style'
import { useState, useEffect } from "react";
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc} from 'firebase/firestore';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const db = getFirestore();
      const productRef = doc(db, "food", id);

      try {
        const docSnapshot = await getDoc(productRef);
        if (docSnapshot.exists()) {
          const productData = { id: docSnapshot.id, ...docSnapshot.data() };
          setProduct(productData);
        } else {
          console.log("Product not found");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  return <ItemDetail product={product} />;
};


export default ItemDetailContainer;