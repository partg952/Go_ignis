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
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={10} md={6} className={classes.marginAuto}>
            <Card>
              <div>
                <img src="https://static.wixstatic.com/media/1717c1a97d9c4914a55aee50264fe642.jpg/v1/fill/w_381,h_254,al_c,q_80,usm_0.66_1.00_0.01/1717c1a97d9c4914a55aee50264fe642.webp" alt="First slide" style={{width:'100%'}} className="slick-image" />
                <div className="slick-caption"></div>
              </div>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <h2 className={classes.textCenter}>
              <strong>Stay in control of your designs</strong>
            </h2>

            <p className={classes.textCenter}>
              <h3 style={{color:'black'}}>
                {" "}
                
Ensure your customers always have the highest quality designs.​

Talk to expert designers and your account manager anytime.​

Get regular project status to update your customer on delivery date.
              </h3>

              <a href="mailto:rohit@goignis.com" color="black">
                <Button> Contact us </Button>
              </a>
            </p>
          </GridItem>

         
          <GridItem xs={12} sm={12} md={6}>
            <h2 className={classes.textCenter}>
            
           <strong>Serve your customers better</strong>
            </h2>

            <p className={classes.textCenter}>
              <h3  style={{color:'black'}}>
                {" "}
                
                Our expert design team guarantees fast delivery

Delight customers with each project delivery. Our services ensure you never miss a deadline.
              </h3>

              <a href="mailto:rohit@goignis.com" color="black">
                <Button> Contact us </Button>
              </a>
            </p>
          </GridItem>

          <GridItem xs={10} sm={10} md={6} className={classes.marginAuto} style={{margin:'0 auto 0 auto'}}>
            <Card>
              <div>
                <img src="https://static.wixstatic.com/media/11062b_efb31eee0fd54abaa04a2d1c519ad730~mv2.jpeg/v1/fill/w_407,h_272,al_c,q_80,usm_0.66_1.00_0.01/11062b_efb31eee0fd54abaa04a2d1c519ad730~mv2.webp" style={{width:'100%'}} alt="First slide" className="slick-image" />
                <div className="slick-caption"></div>
              </div>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
