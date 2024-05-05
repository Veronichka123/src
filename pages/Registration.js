import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/registration.css';
import { Route, Routes } from 'react-router-dom';
import logo from '../components/dosaaf_logo.png';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useState } from "react";
import axios from "axios";





function Registration() {

    const HOST = '26.252.162.70:8080';

    const [data, setData] = useState({ name: "", surname: "", patronymic: "", email: "", password: "" });
    const [response, setResponse] = useState("");

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post("http://" + HOST + "/user/signup", data)
            .then((response) => {
                setResponse(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };


    return (
        <>
            <Form className='form_registration mx-auto px-5 py-4 mb-5 bg-white mt-3'>
                <Container>
                    <Image
                        src={logo}
                        height="80"
                        width="80"
                        className='mx-auto d-block'
                        alt='Logo'
                    />
                    <p className='fw-light text-secondary text-center mb-2'>ДОСААФ КОСТРОМА</p>
                </Container>
                <h3 className='text-center'>Регистрация</h3>
                <Form.Group className="mb-3 mt-3" controlId="formBasicName">
                    <Form.Control type="text" placeholder="Имя" className='control_input mx-auto d-block' name="name" value={data.name}
                        onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicSurname">
                    <Form.Control type="text" placeholder="Фамилия" className='control_input mx-auto d-block' name="surname" value={data.surname}
                        onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPatronymic">
                    <Form.Control type="text" placeholder="Отчество" className='control_input mx-auto d-block' name="patronymic" value={data.patronymic}
                        onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" className='control_input mx-auto d-block' name="email" value={data.email}
                        onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Пароль" className='control_input mx-auto d-block' name="password" value={data.password}
                        onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPasswordRepeat">
                    <Form.Control type="password" placeholder="Повторный пароль" className='control_input mx-auto d-block' />
                </Form.Group>
                <Button type="submit" onClick = {handleSubmit} className="mt-4 mb-3 btn_registration mx-auto d-block">
                    Зарегистрироваться
                </Button>
                <p className='text-secondary text-center mt-2 mb-1'>Уже зарегистрированы?</p>
                <Link to='/login' className='link_login d-flex justify-content-center'>Войти</Link>
            </Form>

            <Routes>
                <Route exact path='/login' Component={Login} />
            </Routes>

        </>
    );
}

export default Registration;