import React from 'react';
import { Container, Button } from 'react-bootstrap';
import '../styles/Educational_materials_admin.css';
import Sidebar from '../components/Sidebar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/testing_admin.css';
import '../styles/titles-sizes.css';
import axios from 'axios';

function Testing_admin(props) {
    return (
        <Container fluid className='main-cnt-admin-testing p-0'>
            <p className='text-center mt-2 main-section-title mb-1'>ПАНЕЛЬ АДМИНИСТРАТОРА</p>
            <Container className=' d-flex justify-content-center' fluid>
                <p className='text-secondary border-bottom border-primary border-opacity-50 text-center title-subsection'>Управление тестами</p>
            </Container>
            <Row className='mt-3'>
                <Col xs={3} sm={3} md={5} lg={3}><Sidebar /></Col>
                <Col xs={9} sm={9} md={7} lg={9}>


                    <Container className='d-flex p-0' fluid>
                        <p className='d-flex align-items-center m-0 title-admin-add'>Добавить тест?</p>
                        <Button className='ms-4 btn-admin-add'>Добавить</Button>
                    </Container>
                    <Row xs={1} md={2} className='mt-4'>
                        <Col>
                            <Container fluid className='admin-card-test px-5 py-4 mb-4 shadow rounded'>
                                <Container fluid className='cnt-admin-name-test p-0'>
                                    <p className='mb-1 admin-name-card-test'><span className="fw-bold">Наименование: </span>Насколько хорошо вы знаете творчество Пэлка</p>
                                </Container>
                                <p className='mb-1 card-test-count-questions'><span className="fw-bold">Количество вопросов: </span>200</p>
                                <div className='d-flex justify-content-between mt-3'>
                                    <Button className='btn-admin-test-card-edit'>Изменить</Button>
                                    <Button className='btn-admin-test-card-delete'>Удалить</Button>
                                </div>
                            </Container>
                        </Col>

                        <Col>
                            <Container fluid className='admin-card-test px-5 py-4 mb-4 shadow rounded'>
                                <Container fluid className='cnt-admin-name-test p-0'>
                                    <p className='mb-1 admin-name-card-test'><span className="fw-bold">Наименование: </span>Сколько сыра Пэлк сможет съесть за 1 раз</p>
                                </Container>
                                <p className='mb-1 card-test-count-questions'><span className="fw-bold">Количество вопросов: </span>1</p>
                                <div className='d-flex justify-content-between mt-3'>
                                    <Button className='btn-admin-test-card-edit'>Изменить</Button>
                                    <Button className='btn-admin-test-card-delete'>Удалить</Button>
                                </div>
                            </Container>
                        </Col>

                        <Col>
                            <Container fluid className='admin-card-test px-5 py-4 mb-4 shadow rounded'>
                                <Container fluid className='cnt-admin-name-test p-0'>
                                    <p className='mb-1 admin-name-card-test'><span className="fw-bold">Наименование: </span>Факты о ... Пэлка, имена, возраст, рост, вес, вредные привычки</p>
                                </Container>
                                <p className='mb-1 card-test-count-questions'><span className="fw-bold">Количество вопросов: </span>1</p>
                                <div className='d-flex justify-content-between mt-3'>
                                    <Button className='btn-admin-test-card-edit'>Изменить</Button>
                                    <Button className='btn-admin-test-card-delete'>Удалить</Button>
                                </div>
                            </Container>
                        </Col>

                    </Row>



                </Col>
            </Row>
        </Container>
    );
}

export default Testing_admin;