import React from 'react'
import './Footer.scss';
import Logo from '../../../assets/img/goignislogo.so.png'
import {Link} from 'react-router-dom';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
function Footer() {
    const iconStyle = {
        fontSize:'40px'
    }
    return (
        <>
        <div id='footer'>
            <div id='1'>
                <img src={Logo} id='logo' alt="" />
                <p>Our mission is help reduce
                <br />
                design and drafting costs by
                <br />
                providing ondemand cloudbased designees and
                <br />
                draftmen etc.
                </p>
            </div>
            <div id='2'>
                <h5>Company</h5>
                <Link>About</Link>
                <br />
                <Link>Blog</Link>
                <br />
                <Link>Contact</Link>
                <br />
                <Link to='/privacy'>Privacy Policy</Link>
                <br />
                <Link>Support</Link>
            </div>
            <div id='3'>
            <h5>Services</h5>
            <Link>CAD Drafting</Link>
            <br />
            <Link>Pre-Bid Design</Link>
            <br />
            <Link>Permit Design</Link>
            <br />
            <Link>As-Built Drawings</Link>
            <br />
            <br />
            </div>
            <div id='4'>
            <LinkedInIcon style={iconStyle}  className='connect-icons'/>
            <br />
            <TwitterIcon style={iconStyle} className='connect-icons'/>
            <br/>
            <FacebookIcon style={iconStyle} className='connect-icons'/>
            </div>
            </div>
            <p>© 2021 by GoIGNIS Technologies LLP. All Rights Reserved.
        <br />
            *Terms & Conditions apply. GoIGNIS reserves the right to update pricing without prior notice. Please contact GoIGNIS for updated pricing.</p>
    </>
            )
}

export default Footer
