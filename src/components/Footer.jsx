import React from 'react'
import { FooterContainer } from './Style'
import { Divider } from '@chakra-ui/react'

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <div className='footer-details-container'>
                <div className='footer-contact-details'>
                    <h5>📍 Vanløse, Copenhagen</h5>
                    <h5>☎️ 91707070</h5>
                </div>
                <div className='footer-hours-details'>
                <h5>🕘 Opening hours: Everyday 11-23 hs</h5>
                </div>
                </div>
                <h6 className='footer-developer-container'>
                    ©️ CopyRight FoodDKDevelopers
                </h6>
            </FooterContainer>
        </>
    )
}

export default Footer