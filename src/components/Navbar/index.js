import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar  from 'react-bootstrap/Navbar'

const Navigation = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="home">andrew.exe</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="projects">Projects</Nav.Link>
                    <Nav.Link href="contact">Contact</Nav.Link>
                </Nav>
            </Navbar>
    </>
    )
}

export default Navigation
