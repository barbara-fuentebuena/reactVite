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
import { useState  } from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {

  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }

  const handleMenuItemClick = () => {
    if (clicked) {
      setClicked(false);
    }
  };

  return (
    <>
      <Header>
        <Nav>
          <div className='burger'>
            <BurgerButton clicked={clicked} handleClick={handleClick} />
          </div>
          <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
          <div className='logo'>
            <Link to={"/"}>
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <div className={`categories ${clicked ? 'active' : ''}`}>
            <div>
              <a href='/'>
                OUR MENU
              </a>
            </div>
            <div>
              <Link to={'/booking'}>BOOK A TABLE</Link>
            </div>
            <div>
              <Menu>
                <MenuButton className='categories-button'>
                  ONLINE ORDER
                </MenuButton>
                <MenuList className={`categories-items ${clicked ? 'active' : ''}`}>
                  <Link to={`/category/Pizza`} onClick={handleMenuItemClick}>
                    <MenuItem>
                      Pizzas
                    </MenuItem>
                  </Link>
                  <Link to={`/category/Pasta`} onClick={handleMenuItemClick}>
                    <MenuItem>
                      Pastas
                    </MenuItem>
                  </Link>
                  <Link to={`/category/Calzone`} onClick={handleMenuItemClick}>
                    <MenuItem>
                      Calzones
                    </MenuItem>
                  </Link>
                  <Link to={`/category/Dessert`} onClick={handleMenuItemClick}>
                    <MenuItem>
                      Desserts
                    </MenuItem>
                  </Link>
                </MenuList>
              </Menu>
            </div>
          </div>
          <div className='cart'><Link to={"/cart"}><CartWidget /></Link></div>
        </Nav>
      </Header>
    </>
  )
}

export default NavBar