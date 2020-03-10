'use strict;'

import React from 'react'
import './ContactLinks.css'


import gitLink from '../../images/git-link-white.png'
import emailLink from '../../images/email.png'
import linkedInLink from '../../images/linkedin.png'
export default function ContactLinks() {
    return (
        <div className='contact-links'>

        <a className='email-link'href='mailto: eemontemayor@live.com'><img src={emailLink} alt='email logo'/></a>
           <a className='linked-in-link' href='https://www.linkedin.com/in/enrique-montemayor-27a338182/'><img src={linkedInLink} alt='linked in logo'/></a>
           <a className='git-link'href='https://github.com/eemontemayor'><img src={gitLink} alt='gitHub logo'/></a>
        </div>
    )
}