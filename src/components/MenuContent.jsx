import React, { useEffect, useState } from 'react';
import { Divider } from '@chakra-ui/react';
import { MenuCategory, MenuTitle } from './Style';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useParams } from 'react-router-dom';


const MenuContent = () => {
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

                console.log('Products: ', filteredProducts);
                setProducts(filteredProducts);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [category]);

    return (
        <div id="menu">
            <MenuTitle>Menu</MenuTitle>
            <MenuCategory>
                <h3>Pizzas</h3>
                <div className='menu-product'>
                    {products.map((p) => {
                        if (p.category === `pizza`) {
                            return (
                                <>
                                    <div className='menu-product-detail'>
                                        <div >
                                            <h4>{p.name}</h4>
                                            <p className='text-description'>{p.description}</p>
                                        </div>
                                        <p>{p.price} DKK</p>
                                    </div>
                                    <Divider />
                                </>
                            )
                        }
                    })}
                </div>
                <h3>Calzone</h3>
                <div className='menu-product'>
                    {products.map((p) => {
                        if (p.category === `calzone`) {
                            return (
                                <>
                                    <div className='menu-product-detail'>
                                        <div >
                                            <h4>{p.name}</h4>
                                            <p className='text-description'>{p.description}</p>
                                        </div>
                                        <p>{p.price} DKK</p>
                                    </div>
                                    <Divider />
                                </>
                            )
                        }
                    })}
                </div>
                <h3>Pastas</h3>
                <div className='menu-product'>
                    {products.map((p) => {
                        if (p.category === `pasta`) {
                            return (
                                <>
                                    <div className='menu-product-detail'>
                                        <div >
                                            <h4>{p.name}</h4>
                                            <p className='text-description'>{p.description}</p>
                                        </div>
                                        <p>{p.price} DKK</p>
                                    </div>
                                    <Divider />
                                </>
                            )
                        }
                    })}
                </div>
                <h3>Desserts</h3>
                <div className='menu-product'>
                    {products.map((p) => {
                        if (p.category === `dessert`) {
                            return (
                                <>
                                    <div className='menu-product-detail'>
                                        <div >
                                            <h4>{p.name}</h4>
                                            <p className='text-description'>{p.description}</p>
                                        </div>
                                        <p>{p.price} DKK</p>
                                    </div>
                                    <Divider />
                                </>
                            )
                        }
                    })}
                </div>
            </MenuCategory>

        </div>
    );
};

export default MenuContent;

