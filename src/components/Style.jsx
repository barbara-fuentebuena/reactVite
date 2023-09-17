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
            top:120px;
            left: 0;
            right:0;
            text-align:center;
            color:white;  
            letter-spacing: .2rem;
            z-index: 200;
            font-size: 25px;
        }
    .cart{
        display: flex;
        justify-content: flex-end;
        a{
            display: flex;
            justify-content: center;      
            align-items: center; 
        }
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
    z-index: -200;
    .buttons-container{
        h2{
            display:flex;
            justify-content:center;
            align-content:center;
            font-size: 20px;
            margin: 5px;
            padding: 10px;
            background-color: #f1efef;
        }
        letter-spacing: .2rem;
        display: flex;
        position:sticky; 
    }
`

export const BgDiv = styled.div`
    position:absolute;
    background-color:black;
    opacity: 80%;
    width:100%;
    top:-2000px;
    left:-2000px;
    height:100%;
    transition: all .6s ease;
    &.active{
        top:0;
        left:0;
        width:100%;
        height:400px;
        border-radius:0 0 80% 0 ;
        z-index:1;
    }
`

export const ButtonsCalculator = styled.div`
    display: flex;
    justify-content:center;
    align-content:center;
    @media(max-width:700px){
        justify-content: flex-start;
    }
    .button-calculator{
        color: black;
        width: 100%;
        font-size: 20px;
        margin-inline:10px; 
    }
    
`

export const CardsContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    .card{
        padding:10px;
        margin:10px;
    }
`

export const CardDetailContainer = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    margin: 30px;
`


