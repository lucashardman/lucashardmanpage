import { Col, Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useGlobalState } from "../../../services/globalHandler";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "animate.css";
import TrackVisibility from "react-on-screen";
import styles from './styles.module.scss';

export function SkillsBlock(props) {
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

  return (
    <TrackVisibility>
      {({ isVisible }) => (
        <section className={styles.skill} id="skill">
          <div className={isVisible ? "animate__animated animate__pulse" : ""}>
            <Container>
              <Row>
                <Col>
                  <div className={styles.skillBx}>
                    <h2>{data.title}</h2>
                    <p>{data.aboutTheSkills}</p>

                    <Carousel
                      responsive={responsive}
                      infinite
                      className={styles.skillSlider}
                      autoPlay={true}
                      autoPlaySpeed={3000}
                      swipeable={true}
                      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                    >
                      {data.skill.map((item, index) => {
                        return (
                          <div className={styles.skillsItem} key={index}>
                            <img src={item.badge} alt="" style={{height: '50px', width: 'auto'}}/>
                            {/* <h5>{item.nome}</h5> */}
                           </div>
                        );
                      })}
                    </Carousel>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <img
            src="/assets/img/color-sharp.png"
            alt=""
            className={styles.backgroundImageCenter}
          />
        </section>
      )}
    </TrackVisibility>
  );
}
