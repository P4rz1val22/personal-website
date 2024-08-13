import { useState } from "react";
import { NavBar, Container } from "react-bootstrap";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');

    return (
        <Navbar expand="lg">
            <Container>
                <NavBar.Brand href="#home">
                    <img src={''} alt="logo" />
                </NavBar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collaps id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#linkedIn"><img src={ } alt="" /></a>
                            <a href="#gitHub"><img src={ } alt="" /></a>
                            <a href="#other"><img src={ } alt="" /></a>
                        </div>
                        <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                    </span>
                </Navbar.Collaps>
            </Container>
        </Navbar>
    )
}