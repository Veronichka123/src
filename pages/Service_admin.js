import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../components/Sidebar';
import '../styles/service_admin.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

function Service_admin(props) {
    return (
        <Container fluid>
            <Row>
                <Col xs={4}><Sidebar /></Col>
                <Col xs={8}>

                    <h5 className='text-center mt-2'>ПАНЕЛЬ АДМИНИСТРАТОРА</h5>
                    <Container className='d-flex justify-content-center' fluid>
                        <p className='text-secondary border-bottom border-primary border-opacity-50 text-center'>Управление услугами</p>
                    </Container>

                    <Container className='d-flex mt-3' fluid>
                        <h5 className='d-flex align-items-center'>Желаете добавить раздел услуг?</h5>
                        <Button className='ms-4 btn-admin-service'>Добавить</Button>
                    </Container>

                    <Container className='mt-5 chapter-services p-4' fluid>
                        <div className='d-flex justify-content-start' fluid>

                            <p className='d-flex align-items-center border-bottom border-3 title-chapter'>Получить лицензию на оружие</p>

                            <Button className='btn-admin-chapter-edit ms-5'>Редактровать раздел</Button>
                            <Button className='btn-admin-chapter-delete ms-2'>Удалить раздел</Button>
                        </div>
                        <p>Услуги</p>
                        <Row xs={1} md={2}>
                            <Col>
                                <Container className='admin-card-service p-4'>
                                    <p><span className="fw-bold">Наименование: </span>Лицензия на приобретение оружия.</p>
                                    <p><span className="fw-bold">Стоимость: </span>99 рублей.</p>
                                    <Container className='d-flex justify-content-around'>
                                        <Button className='btn-admin-service-edit'>Изменить</Button>
                                        <Button className='btn-admin-service-delete'>Удалить</Button>
                                    </Container>
                                </Container>
                            </Col>
                            <Col>
                                <Container className='admin-card-service p-4 mb-4'>
                                    <p><span className="fw-bold">Наименование: </span>Пересдача экзамена для лицензии.</p>
                                    <p><span className="fw-bold">Стоимость: </span>999 рублей.</p>
                                    <Container className='d-flex justify-content-around'>
                                        <Button className='btn-admin-service-edit'>Изменить</Button>
                                        <Button className='btn-admin-service-delete'>Удалить</Button>
                                    </Container>
                                </Container>
                            </Col>
                        </Row>
                        <Container className='d-flex justify-content-start' fluid>
                        <Button className='btn-plus-service fw-light d-flex justify-content-center align-items-center'><p className=''>+</p></Button>
                        <p className='text-secondary ms-3 d-block mt-auto'>Добавить услугу в раздел</p>
                        </Container>
                    </Container>




                    
                </Col>

            </Row>
        </Container>





    );
}

export default Service_admin;