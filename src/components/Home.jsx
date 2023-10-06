import React from 'react'
import Banner from '../assets/img/main-home.jpeg'
import { MainBanner } from './Style'
import MenuContent from './MenuContent'
import { Link } from 'react-router-dom'
import ImageEffect from './ImageEffect'

const Home = () => {

  return (
    <>
      <MainBanner className='main-banner'>
        <div className='container-banner'>
          <ImageEffect imageUrl={Banner}
          alt="main-banner" />
          <div className='main-title'>
            <h1>WELCOME TO PIZZERIA NAPOLI</h1>
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
