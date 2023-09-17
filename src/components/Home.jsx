import React from 'react'
import Banner from '../assets/img/main-home.jpeg'
import { MainBanner } from './Style'
import Menu from './Menu'

const Home = () => {
  return (
    <>
      <MainBanner>
        <div className='container-banner'>
          <img src={Banner} alt="main-banner" />
          <div className='main-title'>
            <h1>Welcome to Pizzeria Napoli</h1>
            <button className='button-banner'>
              OUR MENU
            </button>
          </div>
        </div>
      </MainBanner>
      <Menu />
    </>
  )
}

export default Home