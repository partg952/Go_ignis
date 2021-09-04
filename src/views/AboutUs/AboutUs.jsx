import React from "react";
import classNames from "classnames";
import {useState} from 'react';
import './AboutUs.scss';
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../../assets/img/goignislogo.so.png";
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/components.js";
import tawkTo from "tawkto-react";
import Footer from "views/Components/Sections/Footer";
import SectionLogin from "views/Components/Sections/SectionLogin";
import HeaderLinks from '../../components/Header/HeaderLinks';
import ParallaxBackground from '../../assets/img/parallax-back.webp';
import ContactInfo from "views/Components/Sections/ContactInfo";
import Background2 from '../../assets/img/image-parallax2.png';
import Background3 from '../../assets/img/image-parallax3.png';
import Features from './Features';
import ChooseUs from "./ChooseUs";
function AboutUs() {
    const useStyles = makeStyles(styles);
    const buttonStyle = {
        fontSize:'16px',
        backgrundColor:'black',
        color:'white',
        fontWeight:'bold'
    }
    const classes = useStyles();
    tawkTo('6126206e649e0a0a5cd2dc2f','1fduetcb0')
    window.addEventListener('scroll',()=>{
      if(window.pageYOffset > 100){
        document.getElementById('logo-image').style.height = '130px'
      }
      else{
        document.getElementById('logo-image').style.height = '200px';
      }
    })    

    return (
        <div>
        <ContactInfo/>
        <Header
        brand={
            <img src={Logo} height="200px" id='logo-image'/>

      } // prettier-ignore
      rightLinks={<HeaderLinks/>}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 100,
          color: "white", 
        }}
      />
      <Parallax>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                    <strong><h2 style={{color:'black'}}>About GoIgnis</h2></strong>
              </div>
              <div className={classes.subtitle}>
                <h3 style={{color:'black'}}>Helping FireAlarm Companies 
                <br />
                improve productivity and profitablity
                through Technology 
                <br />
                <Button color='primary'  style={buttonStyle}>Checkout Our Services</Button>
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>   
      <div className={classNames(classes.main, classes.mainRaised)}>
        <Features/>
        <ChooseUs/>
        <SectionLogin/>
        <Footer/>
      </div>
        </div>
    )
}

export default AboutUs
