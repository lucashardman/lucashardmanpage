import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import { useGlobalState } from "../../../services/globalHandler";
import "react-multi-carousel/lib/styles.css";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Toast from 'react-bootstrap/Toast';

export function ContactMeBlock(props) {
  const contactMeContent = props.globalContent.globalContactMe._allPageContentLocales
    let data = contactMeContent.filter((element) => element.locale === "pt")
    data = data[0].value[0];

    if (useGlobalState("lang")[0] === "en") {
        data = contactMeContent.filter((element) => element.locale === "en")
        data = data[0].value[0];
    }
    if (useGlobalState("lang")[0] === "es") {
        data = contactMeContent.filter((element) => element.locale === "es")
        data = data[0].value[0];
    }
    if (useGlobalState("lang")[0] === "pt") {
        data = contactMeContent.filter((element) => element.locale === "pt")
        data = data[0].value[0];
    }

  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    phone: '',
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [status, setStatus] = useState(0);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    fetch('/api/contact', {
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
          setStatus(1);
        } else {
          setStatus(2);
        }
    })
    .catch((error) => {
      setStatus(2);
    });
  };

  let sendFeedback = null;
  const [showToast, setShowToast] = useState(false);
  const toggleToast = () => {
    setShowToast(!showToast);
  };

  const forceShowToast = () => {
    setShowToast(true);
  };
  

  let feedbackTitle = ""
  let feedbackText = ""
  let feedbackBg = ""
  if (status === 1) {
    feedbackTitle = data.feedbackTitleSuccess
    feedbackText = data.feedbackTextSuccess
    feedbackBg = "bg-success"
  }
  else if (status === 2) {
    feedbackTitle = data.feedbackTitleError
    feedbackText = data.feedbackTextError
    feedbackBg = "bg-danger"
  }
  
  return (
    <section className="contact" id="contactMeBlockReference">
      <TrackVisibility>
        {({ isVisible }) => (
          <Container>
            <Row className="align-items-center">
              <Col lg={6} md={6} sm={12} className={`${isVisible ? "animate__animated animate__jackInTheBox" : "opacity-0"} d-none d-sm-block`}>
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
                      <button type="submit" onClick={forceShowToast}>
                        <span>{data.formSend}</span>
                      </button>
                    </Col>
                    {
                      <Toast show={showToast} onClose={toggleToast} style={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        zIndex: 9999,
                      }} className="m-0 p-0">
                        <Toast.Header className={`${feedbackBg} text-white pt-0 align-text-bottom`} >
                          <strong className="me-auto">{feedbackTitle}</strong>
                        </Toast.Header>
                        <Toast.Body className="text-black">{feedbackText}</Toast.Body>
                      </Toast>
                    }
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
