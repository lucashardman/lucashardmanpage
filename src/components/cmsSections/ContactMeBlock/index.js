import { Col, Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useGlobalState } from "../../../services/globalHandler";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "animate.css";
import TrackVisibility from "react-on-screen";

export function ContactMeBlock(props) {
  let data = props.pt;

  if (useGlobalState("lang")[0] === "en") {
    data = props.en;
  }
  if (useGlobalState("lang")[0] === "es") {
    data = props.es;
  }
  if (useGlobalState("lang")[0] === "pt") {
    data = props.pt;
  }
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    phone: '',
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState(data.formButton);
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const res = fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDetails),
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.code === 200) {
          setFormDetails({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
          });
          setStatus('Message Sent!');
        } else {
          setStatus('Something went wrong. Please try again later.');
        }
    })
    .catch((error) => {
      setStatus('Something went wrong. Please try again later.');
    });
  };

  return (
    <section className="contact" id="contactMeBlock">

<TrackVisibility>
              {({ isVisible }) => (
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={6} sm={12} className={isVisible ? "animate__animated animate__jackInTheBox" : "opacity-0"}>
            <img src="/assets/img/contact-img.svg" />
          </Col>
          <Col lg={6} md={6} sm={12}>
            <h2>{data.formTitle}</h2>
            <form onSubmit={onFormSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder={data.formFirstName}
                    onChange={(e) => onFormUpdate('firstName', e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder={data.formLastName}
                    onChange={(e) => onFormUpdate('lastName', e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.email}
                    placeholder={data.formEmail}
                    onChange={(e) => onFormUpdate('email', e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.phone}
                    placeholder={data.formPhoneNumber}
                    onChange={(e) => onFormUpdate('phone', e.target.value)}
                  />
                </Col>
                <input
                  type="text"
                  value={formDetails.subject}
                  placeholder={data.formSubject}
                  onChange={(e) => onFormUpdate('subject', e.target.value)}
                />
                <textarea
                  row={6}
                  value={formDetails.message}
                  placeholder={data.formMessage}
                  onChange={(e) => onFormUpdate('message', e.target.value)}
                />
                <Col sm={6} className="px-1">
                  <button type="submit">
                    <span>{data.formSend}</span>
                  </button>
                </Col>
                {status.message && (
                  <p
                    className={status.success === false ? "danger" : "success"}
                  >
                    {status.message}
                  </p>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
      )}
      </TrackVisibility>
    </section>
  );
}
