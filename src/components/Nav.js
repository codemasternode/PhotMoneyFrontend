import React from 'react'
import { Navbar, NavbarBrand, Container, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink } from 'mdbreact'
import { BrowserRouter as Router } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import '../css/nav.css'

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
        this.onClick = this.onClick.bind(this);
        this.toggle = this.toggle.bind(this);
        
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <Router>
                <Navbar color="elegant-color" dark expand="md" scrolling className="nav">
                    <Container>
                        <NavbarBrand href="/">
                            <img src={require('../assets/logo.png')} alt="logo" width="70" />
                        </NavbarBrand>
                        {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
                        <Collapse isOpen={this.state.collapse} navbar>
                            <NavbarNav left>
                                <NavItem>
                                    <NavLink to="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="#">Features</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="#">Pricing</NavLink>
                                </NavItem>
                            </NavbarNav>
                            <NavbarNav right>
                                <NavItem className="nav-item-right-custom">
                                    <NavLink to="#">
                                        <i className="fa size fa-user"></i>
                                    </NavLink>
                                    <NavLink to="#">
                                        <i className="fa size fa-plus"></i>
                                    </NavLink>
                                </NavItem>
                            </NavbarNav>
                        </Collapse>
                    </Container>
                </Navbar>
            </Router>
        );
    }
}

export default Nav