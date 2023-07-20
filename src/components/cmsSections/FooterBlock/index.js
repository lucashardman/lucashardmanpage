import { Container, Row, Col } from "react-bootstrap";
import { SocialLinks } from '../../commons/SocialLinks';
import { LanguageSeletion } from "../../commons/LanguageSelection";
import { useGlobalState } from "../../../services/globalHandler";
import Link from 'next/link';

export function FooterBlock(props) {

    const footerContent = props.globalContent.globalFooter._allPageContentLocales

    let data = footerContent.filter((element) => element.locale === "pt")
    data = data[0].value[0];

    if (useGlobalState("lang")[0] === "en") {
        data = footerContent.filter((element) => element.locale === "en")
        data = data[0].value[0];
    }
    if (useGlobalState("lang")[0] === "es") {
        data = footerContent.filter((element) => element.locale === "es")
        data = data[0].value[0];
    }
    if (useGlobalState("lang")[0] === "pt") {
        data = footerContent.filter((element) => element.locale === "pt")
        data = data[0].value[0];
    }
    const contact = data.content.find((obj) => obj.referenceId === "contact");
    const network = data.content.find((obj) => obj.referenceId === "network");
    const menu = data.content.find((obj) => obj.referenceId === "menu");
    return (
        <footer className="footer py-5">
            <Container>
                <Row className="
                    pb-5
                    d-flex 
                    justify-content-between 
                ">
                    
                    <Col className="col-auto py-3 col-12 col-md-12 col-sm-6 col-lg-auto">
                        <h3 className="text-center text-lg-start">{menu.title}</h3>
                        <p className="text-center text-lg-start"><Link href='/'>{menu.home}</Link></p>
                        <p className="text-center text-lg-start"><Link href='/portfolio'>{menu.portfolio}</Link></p>
                        <p className="text-center text-lg-start"><Link href='/pagina-em-construcao'>{menu.labs}</Link></p>
                    </Col>
                    <Col className="col-auto py-3 col-12 col-md-12 col-sm-6 col-lg-auto">
                        <h3 className="text-center text-lg-start">{network.title}</h3>
                        <p className="text-center text-lg-start"><Link href={network.github} target="_blank">GitHub</Link></p>
                        <p className="text-center text-lg-start"><Link href={network.linkedin} target="_blank">LinkedIn</Link></p>
                        <p className="text-center text-lg-start"><Link href={network.facebook} target="_blank">Facebook</Link></p>
                        <p className="text-center text-lg-start"><Link href={network.instagram} target="_blank">Instagram</Link></p>
                        <p className="text-center text-lg-start"><Link href='/pagina-em-construcao' target="_blank">Behance</Link></p>
                    </Col>
                    <Col className="col-auto py-3 col-12 col-md-12 col-sm-6 col-lg-auto">
                        <h3 className="text-center text-lg-start">{contact.title}</h3>
                        <p className="text-center text-lg-start">{contact.emailLabel}: {contact.emailValue}</p>
                        <p className="text-center text-lg-start">{contact.phoneLabel}: {contact.phoneValue}</p>
                    </Col> 
                </Row>
                <Row className="align-items-end">
                    <Col size={12} sm={6} className="text-center text-sm-start pt-5">
                        <img src='/assets/img/logo.svg' alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end pt-5">
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