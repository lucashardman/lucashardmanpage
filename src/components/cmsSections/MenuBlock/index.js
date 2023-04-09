import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import { SocialLinks } from '../../commons/SocialLinks';
import { LanguageSeletion } from '../../commons/LanguageSelection';
import { ThemeToggle } from '../../commons/ThemeToggle';

export function MenuBlock(props) {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    console.log(scrolled)
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (link) => {
    setActiveLink(link);
  }
  return (
    <Navbar expand="md" className={scrolled ? 'scrolled': ''} >
      <Container>
        <Navbar.Brand href="#home" onClick={() => onUpdateActiveLink('home')} >
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
              href="#portfolio" 
              className={activeLink === 'portfolio' ? 'active navbar-link': 'navbar-link'} 
              onClick={() => onUpdateActiveLink('portfolio')}
            >Portfolio</Nav.Link>
            <Nav.Link 
              href="#labs"
              className={activeLink === 'labs' ? 'active navbar-link': 'navbar-link'}
              onClick={() => onUpdateActiveLink('labs')}
            >Labs</Nav.Link>
            {/* 
            <Nav.Link
              href="#projects"
              className={activeLink === 'projects' ? 'active navbar-link': 'navbar-link'}
              onClick={() => onUpdateActiveLink('projects')}
            >Projects</Nav.Link> */}
          </Nav>
          <ThemeToggle />
          <LanguageSeletion />
          <SocialLinks />

          <span className='navbar-text'>
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