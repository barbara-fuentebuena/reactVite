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
                <h5>🕘 Opening hours</h5>
                        <p className='footer-subtitle'>Lunch</p>
                        <p>Monday - Thrusday: 11:00 to 15:00</p>
                        <p>Friday - Saturday: 11:00 to 15:00</p>
                        <p>Sunday: CLOSED</p>
                        <p className='footer-subtitle'>Dinner</p>
                        <p>Monday - Thrusday: 17:00 to 22:00</p>
                        <p>Friday - Sunday: 17:00 to 00:00</p>
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