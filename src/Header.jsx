import React, { PureComponent } from 'react';
import {
    Nav,
    Navbar,
    NavbarToggler,
    NavItem,
    NavLink,
    Collapse,
} from 'reactstrap';
import throttle from 'lodash/throttle';
import './Header.css';

class Header extends PureComponent {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleScrollThrottled = throttle(this.handleScroll, 200);
        this.state = {
            isOpen: false,
            scrollPos: window.scrollY,
        };
    }

    toggleNavbar() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    handleScroll() {
        this.setState({
            ...this.state,
            scrollPos: window.scrollY,
        });
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScrollThrottled);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScrollThrottled);
    }

    render() {
        return (
            <Navbar light expand="md" fixed="top" className={this.state.scrollPos > 100 ? 'scrolled' : null}>
                <NavbarToggler onClick={this.toggleNavbar} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem><NavLink href="#">Projects</NavLink></NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default Header;