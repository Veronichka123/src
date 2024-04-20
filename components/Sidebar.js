import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import '../styles/sidebar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import requests from '../pages/RequestsService ';
import testing from '../pages/Testing';
import panel_admin from '../pages/Panel_admin';
import axios from 'axios';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = { role: null }
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
                    this.setState({ role: response.data['authorities'][0]['authority']});
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    logout(){
        localStorage.removeItem("token");
        window.location.assign("/");
    }

    render() {
        return (
            <>
            <div className='container-fluid sid'>
                <div className='row'>
                    <div className='bg-white col-auto  mt-2 d-flex justify-content-between flex-column sidebar-sh'>
                        <a href='/' className='text-decoration-none text-dark d-flex d-none d-sm-inline mt-3 align-itemcenter'>
                            <span className='ms-1 fs-4'>Меню</span>
                        </a>
                        <hr className='text-secondary d-none d-sm-inline'></hr>
                        <ul className="nav nav-pills flex-column">
                            <li className="nav-item text-white fs-4 mt-3">
                                <a href="/" className="nav-link text-dark fs-5" aria-current="page">
                                    <i className='bi bi-house-door'></i>
                                    <span className='ms-2 d-none d-sm-inline'>Главная</span>
                                </a>
                            </li>
                            <li className="nav-item text-white fs-4 mt-3">
                                <a href="/" className="nav-link text-dark fs-5" aria-current="page">
                                    <i className='bi bi-book'></i>
                                    <span className='ms-2 d-none d-sm-inline'>Учебные материалы</span>
                                </a>
                            </li>
                            <li className="nav-item text-white fs-4 mt-3">
                                <a href="/testing" className="nav-link text-dark fs-5" aria-current="page">
                                    <i className='bi bi-card-list'></i>
                                    <span className='ms-2 d-none d-sm-inline'>Тренировочные тесты</span>
                                </a>
                            </li>
                            <li className="nav-item text-white fs-4 mt-3">
                                <a href="/requests" className="nav-link text-dark fs-5" aria-current="page">
                                    <i className='bi bi-clipboard-check'></i>
                                    <span className='ms-2 d-none d-sm-inline'>Заявки</span>
                                </a>
                            </li>
                            {this.state.role == "ROLE_ADMIN" ? <li className="nav-item text-white fs-4 mt-3">
                                <a href="panel_admin" className="nav-link text-dark fs-5" aria-current="page">
                                    <i className='bi bi-person-lines-fill'></i>
                                    <span className='ms-2 d-none d-sm-inline'>Панель администратора</span>
                                </a>
                            </li> :
                            ''}
                            
                            <li className="nav-item text-white fs-4 mt-3">
                                <a href="/" className="nav-link text-dark fs-5" aria-current="page">
                                    <i className='bi bi-gear'></i>
                                    <span className='ms-2 d-none d-sm-inline'>Настройки</span>
                                </a>
                            </li>

                            <hr className='text-secondary mt-5'></hr>
                            <li className="nav-item text-white fs-4 mt-2 mb-4" onClick={this.logout}>
                                <a href="/" className="nav-link text-dark fs-5" aria-current="page">
                                    <i className='bi bi-box-arrow-left'></i>
                                    <span className='ms-2 d-none d-sm-inline'>Выход</span>
                                </a>
                            </li>

                        </ul>

                    </div>
                </div>

            </div>

            <Routes>
                <Route exact path='/requests' Component={requests} />
                <Route exact path='/testing' Component={testing} />
                <Route exact path='/panel_admin' Component={panel_admin} />
            </Routes>
            </>
        );
    }
}

export default Sidebar;