import React from 'react'
import './ChooseUs.scss';
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";
import Destination from '../../assets/img/destination.png';
import Trophy from '../../assets/img/trophy.png';
import Speedometer from '../../assets/img/speedometer.png';
import Document from '../../assets/img/document.png';
const useStyles = makeStyles(styles);
function ChooseUs() {
    const classes = useStyles();
    return (
        <div>
            <h1 className={classes.textCenter}>Why Choose Us?</h1>
            <div id="cards">
                <div className='card'>
                    <img src={Trophy} alt="" />
                    <h3>Our winning formula</h3>
                    <p>Leadership, experience and teamwork have been our winning formula for years and we are ready
                    to apply it to your project. We are here to make your project a reality.</p>
                </div>
                <div className='card'>
                    <img src={Speedometer} alt="" />
                    <h3>We go the extra mile</h3>
                    <p>Goignis is built on our talents. We truly care about going the extra mile and achieve “amazing”
                    results. We won´t settle for anything less, neither should you!</p>
                </div>
                <div className='card'>
                    <img src={Destination} alt="" />
                    <h3>The GoIGNIS way</h3>
                    <p>Passion is the driving force behind Goignis. The Goignis way is the never-ending struggle to be
                    better at what we do so we can provide better design to you.</p>
                </div>
                <div className='card'>
                    <img src={Document} alt="" />
                    <h3>Why we do it?</h3>
                    <p>We are a group of passionate design contractors who have identified the need of cost effective
                    and accurate design and drafting services.</p>
                </div>

            </div>
        </div>
    )
}

export default ChooseUs
