import React from "react";
import classNames from "classnames";
import {useState} from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../../assets/img/goignislogo.so.png";
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/components.js";
import tawkTo from "tawkto-react";
import Footer from "views/Components/Sections/Footer";
import SectionLogin from "views/Components/Sections/SectionLogin";
import HeaderLinks from '../../components/Header/HeaderLinks';
import ContactInfo from "views/Components/Sections/ContactInfo";


function Privacy() {
    const useStyles = makeStyles(styles);
    const buttonStyle = {
        fontSize:'16px',
        backgrundColor:'black',
        color:'white',
        fontWeight:'bold'
    }
    const classes = useStyles();
    tawkTo('6126206e649e0a0a5cd2dc2f','1fduetcb0')
    window.addEventListener('scroll',()=>{
      if(window.pageYOffset > 100){
        document.getElementById('logo-image').style.height = '130px'
      }
      else{
        document.getElementById('logo-image').style.height = '200px';
      }
    })    

    return (
        <div>
        <ContactInfo/>
        <Header
        brand={
            <img src={Logo} height="200px" id='logo-image'/>

      } // prettier-ignore
      rightLinks={<HeaderLinks/>}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 100,
          color: "white", 
        }}
      />
      <Parallax>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                    <strong><h1 style={{color:'black'}}>Privacy Policy</h1></strong>
              </div>
              
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>   
      
     
      
      <div className={classNames(classes.main, classes.mainRaised)}>
      <Link style={{margin:'100px'}}> Home/Privacy Policy</Link>
    
            <div style={{  margin: '80px 80px'  }}>
          <h5 >
          At GoIGNIS Technologies LLP (including its subsidiaries or affiliated
companies, are also referred to in this policy as ‘GoIGNIS’, ‘we’ or
the ‘Company’), We understand that you are trusting us with
confidential information. We believe that you have a right to know
our practices regarding the information we collect and use when
you use our service or interact with us in any manner.
         
</h5>  <h5 >
          GoIGNIS is a cloud-based platform that enables organizations to
manage their design specific requirements in the Fire Detection,
Alarm and Protection industry. Also, GoIGNIS operates https://
www.goignis.com website.
</h5>
<h5 >
A user may be either an entity, for example, an employer who has
executed an agreement with GoIGNIS or with GoIGNIS’s resellers
or distributors who provide GoIGNIS’s services (“Client”) or a
Client’s users, for example, a Client’s employees, of the Services or
users of the Website (“End User(s)“) (Client and End User shall
collectively be referred to as “Users” or “you“).
</h5>
<h5 >
This Privacy Policy describes the policies and procedures of
GoIGNIS on the collection, use, access, correction, and disclosure
of your Personal Information on www.goignis.com (the “Site”) or any
of its subdomains and our Mobile Apps. Your Personal Information
includes any information which, either alone or with other data, is
reasonably available to Us and relates to you (“Personal
Information”). This Privacy Policy also covers any of your Personal
Information provided to Us and which is used in connection with the
marketing of the services, features or content. We offer (the
“Services”) to Our Clients and/or the support that we give you in
connection with the provision of our Services and Mobile Apps.
</h5>

<h5 >
This Privacy Policy does not apply to any third-party applications or
software that can be accessed from the Site, the Services or the
Mobile Apps, such as external applicant tracking systems, social
media websites or partner websites (“Third Party Services”).
</h5>
<br />
<br />
<h5 >
By using our Services, you acknowledge you have read and
understood this Privacy Policy.
</h5>
<br />
<br />
<h5 >
For the purposes of GDPR or European Economic Area data
protection law (the “Data Protection Law “), the data controller of the
data processed through the Service is the Client, who makes
available and permits End Users or anyone on its behalf to access
and use the Service. For data retained through the website or data
processed not through the Service (i.e., contact details of potential
Clients for the purpose of engagement with GoIGNIS), GoIGNIS is
the controller (the “Controller”).


</h5>

  <h1> Information we collect and how we use
it</h1>
<h5 > 
Non-personal Information
The first type of Data is non-identifiable and anonymous information
(“Non-personal Information”). We are not aware of the User's
identity from the collected Non- Personal Information. Non-Personal
Information is any unconcealed information available to us while
Users are using the Service or the Website. Non-personal
Information which is gathered consists of technical information and
behavioral information and may include the User’s Internet protocol
(IP) address used to connect your computer to the Internet, your
uniform resource locators (URL), operating system, type of browser,
browser plug-in types and versions, screen resolution, Flash
version, time zone setting, the User’s ‘click-stream on the Website
and Services, the period of time the User visited a specific page on
the Website or Service and methods used to browse away from a
page</h5>

<h3>Personal Information</h3>
<h5>We generally collect and process the following types of Personal
Information:</h5>
<h5>Personal Information which is gathered through the Service
consists of personal details provided consciously and voluntarily by
a Client (Employer), End User or the Client’s administrator or 
through your use of the GoIGNIS platform. This may include your
name (first and last), nickname, phone number(s), address, country,
city, postcode, your bank account details (bank name, account
number, branch address), status in the system and the workplace,
IP address and other unique identifiers, information the Client
chooses to collect and additional information the User may choose
to provide to GoIGNIS and its employees.
</h5>

<h3>Location Information</h3>
<h5>We do not ask you to access or track any location-based
information from your mobile device while downloading or using the
Mobile Apps. However, if you are using the GoIGNIS Mobile App,
your employer may enable location tracking technology for address
fetching purposes.</h5>
<h3>Contact Information</h3>
<h5>When you express an interest in obtaining additional information
about the Services, the Site, or Mobile Apps, GoIGNIS may ask you
to provide your personal contact information, such as your name,
email address, and phone number. This information is used to
communicate with you by responding to your requests, comments
and questions. The GDPR legal basis for processing this
information is the legitimate interest in communicating with you and
answering your questions.</h5>

<h3>Device Information</h3>
<h5>When using the Mobile Apps, We may request access to your
device’s camera and photo storage. This allows you to take and
upload pictures, and such access would only be used in ways you
choose. You may at any time revoke access at the device level. We
do not access your device’s camera and photo storage without your
permission. We use mobile analytics software to allow Us to better
understand the functionality of Our Mobile Apps on your phone. This
software may record information such as how often you use the
application, the events that occur within the application, aggregated
usage, performance data, and where the application was
downloaded from. We do not link the information. We store the
Personal Information you submit within the Mobile Apps within the 
analytics software. When you download and use the Mobile Apps,
We automatically collect your device information such as operating
system version, type, hardware usage statistics, etc. The GDPR
legal basis for processing this information is our contractual
obligation to your employer to perform our Services</h5>

<h3>Data Collected as a Service Provider</h3>
<h5>GoIGNIS systems only collect information as per the Client
(employer’s) requirement. Our Master Subscription Agreement
governs the delivery, access, and use of the Services and Mobile
Apps, including the processing of Personal Information and data
submitted through Services accounts. The Client (e.g., your
employer) controls their Platform and any associated client data. If
you have any questions about specific Platform settings, the
processing of Personal Information in the Platform, or its privacy
practices, please contact the Client administrator of the Platform
you use. GoIGNIS uses Client data in accordance with the Client’s
instructions, applicable terms in the Master Subscription
Agreement, Client’s use of Services functionality, and as required
by applicable law. Under applicable GDPR, GoIGNIS is a processor
of Client data, and the Client is the controller.</h5>

<h1>Sharing of your Information</h1>
<h4>Third Party Services</h4>
<h5>At times, you may be able to access other Third-Party Services
through the Site, for example, by clicking on links to Third-Party
Services from within the Site. We are not responsible for the privacy
policies and/or practices of these Third-Party Services, and you are
responsible for reading and understanding those Third-Party
Services’ privacy policies.</h5>

<h5>Information Shared with Our Service Providers.
We may share your information with third parties who provide
services to Us. These third parties are authorized to use your
Personal Information only as necessary to provide these services to
Us. These services may include the provision of</h5>

<h5>
    <ol>
        <ul>(i) email services to send marketing communications,</ul>
        <ul> (ii) mapping services,</ul>
        <ul> (iii) Client service or support, and</ul>
        <ul> (iv) providing cloud computing infrastructure</ul>
    </ol>

</h5>

<h3>Information Shared with Our Sub-Processors</h3>
<h5>We employ and contract with people and other entities that perform
certain tasks on Our behalf and who are under Our control, such as
email service providers to send emails on Our behalf, mapping
service providers, and Client support providers Our “SubProcessors”). We may need to share Personal Information with Our
Sub-Processors to provide Services to you. Unless We tell you
differently, Our Sub-Processors do not have any right to use
Personal Information or other information We share with them
beyond what is necessary to assist Us. Transfers to subsequent
third parties are covered by onward transfer agreements between
GoIGNIS and each Sub-Processor. A list of GoIGNIS SubProcessors that process the Personal Information of individuals
located in the EU can be found here.</h5>

<h3>Information Shared with Our Sub-Processors</h3>
<h5>We employ and contract with people and other entities that perform
certain tasks on Our behalf and who are under Our control such as
an email service providers to send emails on Our behalf, mapping
service providers, and Client support providers Our “SubProcessors”). We may need to share Personal Information with Our
Sub-Processors in order to provide Services to you. Unless We tell
you differently, Our Sub-Processors do not have any right to use
Personal Information or other information We share with them
beyond what is necessary to assist Us. Transfers to subsequent
third parties are covered by onward transfer agreements between
GoIGNIS and each Sub-Processor..</h5>

<h3>Information Disclosed Pursuant to Business Transfers</h3>
<h5>In some cases, we may choose to buy or sell assets. In these types
of transactions, User information is typically one of the transferred
business assets. Moreover, if We, or substantially all of Our assets,
are acquired, or if We go out of business or enter bankruptcy, User 
information would be one of the assets that are transferred or
acquired by a third party. You acknowledge that such transfers may
occur and that any acquirer of Us or Our assets may continue to
use your Personal Information as set out in this Privacy Policy. You
will be notified via email and/or a prominent notice on Our Site of
any change in the legal owner or uses of your Personal Information,
as well as any choices you may have regarding your Personal
Information.</h5>

<h3>Information Disclosed for Our Protection and the Protection of
Others</h3>
<h5>In certain situations, we may be required to disclose Personal
Information in response to lawful requests by public authorities,
including national security or law enforcement. We also reserve the
right to access, read, preserve, and disclose any information as We
reasonably believe is necessary to</h5>

<h5>
    <ol>
        <li> (i) satisfy any applicable law, regulation, legal process or
governmental request</li>
<li>(ii) enforce this Privacy Policy, including investigation of
potential violations hereof,</li>
<li>(iii) detect, prevent, or otherwise address fraud, security, or
technical issues;</li>
<li> (iv) respond to user support requests; or</li>
<li> (v) protect Our rights, property, or safety.</li>
    </ol>
</h5>
<h5>This includes exchanging information with other companies and
organizations for fraud protection and spam/malware prevention.
We require all third parties to respect the security of your Personal
Information and to treat it in accordance with applicable laws. We
do not allow third party service providers and Sub-Processors We
share your Personal Information with to use it for their own
purposes and only permit them to process your Personal
Information for specific purposes in accordance with Our
instructions. Except as set forth above, you will be notified when
your Personal Information is shared with third parties, and will be
able to prevent the sharing of this information. Unless We otherwise
have your consent, We will only share your Personal Information in
the ways that are described in this Privacy Policy.</h5>
<h3>Data Retention</h3>
<h5>Any Client may request information regarding the storage and
retention of data (“Audit”) by contacting Us. GoIGNIS will make
reasonable efforts to respond to the Audit in a reasonable time and
subject to applicable law and to protect GoIGNIS’s trade secrets
(Client’s personnel may be required to execute non-disclosure
agreements).</h5>
<h5>GoIGNIS retains data it processes on behalf of its Clients only for
as long as required to provide the Service to its Clients and as
necessary to comply with its legal obligations, resolve disputes and
enforce its agreements. The data in GoIGNIS is backed up for
system continuity purposes, and each backup file may be stored for
90 days.</h5>
<h5>Each User must keep the appropriate backup of its data. GoIGNIS
is not responsible for any deletion of data or any breach to the
database or any erroneous data unless otherwise agreed with the
Client.</h5>

<h5>After a termination of services by a Client, an automated process
begins that permanently deletes the data after 30 days. Once
begun, this process cannot be reversed, and data will be
permanently deleted.</h5>

<h5>Please note that some metadata and statistical information
concerning the Use of the Service is not subject to the deletion
procedures in this policy and so may be retained by GoIGNIS in an
anonymized manner for no more than required to conduct its
business. You will not be able to be identified from this data.</h5>

<h5>Some data may also be retained on our third-party service
providers’ servers until deleted in accordance with their privacy
policy and their retention policy. You will not be identifiable from this
retained metadata or statistical information.</h5>

<h5>Anonymized aggregated data may be retained by GoIGNIS for as
long it is required to provide its services. Contracts and billing
information may be retained as required by GoIGNIS but at least
five years from termination or expiration of the relationship with the
applicable Client or party.</h5>

<h5>Clients may retain Personal Information and other Data about an
End User which the Controller owns and the End User may have no
access to. If you have any questions about the rights of the Client to
retain and process your Personal Information, raise these queries
directly with the Client. You hereby agree not to assert any claim
against GoIGNIS in this regard and waive any rights regarding such
Data and Personal Information, including the right to view and
control such Data and Information.</h5>

<h3>Your Rights Associated with Your Information</h3>
<h5>If we are storing your personal information, you have the following
rights to your information based on the services and your region.</h5>

<h5>In the event that you have provided Personal Information to Us on
our website www.goignis.com, We will provide you with information
about whether we hold any of your Personal Information. You may
access, correct, or request deletion of your Personal Information by
contacting Us at support@goignis.com. We will respond to your
request within a reasonable timeframe.</h5>

<h5>If located in the European Economic Area (“EEA”), you have the
following rights regarding your Personal Information where we
directly collected from you and that we control. (This does not apply
to data collected by our Client organizations):</h5>

<h3>Right of Access</h3>
<h5>You can request details of your Personal Information We hold. We
will confirm whether We are processing your Personal Information
and We will disclose additional information including the types of
Personal Information, the sources it originated from, the purpose
and legal basis for the processing, the expected retention period
and the safeguards regarding data transfers to non-EEA countries, 
subject to the limitations set out in applicable laws and regulations.
We will provide you free of charge with a copy of your Personal
Information but We may charge you a fee to cover Our
administrative costs if you request further copies of the same
information.</h5>

<h3>Right of correction</h3>
<h5>At your request, We will correct incomplete or inaccurate parts of
your Personal Information, although We may need to verify the
accuracy of the new information you provide us.</h5>

<h3>Right to be forgotten</h3>
<h5>
At your request, We will delete your Personal Information if:
<ol>
    <li>(i)it is no longer necessary for Us to retain your Personal
Information;</li>
<li>(ii)you withdraw the consent which formed the legal basis for
the processing of your Personal Information;</li>
<li>(iii)you object to the processing of your Personal Information
(see below) and there are no overriding legitimate grounds for such
processing;</li>
<li>(iv)the Personal Information was processed illegally;</li>
<li>(v)the Personal Information must be deleted for Us to comply
with Our legal obligations.</li>
    </ol>
    We will decline your request for deletion if processing of your
Personal Information is necessary:
<ol>
    <li>(i)for Us to comply with Our legal obligations;</li>
    <li>(ii)for the establishment, exercise or defense of legal claims; or</li>
    <li>(iii)for the performance of a task in the public interest.</li>
</ol>
</h5>

<h3>Right to restrict processing</h3>
<h5>
At your request, We will restrict the processing of your Personal
Information if:
<ol>
    <li> (i)you dispute the accuracy of your Personal Information;</li>
    <li>(ii)your Personal Information was processed illegally and you
request a limitation on processing rather than the deletion of your
Personal Information;</li>
<li> (iii)We no longer need to process your Personal Information, but
you need your Personal Information in connection with the
establishment, exercise or defense of a legal claim;</li>
<li> (iv)Or you object to the processing of your Personal Information
(see below) pending verification as to whether an overriding
legitimate ground for such processing exists.
We may continue to store your Personal Information to the extent
required to ensure that your request to restrict processing is
respected in the future.</li>
    </ol> 
</h5>

<h3>Right to data portability</h3>
<h5>At your request, We will provide you free of charge with your
Personal Information in a structured, commonly used and machine
readable format, if:
<ol>
    <li> (i)you provided Us with your Personal Information;</li>
    <li> (ii)the processing of your Personal Information is required for
the performance of a contract;</li>
<li> (iii)or the processing is carried out by automated means.</li>
</ol>
</h5>
<h3>Right to object</h3>
<h5>Where We rely on Our legitimate interests (or that of a third-party)
to process your Personal Information, you have the right to object to
this processing on grounds relating to your particular situation if you
feel it impacts on your fundamental rights and freedoms. We will
comply with your request unless We have compelling legitimate
grounds for the processing which override your rights and
freedoms, or where the processing is in connection with the
establishment, exercise or defence of legal claims. We will always
comply with your objection to processing your Personal Information
for direct marketing purposes.</h5>

<h5>Right Not to be Subject to Decisions Based Solely on Automated
Processing</h5>
<h5>You will not be subject to decisions with a legal or similarly
significant effect (including profiling) that are based solely on the
automated processing of your Personal Information, unless you 
have given Us your explicit consent or where they are necessary for
the performance of a contract with Us.</h5>
<h3>Right to Withdraw Consent</h3>

<h5>You have the right to withdraw any consent you may have
previously given Us at any time. In order to exercise your rights in
this section We may ask you for certain identifying information to
ensure the security of your Personal Information. To request
exercising any of the above rights, please email Us
at support@goignis.com. We will respond to your request within 30
days or provide you with reasons for the delay</h5>

<h5>Usually, We will not charge you any fees in connection with the
exercise of your rights. If your request is manifestly unfounded or
excessive, for example, because of its repetitive character, We may
charge a reasonable fee, taking into account the administrative
costs of dealing with your request. If We refuse your request We will
notify you of the relevant reasons.</h5>

<h3>Changes to the privacy policy</h3>
<h5>The terms of this Privacy Policy will govern the use of the Service
and any information collected in connection therewith, however,
GoIGNIS may amend or update this Privacy Policy from time to
time. The most current version of this Privacy Policy will always be
posted at: https://www.goignis.com/privacypolicy Unless otherwise
agreed with the Client, we endeavour to provide notice of material
changes to this policy on the homepage of the website and (if
applicable) via an e-mail. Such material changes will take effect
seven (7) days after such notice was provided on our website or
sent by email. Otherwise, all other changes to this Privacy Policy
are effective as of the stated “Last Revised” date and your
continued use of Services will constitute your active acceptance of,
and agreement to be bound by, the changes to the Privacy Policy.</h5>


<h5>If you have any questions (or comments) concerning this Privacy
Policy, please email us at support@goignis.com and we endeavour
to reply within a reasonable timeframe, and not over 30 business
days.</h5>


      </div>
      
        <SectionLogin/>
        <Footer/>
      </div>
        </div>
    )
}

export default Privacy
