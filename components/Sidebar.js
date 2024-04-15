import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import '../styles/sidebar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import requests from '../pages/RequestsService ';
import testing from '../pages/Testing';
import panel_admin from '../pages/Panel_admin';

class Sidebar extends Component {
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
                        <ul class="nav nav-pills flex-column">
                            <li class="nav-item text-white fs-4 mt-3">
                                <a href="/" class="nav-link text-dark fs-5" aria-current="page">
                                    <i className='bi bi-house-door'></i>
                                    <span className='ms-2 d-none d-sm-inline'>Главная</span>
                                </a>
                            </li>
                            <li class="nav-item text-white fs-4 mt-3">
                                <a href="/" class="nav-link text-dark fs-5" aria-current="page">
                                    <i className='bi bi-book'></i>
                                    <span className='ms-2 d-none d-sm-inline'>Учебные материалы</span>
                                </a>
                            </li>
                            <li class="nav-item text-white fs-4 mt-3">
                                <a href="/testing" class="nav-link text-dark fs-5" aria-current="page">
                                    <i className='bi bi-card-list'></i>
                                    <span className='ms-2 d-none d-sm-inline'>Тренировочные тесты</span>
                                </a>
                            </li>
                            <li class="nav-item text-white fs-4 mt-3">
                                <a href="/requests" class="nav-link text-dark fs-5" aria-current="page">
                                    <i className='bi bi-clipboard-check'></i>
                                    <span className='ms-2 d-none d-sm-inline'>Заявки</span>
                                </a>
                            </li>
                            <li class="nav-item text-white fs-4 mt-3">
                                <a href="panel_admin" class="nav-link text-dark fs-5" aria-current="page">
                                    <i className='bi bi-person-lines-fill'></i>
                                    <span className='ms-2 d-none d-sm-inline'>Панель администратора</span>
                                </a>
                            </li>
                            <li class="nav-item text-white fs-4 mt-3">
                                <a href="/" class="nav-link text-dark fs-5" aria-current="page">
                                    <i className='bi bi-gear'></i>
                                    <span className='ms-2 d-none d-sm-inline'>Настройки</span>
                                </a>
                            </li>

                            <hr className='text-secondary mt-5'></hr>
                            <li class="nav-item text-white fs-4 mt-2 mb-4">
                                <a href="/" class="nav-link text-dark fs-5" aria-current="page">
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