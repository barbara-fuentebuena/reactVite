import React from 'react'
import CartWidget from './CartWidget'
import Logo from '../assets/img/main-logo.png'
import { Header, Nav } from './Style'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'

const NavBar = () => {
  return (
    <>
      <Header>
        <Nav>
          <div className='logo'>
            <img src={Logo} alt="logo" />
          </div>
          <div className='categories'>
            <div>
              OUR MENU
            </div>
            <div>
              BOOK A TABLE
            </div>
            <div>
              <Menu>
                <MenuButton className='categories-button'>
                  ONLINE ORDER
                </MenuButton>
                <MenuList className='categories-items'>
                  <MenuItem>Pizzas</MenuItem>
                  <MenuItem>Pastas</MenuItem>
                  <MenuItem>Calzone</MenuItem>
                  <MenuItem>Desserts</MenuItem>
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