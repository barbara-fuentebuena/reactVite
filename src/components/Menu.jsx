import React from 'react'
import { Divider } from '@chakra-ui/react'
import { MenuCategory, MenuTitle } from './Style';

const Menu = () => {

    const initialProducts = [
        { id: '1', name: 'Pizza A', description: 'Pizza description', price: 80, category: 'Pizza' },
        { id: '2', name: 'Pizza B', description: 'Pizza description', price: 95, category: 'Pizza' },
        { id: '3', name: 'Pizza C', description: 'Pizza description', price: 110, category: 'Pizza' },
        { id: '4', name: 'Calzone A', description: 'Calzone description', price: 120, category: 'Calzone' },
        { id: '5', name: 'Calzone B', description: 'Calzone description', price: 90, category: 'Calzone' },
        { id: '6', name: 'Calzone C', description: 'Calzone description', price: 105, category: 'Calzone' },
        { id: '7', name: 'Pasta A', description: 'Pasta description', price: 105, category: 'Pasta' },
        { id: '8', name: 'Pasta B', description: 'Pasta description', price: 105, category: 'Pasta' },
        { id: '9', name: 'Dessert A', description: 'Dessert description', price: 105, category: 'Dessert' },
        { id: '10', name: 'Dessert B', description: 'Dessert description', price: 105, category: 'Dessert' },
    ];


    return (
        <div>
            <MenuTitle>Menu</MenuTitle>
            <MenuCategory>
                <h3>Pizzas</h3>
                <div className='menu-product'>
                    {initialProducts.map((p) => {
                        if (p.category === `Pizza`) {
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
            <MenuCategory>
                <h3>Pastas</h3>
                <div className='menu-product'>
                    {initialProducts.map((p) => {
                        if (p.category === `Pasta`) {
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
            <MenuCategory>
                <h3>Calzones</h3>
                <div className='menu-product'>
                    {initialProducts.map((p) => {
                        if (p.category === `Calzone`) {
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
            <MenuCategory>
                <h3>Desserts</h3>
                <div className='menu-product'>
                    {initialProducts.map((p) => {
                        if (p.category === `Dessert`) {
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

    )
}

export default Menu

