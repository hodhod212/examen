import React, { Component } from 'react';
import {ContactContainer} from './contact.style';
class Contact extends Component {
    render() { 
        return (
            <ContactContainer>
               <h1>Contact information</h1>
               <p>Company name: Gothenburg Clothing</p>
               <p>Telephone number: +46736871550</p> 
               <p>E-mail: hodhod212@yahoo.com</p>
            </ContactContainer>
        );
    }
}
 
export default Contact;


