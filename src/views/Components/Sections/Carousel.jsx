import React from "react";
// react component for creating beautiful carousel
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import './Carousel.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider from 'infinite-react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
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
  const carouselRef = React.useRef(null);
const onNextStart = (currentItem, nextItem) => {
  if (currentItem.index === nextItem.index) {
    carouselRef.current.goTo(0);
  }
};

  return (
    <div  style={{
      height:'auto',
      
    }}>
      <div style={{
        height:'auto'
      }}>
      <Slider dots autoplay={true} arrows={false}>
        <Card className='cards'>

          <h3>"Victor is the best serviceman i have ever seen from GoIgnis"</h3>
          <span id="user">
            <img src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987" className='people-image' alt="" />   
            <p>Bill Gates</p>
          </span>
        </Card>
        <Card className='cards'>

        <h3>"The service person was very kind and also had a lost of technical knowledge"</h3>
        <span id="user">
          <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/C670/production/_103600805_linustorvalds.gif" className='people-image' alt="" />   
          <p>Linus Torvalds</p>
        </span>
      </Card>
      <Card className='cards' >

      <h3>"I want peter as my service person as he was really kind and fast"</h3>
      <span id="user">
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg" className='people-image' alt="" />   
        <p>Elon Musk</p>
      </span>
    </Card>
      </Slider>
      </div>
    </div>
  );
}