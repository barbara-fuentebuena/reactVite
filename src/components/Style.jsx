import styled from "styled-components"

export const Header = styled.header`
    background-color: black;
`

export const Nav = styled.nav`
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    padding:10px;
    position: fixed;
    background-color: black;
    z-index: 100;
    width: 100%;
    top: 0;
    left: 0;
    font-family: 'Montserrat', sans-serif;
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
    min-height: 60vh;
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
            font-size: 20px;
            padding: 7px;
            padding-inline:12px;
        }
    .buttons{
        display: flex;
        justify-content:center;
        align-content:center;
        width: 50%;
        margin: 10px auto;
        @media(max-width:700px){
            justify-content: flex-start;
        }
        .button-calculator{
            color: black;
            width: 100%;
            font-size: 25px;
            &:hover{
                background-color: #f3f2f2;
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
            font-family: 'Montserrat', sans-serif;
            font-weight: 900;
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
        background-color: #fb6407;
        color: white;
        letter-spacing: .2rem;
        font-family: 'Montserrat', sans-serif;
        &:hover{
            background-color: #ebeae9d3;
        }
        @media(max-width:768px){
            font-size: 1rem;
        }
    }
}}
`

export const MenuCategory = styled.div`
    margin: auto;
    width: 70%;
    padding: 20px;
    @media(max-width:768px){
        width: 95%;
        }
    .menu-title{
        font-family: 'Montserrat', sans-serif;
        font-size:4rem;
        font-weight: 900;
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
                color: #fb6407;
                font-style:italic;
                white-space: wrap;
            }
        }
        .text-price{
            white-space: nowrap;
            color: #fb6407;
            font-family: 'Montserrat', sans-serif;
            font-weight: 900;
            font-size: 1.5rem;
        }
    }
`

export const SendOrderContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 100px;
    .details-cart-background{
        background-color: #f7f4f4;
        width: 30%;
        margin-top: 0;
        border-radius: 10px;
        border: solid 0.5px #bdbbbb;
        margin-bottom: 20px;
    }
`

export const FormContainer = styled.div`
    margin: auto;
    text-align: center;
    padding: 30px;
    margin-bottom: 80px;
    width: 80%;
    @media(max-width:768px){
        width: 100%;
        padding: 10px;
    }
    h1{
        font-size: 3rem;
        font-weight: 900;
        text-align: start;
        margin-left: 20px;
        font-family: 'Montserrat', sans-serif;
    }
    h2{
        font-family: 'Montserrat', sans-serif;
        color: #fb6407;
        text-align: start;
        margin-left: 20px;
        font-style: italic;
        letter-spacing: 1.5px;
    }
    .formTextDetails{
        h3{
            text-align: start   ;
        }
        padding: 20px;
    }
`

export const PaymentContainer = styled.div`
    background-color: #fae1d1;
    border-radius: 10px;
    width: 95%;
    margin: auto;
    display: flex;
    input{
        background-color: white;
    }
    @media(max-width:768px){
        display: block;
        width: 100%;
        padding: 10px;
    }
    .address-details{
        width: 50%;
        border-right: 0.5px #d0cdcd solid;
        @media(max-width:768px){
        border-right: none;
        width: 100%;
    }
    .formAddressDetails{
        padding: 20px;
        display: block;
        justify-content: center;
        h4{
            font-size: 1rem;
            text-align: start;
        }
        @media(max-width:768px){
        width: 100%;
        }
        .input-payment-details{
            margin: 5px;
            .input-payment-field{
                margin: 5px;
                @media(max-width:768px){
                    margin: 3px;
        }
                
            }
            @media(max-width:768px){
                margin-inline: 0;
        }
        }
    }
    }
    .payment-details{
        padding: 20px;
        margin: 5px;
        width: 50%;
        @media(max-width:768px){
        width: 100%;
    }
    }
    h3{
        text-align: center ;
        font-weight: bold;
        font-size: 1.2rem;
        padding: 5px;
    }
`
export const OrderSummaryContainer = styled.div`
    border-radius: 10px;
    margin-bottom: 20px;
    text-align: center;
    padding: 20px;
    h3{
        font-weight: bold;
        padding: 10px;
    }
    .background-table-order-summary{
        background-color: white;
        width: fit-content;
        margin: auto;
        border: solid 1px black;
        box-shadow: 3px 3px 10px grey;
        @media(max-width: 600px){
        width: auto;
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
    bottom: 0;
    width: 100%;
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
        padding: 10px;
        text-align: center;
        margin: 10px;
        h5{
            padding: 10px;
        }
        p{
            padding-left: 10px;
        }
        .footer-subtitle{
            font-weight: bold;
            margin-top: 5px;
            margin-bottom: 5px;
        }
    }
    .footer-developer-container{
        padding: 10px;
        text-align: center;
        font-size: 0.75rem;
    }
`
