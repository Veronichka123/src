import { Button } from 'react-bootstrap';
import React, { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About_us from '../pages/About_us';
import Contacts from '../pages/Contacts';
import Registration from '../pages/Registration';
import Login from '../pages/Login';
import logo from './dosaaf_logo.png';
import '../styles/header.css';
class Header extends Component {
    render() {
        return (
            <>
                <Navbar expand='lg' className='border-bottom border-2 shadow-sm'>
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="60"
                                width="60"
                                className='d-inline-block'
                                alt='Logo'
                            />{' '} ДОСААФ КОСТРОМА

                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls='basic-navbar-nav' />



                        <Navbar.Collapse id = "basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href='/' className='list_item'>ГЛАВНАЯ</Nav.Link>
                                <Nav.Link href='/about' className='ms-5 list_item'>УСЛУГИ</Nav.Link>
                                <Nav.Link href='/contacts' className='ms-5 list_item'>НОВОСТИ</Nav.Link>
                                <Nav.Link href='/contacts' className='ms-5 list_item'>КОНТАКТЫ</Nav.Link>
                            </Nav>
                            <Nav className="ms-auto">
                                <Button className='btn_nav btn-succes' href='/login'>ВОЙТИ</Button>
                            </Nav>
                        </Navbar.Collapse>



                    </Container>

                </Navbar>

                <Router>
                    <Routes>
                        <Route exact path='/' Component={Home} />
                        <Route exact path='/about' Component={About_us} />
                        <Route exact path='/contacts' Component={Contacts} />
                        <Route exact path='/registration' Component={Registration} />
                        <Route exact path='/login' Component={Login} />
                    </Routes>
                </Router>

            </>
        );
    }
}

export default Header;