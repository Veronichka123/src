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
import { useState, useEffect } from "react";
import axios from "axios";





function Registration() {
    const [data, setData] = useState({name: "", surname: "", patronymic: "", email: "", password: "" });
    const [repeatPassword, setRepeatPassword] = useState("");
    const [response, setResponse] = useState("");

    const [isAuthorized, setIsAuthorized] = useState(true);

    const [errors, setErrors] = useState({name: "", surname: "", patronymic: "", email: "", password: "", repeatPassword: ""})

    const [mainError, setMainError] = useState("");

    useEffect(() => {
        if(localStorage.getItem("token")){
            axios.get('/user', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem("token")
                }
            }).then((response) => {
                setIsAuthorized(true);
                window.location.assign("my_page");
            })
            .catch((error) => {
                setIsAuthorized(false);
            });
        }
        else{
            setIsAuthorized(false);
        }
    }, [])

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
        setErrors(prevState => ({...prevState, [event.target.name]: ""}))
    };
    
    const handleChangeRepeatPassword = (event) => {
        setRepeatPassword(event.target.value);
        setErrors(prevState => ({...prevState, repeatPassword: ""}))
    };

    const validate = () => {
        let noErrors = true;

        if(!data.name){
            setErrors(prevState => ({...prevState, name: "имя не должно быть пустым"}))
            noErrors = false;
        }
        else if(data.name.length > 50){
            setErrors(prevState => ({...prevState, name: "имя не должно быть длиннее 50 символов"}))
            noErrors = false;
        }

        if(!data.surname){
            setErrors(prevState => ({...prevState, surname: "фамилия не должна быть пустой"}))
            noErrors = false;
        }
        else if(data.surname.length > 50){
            setErrors(prevState => ({...prevState, surname: "фамилия не должна быть длиннее 50 символов"}))
            noErrors = false;
        }

        if(data.patronymic.length > 50){
            setErrors(prevState => ({...prevState, patronymic: "отчество не должно быть длиннее 50 символов"}))
            noErrors = false;
        }

        let rEmail = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i);

        if(!data.email){
            setErrors(prevState => ({...prevState, email: "email не должен быть пустой"}))
            noErrors = false;
        }
        else if(data.surname.length > 320){
            setErrors(prevState => ({...prevState, email: "email не должен быть длиннее 320 символов"}))
            noErrors = false;
        }
        else if(!rEmail.test(data.email)){
            setErrors(prevState => ({...prevState, email: "email должен быть в формате dosaaf_123@dosaaf.ru"}))
            noErrors = false;
        }

        let rPassword = new RegExp(/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$%&? ".]).*$/);

        if(!data.password){
            setErrors(prevState => ({...prevState, password: "пароль не должен быть пустой"}))
            noErrors = false;
        }
        else if(data.password.length > 1000){
            setErrors(prevState => ({...prevState, password: "пароль не должен быть длиннее 1000 символов"}))
            noErrors = false;
        }
        else if(!rPassword.test(data.password)){
            setErrors(prevState => ({...prevState, password: "пароль должен состоять из 8 или более символов. Содержать цифры, а также латинские буквы верхнего и нижнего регистров, и специальные символы ( «!», «@», «#», «$» и т.д.) "}))
            noErrors = false;
        }

        if(!repeatPassword){
            setErrors(prevState => ({...prevState, repeatPassword: "повтор пароля не должен быть пустым"}))
            noErrors = false;
        }
        else if(repeatPassword != data.password){
            setErrors(prevState => ({...prevState, repeatPassword: "пароли не совпадают"}))
            noErrors = false;
        }

        return noErrors;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(!validate()){
            return;
        }
        
        axios
            .post("/user/signup", data)
            .then((response) => {
                setResponse(response.data);
                window.location.assign("login");
            })
            .catch((error) => {
                if(error.code == "ERR_NETWORK"){
                    setMainError("нет соединения с сервером");
                }
                else if(error.response.status == 400){
                    setMainError(error.response.data);
                }
                else if(error.response.status == 500){
                    setMainError("произошла ошибка на сервере");
                }
                setErrors({name: "", surname: "", patronymic: "", email: "", password: "", repeatPassword: ""});
            });
    };

    if(!isAuthorized){
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
                    <Form.Group className="mt-3" controlId="formBasicName">
                        <Form.Control type="text" placeholder="Имя" className='control_input mx-auto d-block' name="name" value={data.name}
                            onChange={handleChange} />
                        <Form.Label className="mb-3 mx-1 text-danger">{errors.name}</Form.Label>
                    </Form.Group>

                    <Form.Group controlId="formBasicSurname">
                        <Form.Control type="text" placeholder="Фамилия" className='control_input mx-auto d-block' name="surname" value={data.surname}
                            onChange={handleChange}/>
                            <Form.Label className="mb-3 mx-1 text-danger">{errors.surname}</Form.Label>
                    </Form.Group>

                    <Form.Group controlId="formBasicPatronymic">
                        <Form.Control type="text" placeholder="Отчество" className='control_input mx-auto d-block' name="patronymic" value={data.patronymic}
                            onChange={handleChange}/>
                        <Form.Label className="mb-3 mx-1 text-danger">{errors.patronymic}</Form.Label>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email" className='control_input mx-auto d-block' name="email" value={data.email}
                            onChange={handleChange}/>
                        <Form.Label className="mb-3 mx-1 text-danger">{errors.email}</Form.Label>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Пароль" className='control_input mx-auto d-block' name="password" value={data.password}
                            onChange={handleChange}/>
                        <Form.Label className="mb-3 mx-1 text-danger">{errors.password}</Form.Label>
                    </Form.Group>

                    <Form.Group controlId="formBasicPasswordRepeat">
                        <Form.Control type="password" placeholder="Повторный пароль" onChange={handleChangeRepeatPassword} className='control_input mx-auto d-block' />
                        <Form.Label className="mb-3 mx-1 text-danger">{errors.repeatPassword}</Form.Label>
                    </Form.Group>
                    <p className='text-danger text-center'>{mainError}</p>
                    <Button onClick = {handleSubmit} className="mt-4 mb-3 btn_registration mx-auto d-block">
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
}

export default Registration;