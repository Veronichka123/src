import React from 'react';
import '../styles/registration.css';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/registration.css';
import logo from '../components/dosaaf_logo.png';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './Registration';



function Login() {
    return (
        <>
            <Form className='form_registration mx-auto px-5 py-4 mb-5 bg-white mt-2'>
                <Container>
                    <Image
                        src={logo}
                        height="80"
                        width="80"
                        className='mx-auto d-block'
                        alt='Logo'
                    />
                    <p className='fw-light text-secondary text-center mb-3'>ДОСААФ КОСТРОМА</p>
                </Container>

                <h3 className='text-center'>Вход</h3>




                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" className='control_input mx-auto d-block' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Пароль" className='control_input mx-auto d-block' />
                </Form.Group>
                <Link className='link_login'>Забыли пароль?</Link>
                <Button type="submit" className="mt-4 mb-3 btn_login mx-auto d-block">
                    Войти
                </Button>
                <Link to='/registration' className='link_login d-flex justify-content-center'>Зарегистироваться</Link>
            </Form>
            <Routes>
                <Route exact path='/registration' Component={Registration} />
            </Routes>
        </>
    );
}

export default Login;