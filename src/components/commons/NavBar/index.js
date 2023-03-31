import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { setGlobalState, useGlobalState } from '../../../services/globalHandler';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const [hideEnglish, setHideEnglish] = useState(false);
  const [hidePortuguese, setHidePortuguese] = useState(true);
  const [hideSpanish, setHideSpanish] = useState(true);

  const showLangButton = (e) => {
    setHideEnglish(false);
    setHidePortuguese(false);
    setHideSpanish(false);
  }

  const hideLangButton = (e) => {
    if (currentLang === 'en') {
      setHideEnglish(false);
      setHidePortuguese(true);
      setHideSpanish(true);
    } else if (currentLang === 'pt') {
      setHideEnglish(true);
      setHidePortuguese(false);
      setHideSpanish(true);
    } else if (currentLang === 'es') {
      setHideEnglish(true);
      setHidePortuguese(true);
      setHideSpanish(false);
    }
  }

  const updateLang = (e) => {
    setGlobalState('lang', e);
    setCurrentLang(e);
  }

  useEffect(() => {
    const onScroll = () => {
      if (Window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (link) => {
    setActiveLink(link);
  }
  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled': ''} >
      <Container>
        <Navbar.Brand href="#home">
            <img src='/assets/img/logo.svg' alt="Logo" />
            {/* <Image src='/images/assets/img/logo.svg' alt='Logo' width={50} height={50} color='black'/> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link 
              href="#home" 
              className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} 
              onClick={() => onUpdateActiveLink('home')}
            >Home</Nav.Link>
            <Nav.Link 
              href="#skills"
              className={activeLink === 'skills' ? 'active navbar-link': 'navbar-link'}
              onClick={() => onUpdateActiveLink('skills')}
            >Skills</Nav.Link>
            <Nav.Link
              href="#projects"
              className={activeLink === 'projects' ? 'active navbar-link': 'navbar-link'}
              onClick={() => onUpdateActiveLink('projects')}
            >Projects</Nav.Link>
          </Nav>
          
            <div className='dark-mode-toggle'>
              <Form>
                <Form.Check 
                  type="switch"
                  id="custom-switch"
                  // label="Dark/Light Mode"
                  // className='col'
                />
              </Form>
            </div>
            <div>
            <ButtonGroup  className='navbar-lang-selector' onMouseEnter={() => showLangButton()} onMouseLeave={() => hideLangButton()}>
              <Button variant='transparent' className='navbar-lang-selector' onClick={() => updateLang('en')} hidden={hideEnglish}>🇺🇸</Button>
              <Button variant='transparent' className='navbar-lang-selector' onClick={() => updateLang('pt')} hidden={hidePortuguese}>🇧🇷</Button>
              <Button variant='transparent' className='navbar-lang-selector' onClick={() => updateLang('es')} hidden={hideSpanish}>🇪🇸</Button>
            </ButtonGroup>
            </div>  
            <div className='social-icon'>
                <a  href="https://www.linkedin.com/in/lucashardman/" target="_blank"><img src='/assets/img/nav-icon1.svg' alt='linkedin' /></a>
                <a  href="https://github.com/lucashardman" target="_blank"><img src='/assets/img/nav-icon4.svg' alt='facebook' /></a>
                <a  href="https://www.instagram.com/lucashardman/" target="_blank"><img src='/assets/img/nav-icon3.svg' alt='instagram' /></a>
            </div>

          <span className='navbar-text'>
            <button className='vvd' onClick={() => console.log('connect')}>Contact</button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}