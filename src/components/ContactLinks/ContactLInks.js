'use strict;'

import React from 'react'
import './ContactLinks.css'


import gitLink from '../../images/git-link.png'
import emailLink from '../../images/email-link-white.png'
import linkedInLink from '../../images/linked-in-black.png'
export default function ContactLinks() {
    return (
        <div className='contact-links'>

        <a href='mailto: eemontemayor@live.com'><img className='email-link' src={emailLink} alt='email logo'/></a>
           <a  href='https://www.linkedin.com/in/enrique-montemayor-27a338182/'><img className='linked-in-link' src={linkedInLink} alt='linked in logo'/></a>
           <a href='https://github.com/eemontemayor'><img className='git-link-black' src={gitLink} alt='gitHub logo'/></a>
        </div>
    )
}