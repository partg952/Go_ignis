import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import People from "@material-ui/icons/People";
import Email from "@material-ui/icons/Email";
// core components
import GridContainer from "components/Grid/GridContainer.js";
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
import './SectionLogin.scss';
import { useMediaQuery } from 'react-responsive'

const useStyles = makeStyles(styles);



export default function SectionLogin() {
  const dimensions = {
    width:'60%',
    margin:'0 auto '
  }
  const breakPoint = useMediaQuery({maxWidth:430})
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

  if(breakPoint){
    dimensions.width = '90%'
  }
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center" className='container' style={dimensions}>
        <Card>
        <form className={classes.form} style={{padding:'5px'}}  >
        <CardHeader color="primary" className={classes.cardHeader}>
        <h3>Get In Touch</h3>
        </CardHeader>
                <CardBody  style={{
                  padding:'0px',
                  textAlign:'center',

                }}>
                <div id="inputs" style={{
                }}>
                <CustomInput
                labelText="First Name"
                id="firstname"
                name='firstname'  
                
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
                      labelText="Last Name"
                      id="lastname"
                      name='lastname'
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
                    
                    inputProps={{
                      type: "phone",
                      endAdornment: (
                        <InputAdornment position="end">
                        <Phone className={classes.inputIconsColor} />
                        </InputAdornment>
                      ),
                    }}
                    />
                    </div>
                    <h6>Message</h6>
                    <textarea
                    style={{width:'80%'}}        
                    rows={5}
                    cols={40}
                    id='message'
                    name='message'
        />  
        <h5 style={{display:'none',textAlign:'center'}} id='success'>Your message has been received by us</h5>
                </CardBody>
                <CardFooter className={classes.cardFooter} >
                  <Button onClick={()=>{
		    console.log('clicked')
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
        </GridContainer>
      </div>
    </div>
  );
}
