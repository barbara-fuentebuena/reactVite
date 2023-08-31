import React from 'react'
import CartWidget from './CartWidget'
import Logo from '../assets/img/main-logo.png'
import { Header, Nav, BgDiv } from './Style'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import BurgerButton from './BurgerButton'
import {useState} from "react";

const NavBar = () => {

  const [clicked, setClicked] = useState (false)
  const handleClick = () =>{
    setClicked(!clicked)
  }
  return (
    <>
      <Header>
        <Nav>
          <div className='burger'>
            <BurgerButton clicked={clicked} handleClick={handleClick}/>
          </div>
          <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
          <div className='logo'>
            <img src={Logo} alt="logo" />
          </div>
          <div className={`categories ${clicked ? 'active' : ''}`}>
            <div>
              <a onClick={handleClick} href="#h">OUR MENU</a>
            </div>
            <div>
              <a onClick={handleClick}  href="#h">BOOK A TABLE</a>
            </div>
            <div>
              <Menu>
                <MenuButton className='categories-button'>
                  ONLINE ORDER
                </MenuButton>
                <MenuList className='categories-items'>
                  <MenuItem onClick={handleClick} >Pizzas</MenuItem>
                  <MenuItem onClick={handleClick} >Pastas</MenuItem>
                  <MenuItem onClick={handleClick} >Calzone</MenuItem>
                  <MenuItem onClick={handleClick} >Desserts</MenuItem>
                </MenuList>
              </Menu>
            </div>
          </div>
          <div className='cart'><CartWidget /></div>
        </Nav>
      </Header>
    </>
  )
}

export default NavBar