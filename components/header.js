import { Button } from 'react-bootstrap';
import React, { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Services from '../pages/Services';
import News from '../pages/News';
import Registration from '../pages/Registration';
import Login from '../pages/Login';
import logo from './dosaaf_logo.png';
import My_page from '../pages/My_page';
import Requests from '../pages/RequestsService';
import Testing from '../pages/Testing';
import Panel_admin from '../pages/Panel_admin';
import Service_admin from '../pages/Service_admin';
import Request_admin from '../pages/Request_admin';
import News_admin from '../pages/News_admin';
import New from '../pages/New';
import Partners_admin from '../pages/Partners_admin';
import Anonses_admin from '../pages/Anonses_admin';
import Educational_materials from '../pages/Educational_materials';
import Educational_materials_admin from '../pages/Educational_materials_admin';
import Testing_admin from '../pages/Testing_admin';
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
                .get("/user",
                    {
                        headers: {
                            Authorization: 'Bearer ' + localStorage.getItem("token")
                        }
                    })
                .then((response) => {
                    this.setState({ user: response.data["name"]});
                })
                .catch((error) => {
                    localStorage.removeItem("token");
                    this.setState({ user: null});
                });
        }
    }
    
    render() {
        return (
            <>
                <Navbar expand='md' className='border-bottom border-2 shadow-sm bg-white'>
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
                                <Nav.Link href='/' className='list_item d-flex justify-content-end'>ГЛАВНАЯ</Nav.Link>
                                <Nav.Link href='/services' className='ms-5 list_item d-flex justify-content-end'>УСЛУГИ</Nav.Link>
                                <Nav.Link href='/news' className='ms-5 list_item d-flex justify-content-end'>НОВОСТИ</Nav.Link>
                                <Nav.Link href='/contacts' className='ms-5 list_item d-flex justify-content-end'>КОНТАКТЫ</Nav.Link>
                            </Nav>
                            <Nav className="ms-auto d-flex flex-column justify-content-end">
                                {this.state.user ? 
                                <Button className='btn_nav btn-succes ms-auto' href='/my_page'>{this.state.user}</Button> :
                                localStorage.getItem("token") ? '' :
                                <Button className='btn_nav btn-succes ms-auto' href='/login'>ВОЙТИ</Button> 
                                }
                            </Nav>
                        </Navbar.Collapse>

                    </Container>

                </Navbar>

                <Router>
                    <Routes>
                        <Route exact path='/' Component={Home} />
                        <Route exact path='/services' Component={Services} />
                        <Route exact path='/news' Component={News} />
                        <Route exact path='/new' Component={New} />
                        <Route exact path='/registration' Component={Registration} />
                        <Route exact path='/my_page' Component={My_page} />
                        <Route exact path='/login' Component={Login} />
                        <Route exact path='/requests' Component={Requests} />
                        <Route exact path='/testing' Component={Testing} />
                        <Route exact path='/panel_admin' Component={Panel_admin} />
                        <Route exact path='/service_admin' Component={Service_admin} />
                        <Route exact path='/request_admin' Component={Request_admin} />
                        <Route exact path='/news_admin' Component={News_admin} />
                        <Route exact path='/partners_admin' Component={Partners_admin} />
                        <Route exact path='/anonses_admin' Component={Anonses_admin} />
                        <Route exact path='/educational_materials' Component={Educational_materials} />
                        <Route exact path='/educational_materials_admin' Component={Educational_materials_admin} />
                        <Route exact path='/testing_admin' Component={Testing_admin} />
                    </Routes>
                </Router>

            </>
        );
    }
}

export default Header;