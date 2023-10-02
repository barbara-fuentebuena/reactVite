import styled from "styled-components"

export const Header = styled.header`
    background-color: black;
`

export const Nav = styled.nav`
    display: grid;
    grid-template-columns: 1fr 4fr 1fr 0.1fr;
    padding:10px;
    position: fixed;
    background-color: black;
    z-index: 100;
    width: 100%;
    top: 0;
    left: 0;
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
    margin-top: 120px;
    margin-bottom: 15px;
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
    display: block;
    margin: 10px;
    position:sticky; 
    h2{
            display:flex;
            justify-content:center;
            align-items:center;
            font-size: 17px;
            border-top: #ddd8d8 solid 1px;
            border-bottom: #ddd8d8 solid 1px;
            padding: 7px;
            padding-inline:15px;
        }     
    .buttons{
        display: flex;
        justify-content:center;
        align-content:center;
        margin: 5px;
        @media(max-width:700px){
            justify-content: flex-start;
        }
        .button-calculator{
            color: black;
            width: 100%;
            font-size: 20px;
            border: #ddd8d8 solid 1px;
            padding: 5px;
            padding-inline:5px;
            &:hover{
                background-color: #ddd8d8;
            }
        }
    } 
    .buttons-cart{
        margin: 5px;
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

export const MainBanner = styled.div`
    .container-banner{
        position: relative;
        margin-top: 75px;
        @media(max-width:768px){
            height: 500px;
        }    
        img{
            filter: brightness(50%);
            width: 100%;
            @media(max-width:768px){
            height: 500px;
            object-fit: cover;
        }   
        }
    .main-title{
        width: 100%!important;
        position:absolute;
        padding: 20px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        h1{
        font-family:'Croissant One', cursive;
        font-size: 3.5rem;
        color: white;
        @media(max-width:768px){
            font-size: 2rem;
        }      
    }
    .button-banner{
        margin: 20px;
        font-size: 1rem;
        padding: 10px;
        background-color: #9d7101d5;
        color: white;
        letter-spacing: .2rem;
        &:hover{
            background-color: #674b02d4;
        }
        @media(max-width:768px){
            font-size: 1rem;
        } 
    }
}}
`

export const MenuTitle = styled.h2`
    font-size: 2.5rem;
    text-align: center;
    font-family:'Croissant One', cursive;
    padding: 30px;
    
`

export const MenuCategory = styled.div`
    margin: auto;
    width: 70%;
    padding: 20px;
    letter-spacing: .2rem;
    @media(max-width:768px){
        width: 90%;
        }    
    h3{
        font-size:1.75rem;
        font-weight: bold;
        margin-bottom: 20px;
        margin-top: 20px;

    }
    .menu-product{
        padding: 10px;
        background-color: white;
        .menu-product-detail{
            display: flex;
            justify-content: space-between;
            align-items: center;
            h4{
            font-size: 1.15rem;
            margin-top: 10px;
            margin-bottom: 10px;
            }
            .text-description{
                font-size: 0.8rem;
                margin-bottom: 10px;
                color: grey;
                font-style:italic;
                white-space: wrap;
            }
        }
        p{
            white-space: nowrap;
        }
    }
`

export const FormContainer = styled.div`
    margin: auto;
    width: 70%;
    border: solid black 1px;
    text-align: center;
    padding: 30px;
    margin-bottom: 80px;
    h1{
        font-size: 2.5rem;
        font-family:'Croissant One', cursive;
        padding: 30px;
    }
    .formTextDetails{
        h3{
            text-align: start   ;
        }
        padding: 20px;
    }
`

export const PaymentContainer = styled.div`
    background-color: #f3f1f1;
    width: 80%;
    margin: auto;
    padding: 30px;
    h3{
        text-align: center ;
        font-weight: bold;
        font-size: 1.2rem;
        padding: 10px;
    }
    .formAddressDetails{
        padding: 20px;
        display: flex;
        justify-content: center;
        h4{
            font-size: 1rem;
            text-align: start;
        }
        .input-payment-details{
            padding: 20px;
            .input-payment-field{
                background-color: white;
            }
        }
    }
`

export const ConfirmationContainer = styled.div`
    margin: auto;
    text-align: center;
    padding: 20px;
    h1{
        font-size: 2rem;
        font-weight: bold;
        padding: 20px;
    }
`



export const FooterContainer = styled.div`
    background-color: black;
    color: #b9b6b6;
    letter-spacing: .2rem;
    .footer-details-container{
        display: flex;
        justify-content: space-around;
        align-items: center;
        @media(max-width:768px){
        display: block;
        text-align: center;
    }
    }
    .footer-contact-details{
        padding: 30px;
        h5{
            padding: 10px;
        }
    }
    .footer-hours-details{
        padding: 20px;
        text-align: center;
        border: dotted 0.1px white;
        margin: 20px;
        h5{
            padding: 10px; 
        }
        p{
            padding-left: 10px;
            letter-spacing: 0rem;
        }
        .footer-subtitle{
            font-weight: bold;
            margin-top: 5px;
            margin-bottom: 5px;
        }
    }
    .footer-developer-container{
        padding: 20px;
        text-align: center;
        font-size: 0.75rem;
    }
`