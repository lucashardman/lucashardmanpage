import { Container, Row, Col } from "react-bootstrap";
import { SocialLinks } from '../../commons/SocialLinks';
import { LanguageSeletion } from "../../commons/LanguageSelection";

export function FooterBlock(props) {
    return (
        <footer className="footer py-5">
            <Container>
                <Row className="
                    pb-5
                    d-flex 
                    justify-content-between 
                ">
                    <Col className="col-auto py-3 col-12 col-sm-6 col-lg-auto mx-sm-5">
                        <h3>Menu</h3>
                        <p>Home</p>
                        <p>Portfolio</p>
                        <p>Labs</p>
                        <p>Filiado</p>
                    </Col>
                    <Col className="col-auto py-3 col-12 col-sm-6 col-lg-auto">
                        <h3>Minhas redes</h3>
                        <p>GitHub</p>
                        <p>LinkedIn</p>
                        <p>Instagram</p>
                        <p>Behace</p>
                        <p>Stack Overflow</p>
                        <p>Facebook</p>
                    </Col>
                    <Col className="col-auto py-3 col-12 col-sm-6 col-lg-auto">
                        <h3>Minhas redes</h3>
                        <p>GitHub</p>
                        <p>LinkedIn</p>
                        <p>Instagram</p>
                        <p>Behace</p>
                        <p>Stack Overflow</p>
                        <p>Facebook</p>
                    </Col>
                    <Col className="col-auto py-3 col-12 col-sm-6 col-lg-auto">
                        <h3>Contato</h3>
                        <p>E-mail: contato@lucashardman.com.br</p>
                        <p>Celular e WhatsApp: +55 21 97288-2454</p>
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
                    <p>Copyright 2022. All Rights Reserved</p>
                </Row>
            </Container>
        </footer>
    );
}