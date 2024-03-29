import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import { SocialLinks } from '../../commons/SocialLinks';
import { LanguageSeletion } from '../../commons/LanguageSelection';
import { useGlobalState } from "../../../services/globalHandler";
import { ThemeToggle } from '../../commons/ThemeToggle';
import Link from 'next/link';
import styles from './styles.module.scss'

export function MenuBlock(props) {
  const [darkNavbarByToggle, setDarkNavbarByToggle] = useState(false);
  const [darkNavbarByScroll, setDarkNavbarByScroll] = useState(false);

  const menuContent = props.globalContent.globalMenu._allPageContentLocales

    let data = menuContent.filter((element) => element.locale === "pt")
    data = data[0].value[0];

    if (useGlobalState("lang")[0] === "en") {
        data = menuContent.filter((element) => element.locale === "en")
        data = data[0].value[0];
    }
    if (useGlobalState("lang")[0] === "es") {
        data = menuContent.filter((element) => element.locale === "es")
        data = data[0].value[0];
    }
    if (useGlobalState("lang")[0] === "pt") {
        data = menuContent.filter((element) => element.locale === "pt")
        data = data[0].value[0];
    }
  useEffect(() => {
    const onScroll = () => {
          if (window.scrollY > 100) {
            setDarkNavbarByScroll(true);
          } else {
            setDarkNavbarByScroll(false);
          }
        }
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="md" className={darkNavbarByScroll || darkNavbarByToggle ? `${styles.scrolled}`: ''} >
      <Container>
        <Navbar.Brand href="#top">
            <img src='/assets/img/logo.svg' alt="Logo" className='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => {
            if(darkNavbarByToggle === true) {
              setDarkNavbarByToggle(false);
            }
            else {
              setDarkNavbarByToggle(true);
            }
          }}>
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
      <Navbar.Collapse className='justify-content-end text-center' id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link href='/' className='navbar-link nav-link'>Home</Link>
            <Link href='/portfolio' className='navbar-link mr-3 nav-link'>Portfolio</Link>
            <Link href='/pagina-em-construcao' className='navbar-link mr-3 nav-link'>Labs</Link>
          </Nav>
          <LanguageSeletion />
          <SocialLinks />

          <span className={`${styles.navBarContactButton} d-none d-lg-block`}>
            <button className='vvd' onClick={() => {
              const element = document.getElementById('contactMeBlockReference');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              };
            }}>{data.labelContato}</button>
          </span>
        </Navbar.Collapse>
      </Container>
      </Navbar>
      )
}