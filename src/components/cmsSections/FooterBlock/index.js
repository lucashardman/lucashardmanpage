import { Container, Row, Col } from "react-bootstrap";
import { SocialLinks } from '../../commons/SocialLinks';
import { LanguageSeletion } from "../../commons/LanguageSelection";
import { useGlobalState } from "../../../services/globalHandler";
import Link from 'next/link';

export function FooterBlock(props) {
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
    const contact = data.content.find((obj) => obj.referenceId === "contact");
    const network = data.content.find((obj) => obj.referenceId === "network");
    const menu = data.content.find((obj) => obj.referenceId === "menu");
    // return (<pre>{JSON.stringify(data, null, 2)}</pre>)
    return (
        <footer className="footer py-5">
            <Container>
                <Row className="
                    pb-5
                    d-flex 
                    justify-content-between 
                ">
                    
                    <Col className="col-auto py-3 col-12 col-sm-6 col-lg-auto mx-sm-5">
                        <h3>{menu.title}</h3>
                        <p><Link href={network.github} target="_blank">{menu.home}</Link></p>
                        <p><Link href={network.github} target="_blank">{menu.portfolio}</Link></p>
                        <p><Link href={network.github} target="_blank">{menu.labs}</Link></p>
                        {/* <p>Filiado</p> */}
                    </Col>
                    <Col className="col-auto py-3 col-12 col-sm-6 col-lg-auto">
                        <h3>{network.title}</h3>
                        <p><Link href={network.github} target="_blank">GitHub</Link></p>
                        <p><Link href={network.linkedin} target="_blank">LinkedIn</Link></p>
                        <p><Link href={network.facebook} target="_blank">Facebook</Link></p>
                        <p><Link href={network.instagram} target="_blank">Instagram</Link></p>
                        <p><Link href={network.behance} target="_blank">Behance</Link></p>
                    </Col>
                    <Col className="col-auto py-3 col-12 col-sm-6 col-lg-auto">
                        <h3>{contact.title}</h3>
                        <p>{contact.emailLabel}: {contact.emailValue}</p>
                        <p>{contact.phoneLabel}: {contact.phoneValue}</p>
                    </Col> 
                </Row>
                <Row className="align-items-end pt-5">
                    <Col size={12} sm={6}>
                        <img src='/assets/img/logo.svg' alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <LanguageSeletion isFooter={true}/>
                    </Col>
                </Row>
                <Row className="text-center">
                    <p>{data.copyright}</p>
                </Row>
            </Container> 
        </footer>
    );
}