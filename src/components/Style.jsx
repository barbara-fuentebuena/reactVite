import styled from "styled-components"

export const Header = styled.header`
    background-color: black;
`

export const Nav = styled.nav`
    display: grid;
    grid-template-columns: 1fr 4fr 1fr 0.1fr;
    padding:10px;
    .logo{
        width: 70px;
        height: auto;   
        display: flex;
        justify-content: center;
        align-items: center;   
    }
    .categories{
        position:absolute;
        top:-700px;
        left: -2000px;
        right:0;
        margin-left:auto;
        color:black;
        transition: all .5s ease;
        .categories-button{
            letter-spacing: .2rem;
        }
        .categories-items{
            color: black;
        }
        @media(min-width:768px){
            position:initial;
            margin:0;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            color:white; 
            letter-spacing: .2rem;
        }
    }
    .categories.active{
            width:100%;
            display:block;
            position:absolute;
            margin-left:auto;
            margin-right:auto;
            top:50%;
            left: 0;
            right:0;
            text-align:center;
            color:black;  
            letter-spacing: .2rem;
        }
    .cart{
        display: flex;
        justify-content: center;      
        align-items: center; 
        p{
            color: white;
            padding: 10px;
            border-radius: 50px;
            font-size: 18px;
        }
    }
    .burger{
        display:flex;
        justify-content:center;
        align-items:center;
        @media(min-width:768px){
            display:none;
        }
    }
`
export const BodyIndex = styled.div`
    z-index: -2;
    .buttons-container{
        h2{
            display:flex;
            justify-content:center;
            align-content:center;
            font-size: 40px;
            font-weight: lighter;
            padding: 70px;
        }
        letter-spacing: .2rem;
        display: block;
        position:sticky;   
    }
`

export const BgDiv = styled.div`
    position:absolute;
    background-color:red;
    width:100%;
    top:-2000px;
    left:-2000px;
    height:100%;
    z-index:-2;
    transition: all .6s ease;
    &.active{
        top:0;
        left:0;
        width:100%;
        height:30%;
        border-radius:0 0 80% 0 ;
    }
`

export const ButtonsCalculator = styled.div`
    display: flex;
    justify-content:center;
    align-content:center;
    .button-calculator{
        background-color: black;
        color: white;
        padding:10px;
        margin:5px;
        width: 10%;
        @media(max-width:700px){
            width: 25%;
        }
    }
    
`

export const CardsContainer = styled.div`
    display:flex;
    justify-content: center;
    @media(max-width:768px){
            flex-direction: column;
            align-items:center;
        }
    .card{
        padding:10px;
        margin:10px;
    }
`
