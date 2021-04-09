import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"

const Header = ({ siteTitle, className }) => (
    <Navbar className={className} bg="primary" variant="dark" expand="lg" fixed="top">
        <Navbar.Brand href="/">
            Kiara Million
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <NavDropdown title="Articles" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/articles/roadToMillion">Road to 1 million</NavDropdown.Item>
                    <NavDropdown.Item href="/articles/theFandom">The fandom</NavDropdown.Item>
                    <NavDropdown.Item href="/articles/memberOrigins">Member origins</NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                </NavDropdown>
                <NavDropdown title="Art" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/art/artCanvas">Art Canvas</NavDropdown.Item>
                    <NavDropdown.Item href="/art/meadow">Meadow of a million flowers</NavDropdown.Item>
                    <NavDropdown.Item href="/art/minecraft">Minecraft project</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Compilations" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/compilations/hinotori">Hinotori project</NavDropdown.Item>
                    <NavDropdown.Item href="/compilations/moments">Memorable moments</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/messages">Messages</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
