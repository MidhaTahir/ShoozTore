import React from 'react'
import { Navbar, Nav} from "react-bootstrap";

const AppNavbar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">
            <img
                alt=""
                src="https://library.kissclipart.com/20181207/ctq/kissclipart-kids-shoes-size-chart-clipart-slipper-shoe-size-cd4c2a7f65f98d3c.jpg"
                width="40"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            Shooz Tore
            </Navbar.Brand>
            <Nav className="mr-auto"></Nav>
            <Nav>
            <Nav.Link href="https://github.com/MidhaTahir" target="_blank">Made by Mids</Nav.Link>
            </Nav>
            </Navbar>
        </div>
    )
}

export default AppNavbar;
