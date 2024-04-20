import { Button } from 'react-bootstrap';
import React, { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Contacts from '../pages/Contacts';
import Registration from '../pages/Registration';
import Login from '../pages/Login';
import logo from './dosaaf_logo.png';
import My_page from '../pages/My_page';
import Requests from '../pages/RequestsService ';
import Testing from '../pages/Testing';
import Panel_admin from '../pages/Panel_admin';
import Service_admin from '../pages/Service_admin';
import Request_admin from '../pages/Request_admin';
import '../styles/header.css';
import axios from 'axios';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { user: null }
    }

    componentDidMount() {
        if (localStorage.getItem("token")) {
            
            axios
                .get("http://25.43.21.15:8080/user",
                    {
                        headers: {
                            Authorization: 'Bearer ' + localStorage.getItem("token") //the token is a variable which holds the token
                        }
                    })
                .then((response) => {
                    this.setState({ user: response.data['principal']});
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
    
    render() {
        return (
            <>
                <Navbar expand='lg' className='border-bottom border-2 shadow-sm'>
                    <Container fluid>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="60"
                                width="60"
                                className=''
                                alt='Logo'
                            />{' '} ДОСААФ КОСТРОМА

                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls='basic-navbar-nav' />

                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href='/' className='list_item'>ГЛАВНАЯ</Nav.Link>
                                <Nav.Link href='/services' className='ms-5 list_item'>УСЛУГИ</Nav.Link>
                                <Nav.Link href='/contacts' className='ms-5 list_item'>НОВОСТИ</Nav.Link>
                                <Nav.Link href='/contacts' className='ms-5 list_item'>КОНТАКТЫ</Nav.Link>
                            </Nav>
                            <Nav className="ms-auto">
                                {this.state.user ? 
                                <Button className='btn_nav btn-succes' href='/my_page'>{this.state.user['name']}</Button> :
                                <Button className='btn_nav btn-succes' href='/login'>ВОЙТИ</Button> 
                                }
                            </Nav>
                        </Navbar.Collapse>

                    </Container>

                </Navbar>

                <Router>
                    <Routes>
                        <Route exact path='/' Component={Home} />
                        <Route exact path='/services' Component={Services} />
                        <Route exact path='/contacts' Component={Contacts} />
                        <Route exact path='/registration' Component={Registration} />
                        <Route exact path='/my_page' Component={My_page} />
                        <Route exact path='/login' Component={Login} />
                        <Route exact path='/requests' Component={Requests} />
                        <Route exact path='/testing' Component={Testing} />
                        <Route exact path='/panel_admin' Component={Panel_admin} />
                        <Route exact path='/service_admin' Component={Service_admin} />
                        <Route exact path='/request_admin' Component={Request_admin} />
                    </Routes>
                </Router>

            </>
        );
    }
}

export default Header;