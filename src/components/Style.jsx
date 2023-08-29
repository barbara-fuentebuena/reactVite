import styled from "styled-components"
import CartWidget from "./CartWidget"

export const Header = styled.header`
    background-color: black;
`

export const Nav = styled.nav`
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    padding:10px;
    .logo{
        width: 70px;
        height: auto;   
        display: flex;
        justify-content: center;
        align-items: center;   
    }
    .categories{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        color:white; 
        letter-spacing: .2rem;
        .categories-button{
            letter-spacing: .2rem;
        }
        .categories-items{
            color: black;
        }
    }
    .cart{
        display: flex;
        justify-content: center;      
        align-items: center; 
        
        h3{
           color:white; 
           padding: 5px;
           font-size: 25px;
        }
        p{
            background-color: white;
            color: black;
            padding: 5px;
            border-radius: 50px;
            font-size: 15px;
        }
    }
`
export const BodyIndex = styled.body`
    h2{
        margin: auto;
        font-size: 40px;
        font-weight: lighter;
        letter-spacing: .2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 70px;
    }
`