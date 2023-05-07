import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import { SocialLinks } from '../../commons/SocialLinks';
import { LanguageSeletion } from '../../commons/LanguageSelection';
import { ThemeToggle } from '../../commons/ThemeToggle';

export function MenuBlock(props) {
  const [activeLink, setActiveLink] = useState('home');
  const [darkNavbarByToggle, setDarkNavbarByToggle] = useState(false);
  const [darkNavbarByScroll, setDarkNavbarByScroll] = useState(false);

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

  const onUpdateActiveLink = (link) => {
    setActiveLink(link);
  }
  return (
    <Navbar expand="md" className={darkNavbarByScroll || darkNavbarByToggle ? 'scrolled': ''} >
      <Container>
        <Navbar.Brand href="#home" onClick={() => onUpdateActiveLink('home')} >
            <img src='/assets/img/logo.svg' alt="Logo" className='logo' />
            {/* <Image src='/images/assets/img/logo.svg' alt='Logo' width={50} height={50} color='black'/> */}
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
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
      <Navbar.Collapse className='justify-content-end text-center' id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link 
              href="/"
              className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}
            >Home</Nav.Link>
            <Nav.Link 
              href="/pagina-em-construcao" 
              className={activeLink === 'portfolio' ? 'active navbar-link': 'navbar-link mr-3'} 
              onClick={() => onUpdateActiveLink('portfolio')}
            >Portfolio</Nav.Link>
            <Nav.Link 
              href="/pagina-em-construcao"
              className={activeLink === 'labs' ? 'active navbar-link': 'navbar-link mr-3'}
              onClick={() => onUpdateActiveLink('labs')}
            >Labs</Nav.Link>
            {/* 
            <Nav.Link
              href="#projects"
              className={activeLink === 'projects' ? 'active navbar-link': 'navbar-link'}
              onClick={() => onUpdateActiveLink('projects')}
            >Projects</Nav.Link> */}
          </Nav>
          {/* <ThemeToggle /> */}
          <LanguageSeletion />
          <SocialLinks />

          <span className='navbar-text d-none d-lg-block'>
            <button className='vvd' onClick={() => {
              const element = document.getElementById('contactMeBlock');
              if (element) {
                // 👇 Will scroll smoothly to the top of the next section
                element.scrollIntoView({ behavior: 'smooth' });
              };
            }}>Contact</button>
          </span>
        </Navbar.Collapse>
      </Container>
      </Navbar>
      )
}