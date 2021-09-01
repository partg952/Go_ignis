import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";

import Card from "components/Card/Card.js";



const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  
  return (
    <div className={classes.section} >
      <div className={classes.container}>
        <GridContainer >
          <GridItem xs={12} sm={10} md={6} className={classes.marginAuto} >
            <Card>
              <div>
                <img src="https://static.wixstatic.com/media/e55b24370d50452987eb5c86568e1d3b.jpg/v1/fill/w_434,h_289,al_c,q_80,usm_0.66_1.00_0.01/e55b24370d50452987eb5c86568e1d3b.webp" style={{width:'100%',margin:'0 auto 0 auto'}} alt="First slide" className="slick-image" />
                <div className="slick-caption"></div>
              </div>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <h2 className={classes.textCenter}>
            <strong>Make your Fire Protection business more profitable</strong>
            </h2>

            <p className={classes.textCenter}>
              <h3 style={{color:'black'}}>
                {" "}
                
                With permit design package prices as low as $99*, GoIGNIS reduces design costs and increases your profit margins.

​

​Our reliable, accurate, and great value designs for AHJ approval ensure you never waste time revising designs...

​

​GoIGNIS is your go-to fire protection design partner for sales proposals and permit designs!
              </h3>

              <a href="mailto:rohit@goignis.com" color="black">
                <Button> Contact us </Button>
              </a>
            </p>
          </GridItem>

         
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.textCenter}>
                <strong> Make your fire protection
                 business more efficient</strong>
            </h2>

            <p className={classes.textCenter}>
              <h3 style={{color:'black'}}>
                {" "}
                
                We Design & Engineer Fire Detection, Alarm & Protection Systems as per NFPA and local AHJ requirements. We work on all types of residential, commercial and industrial, Fire Alarm and Sprinkler projects.
              </h3>

              <a href="mailto:rohit@goignis.com" color="black">
                <Button> Order your 1st design </Button>
              </a>
            </p>
          </GridItem>

          <GridItem xs={10} sm={8} md={3} className={classes.marginAuto} style={{margin:'0 auto 0 auto'}}>
            <Card>
              <div>
                <img src="https://static.wixstatic.com/media/9730218509a741efa719e476a35cb5d1.jpg/v1/fill/w_263,h_339,al_c,q_80,usm_0.66_1.00_0.01/9730218509a741efa719e476a35cb5d1.webp" style={{width:'100%'}} alt="First slide" className="slick-image" />
                <div className="slick-caption"></div>
              </div>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}