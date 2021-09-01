import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    interval: 10,
  cycle: true,
  };
  const imageStyle = {
      height:'50px',
      width:'50px',
      borderRadius:'50px',
      marginRight:'auto',
      marginLeft:'auto',
      marginTop:'100px',
      objectFit:'cover'
  }
  const review  = {
    marginTop:'-300px'
  }
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem className={classes.marginAuto}>
            <Card carousel >
              <Carousel {...settings}>
           
                <div>
                <img src={image1} alt="First slide" className="slick-image" />
                <div className="slick-caption">
                <h1 style={review}>"Just Love it i hope i get servicing again from victor "</h1>
                    <h4>
                      <img style={imageStyle}  src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgwMTc5MTIxNDE2OTcxNjA4/gettyimages-1165301142.jpg" alt="" className="user-image" />
                      <h4>Bill Gates</h4>
                    </h4>
                  </div>
                </div>
                
                
                <div>
                <img
                    src={image2}
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h1 style={review} >"The service person was very kind and had a lot of technical knowledge"</h1>
                    <h4>
                      <img style={imageStyle}  src="https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg" alt="" />
                     Jeff Bezos
                    </h4>
                  </div>
                </div>
               
                <div>
                  <img src={image3} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                  <h1 style={review} >"I tried a lot of services but i found Goignis to be the best of them"</h1>
                   
                    <h4>
                      <img style={imageStyle} src="https://www.nickiswift.com/img/gallery/the-untold-truth-of-jack-dorsey/intro-1611003280.jpg" alt="" />
                      Jeff Dorsey
                    </h4>
                  </div>
                </div>
              
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
