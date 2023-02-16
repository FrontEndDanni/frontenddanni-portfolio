import React, { useRef } from 'react';
import { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import 'animate.css';
import emailjs from '@emailjs/browser';
import contactImg from '../assets/images/contact-img.svg';
import TrackVisibility from 'react-on-screen';


export const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();

    // Check if any form fields are empty
    const formFields = form.current.elements;
        for (let i = 0; i < formFields.length; i++) {
            if (formFields[i].value.trim() === '') {
                console.log("Form is incomplete. Message not sent.")
                window.alert("Please fill out all fields.");
      return;
    }
  }
  
      emailjs
        .sendForm(
        "service_1kk15qi",
        "template_2f1zkmb",
          form.current,
        "IgLwEZRzly_0NaZUx"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("Message sent!");
            window.alert("Message sent!");
            window.location='/home';
          },
          (error) => {
            console.log(error.text);
            console.log("Something went wrong, message not sent.")
            window.alert("Something went wrong, please try again.");
          }
        );
    };


    return (
        <section className='contact' id='connect'>
            <Container>
                <Row className='align-items-center'>
                    <Col size={12} md={6}>
                        <img src={contactImg} alt='contact us'/>
                    </Col>
                    <Col size={12} md={6}>
                        <h2 className="getinTouch">Get in touch!</h2>
                        <form ref={form} onSubmit={sendEmail} id="my_form">
                            <Row>
                                <Col size={12} sm={6} className='px-1'>
                                    <input type='text' placeholder='First Name' name="first_name"/>
                                </Col>
                                <Col size={12} sm={6} className='px-1'>
                                    <input type='text' placeholder='Last Name' name="last_name"/>
                                </Col>
                                <Col size={12} sm={6} className='px-1'>
                                    <input type='email' placeholder='Email Address' name="user_email"/>
                                </Col>
                                <Col size={12} sm={6} className='px-1'>
                                    <input type='tel' placeholder='Phone Number' name="user_phone"/>
                                </Col>
                                <Col>
                                <textarea rows='6'  placeholder='Message' name="message"></textarea>
                                <button type='submit'><span>SEND</span></button>
                                </Col>
                                
                            </Row>
                        </form>
                        
                    </Col>
                </Row>
            </Container>
        </section>

    )

 };


