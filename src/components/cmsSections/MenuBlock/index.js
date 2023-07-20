import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import { SocialLinks } from '../../commons/SocialLinks';
import { LanguageSeletion } from '../../commons/LanguageSelection';
import { ThemeToggle } from '../../commons/ThemeToggle';
import Link from 'next/link';

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
          <Link 
              href="/"
              className={activeLink === 'home' ? 'active navbar-link nav-link': 'navbar-link nav-link'}
              onClick={() => onUpdateActiveLink('home')}
            >Home</Link>
            <Link 
              href="/portfolio" 
              className={activeLink === 'portfolio' ? 'active navbar-link nav-link': 'navbar-link mr-3 nav-link'} 
              onClick={() => onUpdateActiveLink('portfolio')}
            >Portfolio</Link>
            <Link 
              href="/pagina-em-construcao"
              className={activeLink === 'labs' ? 'active navbar-link nav-link': 'navbar-link mr-3 nav-link'}
              onClick={() => onUpdateActiveLink('labs')}
            >Labs</Link>
          </Nav>
          <LanguageSeletion />
          <SocialLinks />

          <span className='navbar-text d-none d-lg-block'>
            <button className='vvd' onClick={() => {
              const element = document.getElementById('contactMeBlockReference');
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