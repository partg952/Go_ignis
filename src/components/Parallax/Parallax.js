import React from "react";
import {useState} from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from 're-carousel'
import { makeStyles } from "@material-ui/core/styles";
import Background2 from '../../assets/img/image-parallax2.png';
import Background3 from '../../assets/img/image-parallax3.png';
import ParallaxBackground from '../../assets/img/parallax-back.webp'

// core components
import styles from "assets/jss/material-kit-react/components/parallaxStyle.js";

const useStyles = makeStyles(styles);

export default function Parallax(props) {
  const [index,setIndex] = useState(0);
  const [images,addImages] = useState([ParallaxBackground,Background2,Background3]);
  let windowScrollTop;
  if (window.innerWidth >= 768) {
    windowScrollTop = window.pageYOffset / 3;
  } else {
    windowScrollTop = 0;
  }
  const [transform, setTransform] = React.useState(
    "translate3d(0," + windowScrollTop + "px,0)"
  );
  React.useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", resetTransform);
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener("scroll", resetTransform);
      }
    };
  });
  const resetTransform = () => {
    var windowScrollTop = window.pageYOffset / 3;
    setTransform("translate3d(0," + windowScrollTop + "px,0)");
  };
  const { filter, className, children, style, image, small } = props;
  const classes = useStyles();
  const parallaxClasses = classNames({
    [classes.parallax]: true,
    [classes.filter]: filter,
    [classes.small]: small,
    [className]: className !== undefined,

  });
  

const divStyle={
  height:'100%',
  width:'100%',
}
const imageStyle = {
  height:'100%',
  width:'100%',
  objectFit:'cover'
}
  return (
    <div  ref={props.parallaxRef} className={parallaxClasses}>
      <div style={{
      height:'100%',
      width:'100%',
      position: 'absolute',
      zIndex:'-99',
      left:'0',
    }}>
      <Carousel  loop auto interval={3000}>
        <div style={divStyle}>
        <img src={ParallaxBackground} alt="" style={imageStyle}/>
        </div>
        <div style={divStyle}>
          <img style={imageStyle} src="https://drawfolio.s3.amazonaws.com/public/system/pictures/images/000/124/311/original/cad-drafting.jpg?1523953504" alt="" />
        </div>
        <div style={divStyle}>
          <img style={imageStyle} src={Background3} alt="" />
        </div>
      </Carousel>
      
      </div>
      {children}
    </div>
  );
}

Parallax.propTypes = {
  className: PropTypes.string,
  filter: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.string,
  image: PropTypes.string,
  small: PropTypes.bool,
};
