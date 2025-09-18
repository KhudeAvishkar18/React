// React Bootstrap is different than traditional bootstrap which we use in our html, css
// React contains Bootstrap library in it

// To use Bootstrap in React, we need to install React-Bootstrap along with traditional Bootstrap
// To install React Bootstrap and Bootstrap -
// npm install react-bootstrap bootstrap

// To check whether it is installed successfully, we can check under dependencies inside package.json file

// Then import React Bootstrap css in main.jsx file, by writing
// import 'bootstrap/dist/css/bootstrap.min.css';

// Go to react bootstrap website and inside components section, we can see multiple components of react bootstrap such as button, alert, navbar, carousel etc
// You can directly copy code from there and paste it in your react project

// To use React bootstrap components we need to import them like this -
import { Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';

function BootStrap() {
    return (
        <>
            {/* Creation of navbar using react-bootstrap */}
            {/* You can get this code on react bootstrap website in components/Navbar section */}
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <h1>Using React Bootstrap</h1>
            <Button variant='success'>Click Me</Button>
            <Button variant="warning">Click Me</Button>
            <Button variant='danger'>Click Me</Button>
            <Button variant='dark'>Click Me</Button>

            <Alert variant="warning">This is warning</Alert>
            <Alert variant="primary">This is success</Alert>
            <Alert variant="danger">This is error</Alert>
            <Alert variant="dark">This is success</Alert>

        </>
    )
}

export default BootStrap;