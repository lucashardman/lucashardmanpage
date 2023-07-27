import { Col, Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useGlobalState } from "../../../services/globalHandler";
import "animate.css";
import TrackVisibility from "react-on-screen";
import styles from './styles.module.scss';

export function IntroBlock(props) {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const period = 2000;
  const [delta, setDelta] = useState(300 - Math.random * 100);
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

  const toRotate = [data.iAm1, data.iAm2, data.iAm3, data.iAm4];

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200);
    }
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  return (
    <section className={styles.banner} id="home">
      <Container className="py-3">
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={5} className="order-md-2">
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : "animate__animated animate__fadeOut"}>
                    <img src="/assets/img/header-img.svg" alt="Hero"/>
                </div>
              )}
            </TrackVisibility>
          </Col> 
          <Col xs={12} md={6} xl={7}>

            <div >
              <span className={styles.tagline}>{data.welcome}</span>
              <h1>
                {data.myName}
                <TrackVisibility>
                    {({ isVisible }) => (
                        <>
                            {isVisible ? <>
                                <span className={styles.wrap}>{text}</span>
                                <span className={styles.cursor} />
                            </> : null}
                        </>
                    )}
                </TrackVisibility>
              </h1>
              <p>{data.about}</p>
            </div>
            
          </Col>
        </Row>
      </Container>
    </section>
  );
}
