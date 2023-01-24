import React from 'react'
import './Footer.css'
import { BsInstagram, BsFacebook,BsTwitter,BsTwitch } from "react-icons/bs";
const Footer = () => {
  return (
    <div className='footer' >
        <div>
            <p>Copyright @ 2023 All Rights reserved</p>
        </div>
        <div><p>(+254) 114 116265</p>
        <p>info@example.com</p></div>
        <div className='socials' >
            <BsFacebook/>
            <BsInstagram/>
            <BsTwitch/>
            <BsTwitter/>
            
        </div>
      
    </div>
  )
}

export default Footer
