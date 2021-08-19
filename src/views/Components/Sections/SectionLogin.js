import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import People from "@material-ui/icons/People";
import Email from "@material-ui/icons/Email";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import axios from 'axios';
import styles from "assets/jss/material-kit-react/views/componentsSections/loginStyle.js";
import { Phone } from "@material-ui/icons";
import { send } from "q";

const useStyles = makeStyles(styles);



export default function SectionLogin() {

  function sendMail(email,name,message){
    console.log(email,message,name)
    axios.post('https://goignis-api.herokuapp.com/send-mail',{
      email:email,
      message:message,
      name:name
    })  
    .then(res=>{
      console.log(res.data)
      document.getElementById('success').style.display = 'block';
    }).catch(err=>{
      console.log(err);
      alert('something went wrong please try again');
    })
  }
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <form className={classes.form}  >
                <CardHeader color="primary" className={classes.cardHeader}>
                  <h4>Login</h4>
                  <div className={classes.socialLine}>
                    <Button
                      justIcon
                      href="#pablo"
                      target="_blank"
                      color="transparent"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className={classes.socialIcons + " fab fa-twitter"} />
                    </Button>
                    <Button
                      justIcon
                      href="#pablo"
                      target="_blank"
                      color="transparent"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className={classes.socialIcons + " fab fa-facebook"} />
                    </Button>
                    <Button
                      justIcon
                      href="#pablo"
                      target="_blank"
                      color="transparent"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i
                        className={
                          classes.socialIcons + " fab fa-google-plus-g"
                        }
                      />
                    </Button>
                  </div>
                </CardHeader>
               
                <CardBody>
                  <CustomInput
                    labelText="First Name..."
                    id="firstname"
                    name='firstname'
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: "text",
                      endAdornment: (
                        <InputAdornment position="end">
                          <People className={classes.inputIconsColor} />
                        </InputAdornment>
                      ),
                    }}
                  />
                    <CustomInput
                    labelText="Last Name..."
                    id="lastname"
                    name='lastname'
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: "text",
                      endAdornment: (
                        <InputAdornment position="end">
                          <People className={classes.inputIconsColor} />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <CustomInput
                    labelText="Email..."
                    id="email"
                    name='email'
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: "email",
                      endAdornment: (
                        <InputAdornment position="end">
                          <Email className={classes.inputIconsColor} />
                        </InputAdornment>
                      ),
                    }}
                  />
                   <CustomInput
                    labelText="Phone"
                    id="phone"
                    name='phone'
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: "phone",
                      endAdornment: (
                        <InputAdornment position="end">
                          <Phone className={classes.inputIconsColor} />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <h6>Message</h6>
          <textarea
       style={{width:'100%'}}        
          rows={5}
          cols={40}
          id='message'
          name='message'
        />  
        <h5 style={{display:'none',textAlign:'center'}} id='success'>Your message has been received by us</h5>
                </CardBody>
                <CardFooter className={classes.cardFooter} >
                  <Button onClick={()=>{

                    let name = document.getElementById('firstname').value + document.getElementById('lastname').value
                    let email = document.getElementById('email').value;
                    let message = document.getElementById('message').value;
                    console.log(name)
                    sendMail(email,name,message)
                  }} simple color="primary" size="lg" >
                    Submit
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}