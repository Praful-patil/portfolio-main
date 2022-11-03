import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const ContactNew = () => {

  
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col className="getinTouch" size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form action="https://formspree.io/f/xknezook" method="POST" >
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="firstname"  placeholder="First Name" autoComplete="off" required  />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="lastname" placeholder="Last Name" autoComplete="off" required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="email" placeholder="Email Address" autoComplete="off" required />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" name="phoneNo" placeholder="Phone No." autoComplete="off" required/>
                    </Col>
                    <Col size={12} className="px-1 subButton">
                      <textarea rows="6" name="Message" placeholder="Message" autoComplete="off" required></textarea>
                      <button className="" type="submit" formTarget="_blank"><span>Submit</span></button>
                    </Col>
                    {/* {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    } */}
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ContactNew