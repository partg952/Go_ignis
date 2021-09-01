import React from "react";
import classNames from "classnames";
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
import Carousel from "./Sections/Carousel";
const useStyles = makeStyles(styles);

export default function Components() {
  const classes = useStyles();
  const buttonStyle = {
    backgroundColor:'black',
    margin:'10px',
    fontSize:'16px'
  }
  React.useEffect(()=>{
    tawkTo('6126206e649e0a0a5cd2dc2f','1fduetcb0')
  })
  return (
    <div>
    <ContactInfo/>
      <Header
        brand={
            <img src={Logo} height="200px"/>

      } // prettier-ignore
      rightLinks={<HeaderLinks/>}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 100,
          color: "white",
        }}
      />
      <Parallax image={ParallaxBackground}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>GOIGNIS</h1>
                <h3 className={classes.subtitle}>
                  Your Fire Protection Design Partner
                </h3>
              </div>
              <div>
                <Button style={buttonStyle}>CAD Drafting</Button>
                <Button style={buttonStyle}>Pre-Bid Design</Button>
                <Button style={buttonStyle}>Permit Design</Button>
                <Button style={buttonStyle}>As-Built Drawings</Button>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
      <SectionCarousel/>
      <GoIgnisPromise/>
    < Carousel/>
      <SectionLogin/>
      </div>
    </div>
  );
}
