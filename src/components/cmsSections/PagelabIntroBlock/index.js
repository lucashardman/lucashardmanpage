import { Col, Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useGlobalState } from "../../../services/globalHandler";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "animate.css";
import { useWindowSize } from "react-use";

import TrackVisibility from "react-on-screen";
import styles from './styles.module.scss'
export function PagelabIntroBlock(props) {

    const { width } = useWindowSize();
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

    let fakePadding = {
        minHeight: '100px',
    }
    if (width >= 768) {
        fakePadding = {
            minHeight: '200px',
        }
    }

    return (
        <div>
            <div style={fakePadding}/>
            <p className={styles.dashboard}>OLAR</p>
        </div>
    )
}