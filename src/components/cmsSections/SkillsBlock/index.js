import { Col, Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useGlobalState } from '../../../services/globalHandler';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

export function SkillsBlock(props) {
    let data = props.pt;

    if (useGlobalState('lang')[0] === 'en') {
        data = props.en;
    }
    if (useGlobalState('lang')[0] === 'es') {
        data = props.es;
    }
    if (useGlobalState('lang')[0] === 'pt') { 
        data = props.pt;
    }
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 6
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
    return (
        <section className='skill' id='skill'>
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>SKILLS</h2>
                            <p>{data.aboutTheSkills}</p>
                            
                            <Carousel
                             responsive={responsive} 
                             infinite={true} 
                             className="skill-slider"
                             autoPlay={true}
                             autoPlaySpeed={3000}
                             swipeable={false}
                            //  transitionDuration={10000}
                             removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                            //  customTransition="all .5"
                            >
                                {data.skill.map((item, index) => {
                                    return (
                                        <div className="item" key={index}>
                                            <img src="/assets/img/meter1.svg" alt="" />
                                            <h5>{item.nome}</h5> 
                                        </div> 
                                    )
                                })}
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src="/assets/img/color-sharp.png" alt="" className="background-image-left" />
        </section>
        
    );
}