import { useState } from "react";
import { 
    Navbar, 
    NavbarBrand, 
    Collapse,
    NavbarToggler,
    Nav,
    NavItem
} from "reactstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark color='primary' sticky='top' expand='lg' className="navbar__custom">
            <NavbarBrand className="ms-5" href="home">
                <h1 className="mt-1">BHolm IT</h1>
            </NavbarBrand>
        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className="mx-auto" navbar>
                    <NavItem>
                        <NavLink className="nav-link" to="/">
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/about">
                            About Us
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/partners">
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