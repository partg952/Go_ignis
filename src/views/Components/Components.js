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
const useStyles = makeStyles(styles);

export default function Components() {
  const classes = useStyles();
  const buttonStyle = {
    backgroundColor:'black',
    margin:'10px',
    fontSize:'16px'
  }
  return (
    <div>
      <Header
        brand={
            <img src={Logo} height="200px"/>

      } // prettier-ignore
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 100,
          color: "white",
        }}
      />
      <Parallax image="https://static.wixstatic.com/media/11062b_e34279a10c994e13939684cd984a3fb6~mv2_d_4636_3091_s_4_2.jpg/v1/fill/w_980,h_587,al_c,q_85,usm_0.66_1.00_0.01/11062b_e34279a10c994e13939684cd984a3fb6~mv2_d_4636_3091_s_4_2.webp">
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
      <SectionTabs/>
      <SliderSection/>
      <GoIgnisPromise/>
      <SectionCarousel/>
      <SectionLogin/>
      </div>
    </div>
  );
}
