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
function Panel_admin() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs={4}><Sidebar /></Col>
                    <Col xs={8}>
                        <Container className='mt-2 d-flex justify-content-center' >
                            <h5 className='border-bottom p-2 border-primary border-opacity-50'>ПАНЕЛЬ АДМИНИСТРАТОРА</h5>
                        </Container>

                        <Container className='my_panel_admin'>
                            <Row>
                                <Col>
                                    <Container className='py-5 center-block text-center m-4 panel-cards'>
                                        <h5 className='mb-4'>Управление новостями</h5>
                                        <Button type="submit" href='/news_admin' className="d-flex justify-content-center align-items-center btn-admin-panel-cards mx-auto d-block">Перейти</Button>
                                    </Container>
                                </Col>
                                <Col>
                                    <Container className='py-5 center-block text-center m-4 panel-cards'>
                                        <h5 className='mb-4'>Управление анонсами</h5>
                                        <Button type="submit" href='/' className="d-flex justify-content-center align-items-center btn-admin-panel-cards mx-auto d-block">Перейти</Button>
                                    </Container>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Container className='py-5 center-block text-center m-4 panel-cards'>
                                        <h5 className='mb-4'>Управление партнерами</h5>
                                        <Button type="submit" href='/partners_admin' className="d-flex justify-content-center align-items-center btn-admin-panel-cards mx-auto d-block">Перейти</Button>
                                    </Container>
                                </Col>
                                <Col>
                                    <Container className='py-5 center-block text-center m-4 panel-cards'>
                                        <h5 className='mb-4'>Управление тестами</h5>
                                        <Button type="submit" href='/' className="d-flex justify-content-center align-items-center btn-admin-panel-cards mx-auto d-block">Перейти</Button>
                                    </Container>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Container className='py-5 center-block text-center m-4 panel-cards'>
                                        <h5 className='mb-4'>Управление заявками</h5>
                                        <Button type="submit" href='/request_admin' className="d-flex justify-content-center align-items-center btn-admin-panel-cards mx-auto d-block">Перейти</Button>
                                    </Container>
                                </Col>
                                <Col>
                                    <Container className='py-5 center-block text-center m-4 panel-cards'>
                                        <h5 className='mb-4'>Упраление услугами</h5>
                                        <Button type="submit" href='/service_admin' className="d-flex justify-content-center align-items-center btn-admin-panel-cards mx-auto d-block">Перейти</Button>
                                    </Container>
                                </Col>
                            </Row>







                        </Container>






                    </Col>

                </Row>
            </Container>
            <Routes>
                <Route exact path='/service_admin' Component={Service_admin} />
                <Route exact path='/request_admin' Component={Request_admin} />
                <Route exact path='/news_admin' Component={News_admin} />
                <Route exact path='/partners_admin' Component={Partners_admin} />
            </Routes>
        </>
    );
}

export default Panel_admin;