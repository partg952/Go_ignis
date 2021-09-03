import React from "react";
import classNames from "classnames";
import {useState} from 'react';
import './Sections/Components.css';
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../../assets/img/goignislogo.so.png";
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import SliderSection from "./Sections/SliderSection";
import GoIgnisPromise from "./Sections/GoIgnisPromise";
import SectionLogin from "./Sections/SectionLogin.js";
import SectionTabs from './Sections/SectionTabs';
import styles from "assets/jss/material-kit-react/views/components.js";
import SectionCarousel from './Sections/SectionCarousel';
import tawkTo from "tawkto-react";
import HeaderLinks from '../../components/Header/HeaderLinks';
import ParallaxBackground from '../../assets/img/parallax-back.webp'
import ContactInfo from "./Sections/ContactInfo";
import Footer from './Sections/Footer';
import SectionCarasouel from './Sections/Carousel';
import Background2 from '../../assets/img/image-parallax2.png';
import Background3 from '../../assets/img/image-parallax3.png';
const useStyles = makeStyles(styles);

export default function Components() {
  const ParallaxRef = React.useRef();
  const [index,setIndex] = useState(0);
  const classes = useStyles();
  const buttonarr = [document.getElementById('1'),document.getElementById('2'),document.getElementById('3')]
  const [images,addImages] = useState([ParallaxBackground,Background2,Background3]);
  const buttonStyle = {
    backgroundColor:'black',
    margin:'10px',
    fontSize:'16px'
  }
  
  React.useEffect(()=>{
    tawkTo('6126206e649e0a0a5cd2dc2f','1fduetcb0')
    window.addEventListener('scroll',()=>{
      if(window.pageYOffset > 100){
        document.getElementById('logo-image').style.height = '130px'
      }
      else{
        document.getElementById('logo-image').style.height = '200px';
      }
    })    

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
                <h1 className={classes.title}>GOIGNIS</h1>
                <h3 className={classes.subtitle}>
                  Your Fire Protection Design Partner
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
      <SectionCarousel/>
      <GoIgnisPromise/>
      <SectionCarasouel/>
      <SectionLogin/>
      <Footer/>
      </div>
    </div>
  );
}
