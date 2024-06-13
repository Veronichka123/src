import React from 'react';
import { Container } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Route, Routes } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../styles/panel_admin.css';
import Service_admin from './Service_admin';
import Request_admin from './Request_admin';
import News_admin from './News_admin';
import Partners_admin from './Partners_admin';
import Anonses_admin from './Anonses_admin';
import Educational_materials_admin from './Educational_materials_admin';
import Testing_admin from './Testing_admin';
import { Link } from 'react-router-dom';

function Panel_admin() {
    var today = new Date();

    // Массив для отображения названия месяца
    var months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

    // Форматируем дату в нужный формат
    var formattedDate = today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear();
    return (
        <>
            <Container fluid className='main-cnt-panel-admin p-0'>
                <Container className='mt-2 d-flex justify-content-center' >
                    <p className='border-bottom p-2 border-primary border-opacity-50 main-section-title'>ПАНЕЛЬ АДМИНИСТРАТОРА</p>
                </Container>
                <Row className='mt-3'>
                    <Col xs={3} sm={3} md={5} lg={3}><Sidebar /></Col>
                    <Col xs={9} sm={9} md={7} lg={9}>

                        <Container fluid className='my_panel_admin p-0'>
                            <Row xs={1} lg={3}>
                                <Col>
                                    <Container fluid className='p-4 info-panel-admin rounded shadow d-flex justify-content-start align-items-center'>
                                        <Container fluid className='cnt-info-icon-panel-admin shadow-sm'>
                                            <i class="bi bi-calendar-week"></i>
                                        </Container>
                                        <Container fluid className='p-0 cnt-info-text-panel-admin'>
                                            <p className='mb-0 title-info-panel-admin'>{formattedDate}</p>
                                            <p className='mb-0 text-secondary description-info-panel-admin'>Сегодня</p>
                                        </Container>
                                    </Container>
                                </Col>

                                <Col>
                                    <Container fluid className='p-4 info-panel-admin rounded shadow d-flex justify-content-start align-items-center'>
                                        <Container fluid className='cnt-info-icon-panel-admin shadow-sm'>
                                            <i class="bi bi-person-add"></i>
                                        </Container>
                                        <Container fluid className='p-0 cnt-info-text-panel-admin'>
                                            <p className='mb-0 title-info-panel-admin'>5</p>
                                            <p className='mb-0 text-secondary description-info-panel-admin'>Новые пользователи</p>
                                        </Container>
                                    </Container>
                                </Col>

                                <Col>
                                    <Container fluid className='p-4 info-panel-admin rounded shadow d-flex justify-content-start align-items-center'>
                                        <Container fluid className='cnt-info-icon-panel-admin shadow-sm'>
                                            <i class="bi bi-clipboard"></i>
                                        </Container>
                                        <Container fluid className='p-0 cnt-info-text-panel-admin'>
                                            <p className='mb-0 title-info-panel-admin'>7</p>
                                            <p className='mb-0 text-secondary description-info-panel-admin'>Новые заявки</p>
                                        </Container>
                                    </Container>
                                </Col>


                            </Row>

                            <Row xs={1} md={1} lg={2} className='mt-4 row-fnct-pan-ad'>

                                <Link to='/service_admin' className='link_panel_admin_function' >
                                    <Col>
                                        <Container fluid className='p-4 function-panel-admin d-flex justify-content-start align-items-center shadow-sm'>
                                            <i class="bi bi-receipt icon-cnt-info-panel-admin"></i>
                                            <p className='mb-0 name-cnt-info-panel-admin'>Управление услугами</p>
                                        </Container>
                                    </Col>
                                </Link>

                                <Link to='/news_admin' className='link_panel_admin_function' >
                                    <Col>
                                        <Container fluid className='p-4 function-panel-admin d-flex justify-content-start align-items-center shadow-sm'>
                                            <i class="bi bi-newspaper icon-cnt-info-panel-admin"></i>
                                            <p className='mb-0 name-cnt-info-panel-admin'>Управление новостями</p>
                                        </Container>
                                    </Col>
                                </Link>

                                <Link to='/anonses_admin' className='link_panel_admin_function' >
                                    <Col>
                                        <Container fluid className='p-4 function-panel-admin d-flex justify-content-start align-items-center shadow-sm'>
                                            <i class="bi bi-file-text icon-cnt-info-panel-admin"></i>
                                            <p className='mb-0 name-cnt-info-panel-admin'>Управление анонсами</p>
                                        </Container>
                                    </Col>
                                </Link>

                                <Link to='/partners_admin' className='link_panel_admin_function' >
                                    <Col>
                                        <Container fluid className='p-4 function-panel-admin d-flex justify-content-start align-items-center shadow-sm'>
                                            <i class="bi bi-person-vcard icon-cnt-info-panel-admin"></i>
                                            <p className='mb-0 name-cnt-info-panel-admin'>Управление партнерами</p>
                                        </Container>
                                    </Col>
                                </Link>

                                <Link to='/request_admin' className='link_panel_admin_function' >
                                    <Col>
                                        <Container fluid className='p-4 function-panel-admin d-flex justify-content-start align-items-center shadow-sm'>
                                            <i class="bi bi-clipboard-check icon-cnt-info-panel-admin"></i>
                                            <p className='mb-0 name-cnt-info-panel-admin'>Управление заявками</p>
                                        </Container>
                                    </Col>
                                </Link>

                                <Link to='/groups_mailing' className='link_panel_admin_function' >
                                    <Col>
                                        <Container fluid className='p-4 function-panel-admin d-flex justify-content-start align-items-center shadow-sm'>
                                            <i class="bi bi-envelope-open icon-cnt-info-panel-admin"></i>
                                            <p className='mb-0 name-cnt-info-panel-admin'>Управление группами рассылки</p>
                                        </Container>
                                    </Col>
                                </Link>

                                <Link to='/testing_admin' className='link_panel_admin_function' >
                                    <Col>
                                        <Container fluid className='p-4 function-panel-admin d-flex justify-content-start align-items-center shadow-sm'>
                                            <i class="bi bi-card-list icon-cnt-info-panel-admin"></i>
                                            <p className='mb-0 name-cnt-info-panel-admin'>Управление тренировочными тестами</p>
                                        </Container>
                                    </Col>
                                </Link>

                                <Link to='/educational_materials_admin' className='link_panel_admin_function' >
                                    <Col>
                                        <Container fluid className='p-4 function-panel-admin d-flex justify-content-start align-items-center shadow-sm'>
                                            <i class="bi bi-book icon-cnt-info-panel-admin"></i>
                                            <p className='mb-0 name-cnt-info-panel-admin'>Управление учебными материалами</p>
                                        </Container>
                                    </Col>
                                </Link>
                            </Row>
                        </Container>
                    </Col>

                </Row>
            </Container>

        </>
    );
}

export default Panel_admin;