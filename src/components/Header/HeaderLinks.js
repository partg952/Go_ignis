/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list} style={{
      display:'flex',
      flexWrap:'wrap',
      alignItems:'center',
      justifyContent:'center'
    }}>
      <ListItem className={classes.listItem}>
      <Link to='/services'>
      <Button
      color="transparent"
      target="_blank"
      className={classes.navLink}
      >Services</Button>
      </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to='/pricing'>
        <Button
        color="transparent"
        target="_blank"
        className={classes.navLink}
        >
        Pricing
        </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
      <Link to='/resources'>
        <Button
        color="transparent"
        target="_blank"
        className={classes.navLink}
        >
        Resources
        </Button>
      </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to='/contact'>
          <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
          >
          Contact
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
      <Link to='/about'>
        <Button
        color="transparent"
        target="_blank"
        className={classes.navLink}
        >
        About
        </Button>
      </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
           style={{
             backgroundColor:'red',
             height:'30px',
             margin:'5px'
           }}
          target="_blank"
          className={classes.navLink}
        >
          SignUp
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
        style={{
             backgroundColor:'red',
             height:'30px', 
             margin:'5px'
           }}
           color="red"
          target="_blank"
          className={classes.navLink}
        >
          Login
        </Button>
      </ListItem>
    
        
    </List>
  );
}
