import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar  from 'react-bootstrap/Navbar'

const Navigation = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">andrew.exe</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="projects">Projects</Nav.Link>
                    <Nav.Link href="contact">Contact</Nav.Link>
                </Nav>
                <Nav className="justify-content-center">
                <Nav.Item className='mr-2 ml-2'>
                    <a href='https://github.com/dasBottles' className='fab fa-github' target='_blank'/>
                </Nav.Item>
                <Nav.Item className='mr-2 ml-2'>
                    <a href='https://www.linkedin.com/in/andrew-rattanasack-4a1a6718b/' className="fab fa-linkedin" target='_blank'/>
                </Nav.Item>
            </Nav>

            </Navbar>
    </>
    )
}

export default Navigation
