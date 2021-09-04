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

export default function Fearures() {
  const classes = useStyles();
  
  return (
    <div className={classes.section} >
      <div className={classes.container}>
        <GridContainer >
          <GridItem xs={12} sm={10} md={6} className={classes.marginAuto} >
            <Card>
              <div>
                <img src="https://solidedge.siemens.com/wp-content/uploads/2018/04/cad-drawing-and-drafting-432x270.jpg" style={{width:'100%',margin:'0 auto 0 auto'}} alt="First slide" className="slick-image" />
                <div className="slick-caption"></div>
              </div>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <h2 className={classes.textCenter}>
            <strong>Our mission </strong>
            <h3  style={{
                color:'black'
            }}>99% Accuracy</h3>
            </h2>

            <h4 className={classes.textCenter}>
                {" "}
                To provide technology enabled design and drafting services to our clients. Make our clients more
                profitable with faster turnaround times and low cost services while maintaining high quality
                output.
                <br />
              <a href="mailto:rohit@goignis.com" color="black">
                <Button> Contact us </Button>
              </a>
            </h4>
          </GridItem>

         
          <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.textCenter}>
          <strong>Who we are</strong>
          <h3  style={{
              color:'black'
          }}>Designers for contractors (Built by contractors for contractors)</h3>
          </h2>

          <h4 className={classes.textCenter}>
              {" "}
              Goignis was founded by protection contractors just like you. We understand the Low-voltage
              industry and the pain points that affects profitability - Delays, Accuracy and more.
              <br />
            <a href="mailto:rohit@goignis.com" color="black">
              <Button> Contact us </Button>
            </a>
          </h4>
          </GridItem>

          <GridItem xs={10} sm={8} md={3} className={classes.marginAuto} style={{margin:'0 auto 0 auto'}}>
            <Card>
              <div>
                <img src="https://2.bp.blogspot.com/-blNfVTEL2rQ/V0A1GIeu78I/AAAAAAAAGL0/24qUmdfq3QAlgyG0b2tAD_FigxlAVnpOQCLcB/s1600/FAdesign1.gif" style={{width:'100%',height:'200px'}} alt="First slide" className="slick-image" />
                <div className="slick-caption"></div>
              </div>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer >
          <GridItem xs={12} sm={10} md={6} className={classes.marginAuto} >
            <Card>
              <div>
                <img src="https://www.deskera.com/blog/content/images/2021/05/profits.png" style={{width:'100%',margin:'0 auto 0 auto'}} alt="First slide" className="slick-image" />
                <div className="slick-caption"></div>
              </div>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
          <h2 className={classes.textCenter}>
          <strong>Enhance Profitability</strong>
          <h3  style={{
              color:'black'
          }}>Reduce your design costs by 50%</h3>
          </h2>

          <h4 className={classes.textCenter}>
              {" "}
              We design and draft fire alarm plans starting from $99 onwards. We are committed to work with
              you to improve office & field productivity and run a leaner organization by augmenting your design
              team.
              <br />
            <a href="mailto:rohit@goignis.com" color="black">
              <Button> Contact us </Button>
            </a>
          </h4>
          </GridItem>

         
          <GridItem xs={12} sm={12} md={8}>
          <h2 style={{
              marginTop:'100px'
          }} className={classes.textCenter}>
          <strong>Turn around time</strong>
          <h3  style={{
              color:'black'
          }}>24 hour delivery</h3>
          </h2>

          <h4 className={classes.textCenter}>
              {" "}
              We deliver fire alarm plans within 24 hours* from the go ahead. Yes, you read it right, within 24
              hours, while ensuring high quality and accuracy
              <br />
            <a href="mailto:rohit@goignis.com" color="black">
              <Button> Contact us </Button>
            </a>
          </h4>
          </GridItem>

          <GridItem xs={10} sm={8} md={3} className={classes.marginAuto} style={{margin:'0 auto 0 auto'}}>
            <Card>
              <div style={{marignTop:'50px'}}>
                <img  src="https://graphicriver.img.customer.envatousercontent.com/files/312280896/Isometric%20super%20businessman%20flying%20fast%20to%20delivery%20parcel%20to%20customer_Preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=eb96cd80efc0b403e175f3685c4e1a92" style={{width:'100%'}} alt="First slide" className="slick-image" />
                <div className="slick-caption"></div>
              </div>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}