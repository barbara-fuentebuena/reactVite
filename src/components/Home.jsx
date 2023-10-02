import React from 'react'
import Banner from '../assets/img/main-home.jpeg'
import { MainBanner } from './Style'
import MenuContent from './MenuContent'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <>
      <MainBanner className='main-banner'>
        <div className='container-banner'>
          <img src={Banner} alt="main-banner" />
          <div className='main-title'>
            <h1>Welcome to Pizzeria Napoli</h1>
            <Link to={`/products`}>
              <button className='button-banner'>
                ORDER NOW
              </button>
            </Link>
          </div>
        </div>
      </MainBanner>
      <MenuContent/>
    </>
  )
}

export default Home
