import React from "react";
// react component for creating beautiful carousel
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import './Carousel.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from 'react-elastic-carousel';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";


const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  
  return (
    <div className={classes.section}>
      <div className={classes.container}>
      <Carousel>
        <div className='cards'>
        
        </div>
      </Carousel>
      </div>
    </div>
  );
}