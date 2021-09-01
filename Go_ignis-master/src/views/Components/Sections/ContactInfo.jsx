import React from 'react'
import './ContactInfo.scss';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import Button from "components/CustomButtons/Button.js";
function ContactInfo() {
    const buttonStyle = {
        backgroundColor:'red',
        padding:'5px',
        fontWeight:'800'
    }
    return (
        <div id='contact-us-info'>
            <div id="details">
                <PhoneIcon/>
                <p>+1(347)391-8844</p>
                <EmailIcon/>
                <p>rohit@goignis.com</p>
            </div>
            <div id="log">
                <Button style={buttonStyle}>Login</Button>
                <Button style={buttonStyle}>Sign Up</Button>
            </div>
        </div>
    )
}

export default ContactInfo
