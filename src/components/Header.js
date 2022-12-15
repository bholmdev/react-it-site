import { useState } from "react";
import Banner from "../app/assets/img/banner.jpeg"
import { 
    Navbar, 
    NavbarBrand, 
    Collapse,
    NavbarToggler,
    Nav,
    NavItem
} from "reactstrap";
import { NavLink } from "react-router-dom";
import NucampLogo from "../app/assets/img/logo.png";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark color='primary' sticky='top' expand='md'className="navbar__custom">
            <NavbarBrand className="ms-5" href='/'>
                <h1 className="mt-1">BHolmDev IT</h1>
            </NavbarBrand>
        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className="ms-auto" navbar>
                    <NavItem>
                        <NavLink className="nav-link" to="/">
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/directory">
                            About Us
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/technoligies">
                            Technology Providers
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/products">
                            Products and Solutions
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/services">
                            Services
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/eshop">
                            Eshop
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/contact">
                            Contact Us
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        
    );
}

export default Header;