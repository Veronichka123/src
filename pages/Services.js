import React from 'react';
import { useState } from 'react';
import { Container, Modal } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../styles/Services.css';
import { Form } from 'react-bootstrap';


function Services() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

    return (
        <>
                <Container fluid>
                    <Container className='mt-2 d-flex justify-content-center' >
                        <h5 className='border-bottom p-2 border-primary border-opacity-50'>УСЛУГИ ДОСААФ КОСТРОМА</h5>
                    </Container>
                    <Container className='mt-5' fluid>
                        <Container className='d-flex justify-content-start' fluid>
                            <h5 className='border-bottom p-1 border-secondary border-opacity-50 border-1'>Получить лицензию на оружие</h5>
                        </Container>
                        <Container fluid>
                            <Row xs={1} md={3}>
                                <Col>
                                    <Container className='py-4 px-4 mt-4 center-block service-cards'>
                                        <h6 className='mb-4'>Лицензия на приобретение оружия</h6>
                                        <p className='text-secondary'>Получение лицензии на оружие, замена просроченной лицензии на новую</p>
                                        <div className='border border-secondary mb-4 border-price border-2 border-opacity-50 px-2 py-3'>
                                            <h6 className='mb-3'>Стоимость:</h6>
                                            <h5>90 рублей</h5>
                                        </div>
                                        <Button type="submit" className="btn-service" onClick={handleShow}>Подать заявку</Button>
                                    </Container>
                                </Col>
                                <Col>
                                    <Container className='py-4 px-4 mt-4 center-block service-cards'>
                                        <h6 className='mb-4'>Пересдача экзамена для лицензии</h6>
                                        <p className='text-secondary'>Если не удалось пройти с первого раза, можно попробовать снова!</p>
                                        <div className='border border-secondary mb-4 border-price border-2 border-opacity-50 px-2 py-3'>
                                            <h6 className='mb-3'>Стоимость:</h6>
                                            <h5>900000 рублей</h5>
                                        </div>
                                        <Button type="submit" href='/' className="btn-service">Подать заявку</Button>
                                    </Container>
                                </Col>
                            </Row>


                        </Container>
                    </Container>


                    <Container className='mt-5' fluid>
                        <Container className='d-flex justify-content-start' fluid>
                            <h5 className='border-bottom p-1 border-secondary border-opacity-50 border-1'>Коммерческие услуги</h5>
                        </Container>
                        <Container fluid>
                            <Row xs={1} md={3}>
                                <Col>
                                    <Container className='py-4 px-4 mt-4 center-block service-cards'>
                                        <h6 className='mb-4'>Сдать на права категория “B“</h6>
                                        <p className='text-secondary'>Инструктаж и практика по вождению</p>
                                        <div className='border border-secondary mb-4 border-price border-2 border-opacity-50 px-2 py-3'>
                                            <h6 className='mb-3'>Стоимость:</h6>
                                            <h5>90 рублей</h5>
                                        </div>
                                        <Button type="submit" href='/' className="btn-service">Подать заявку</Button>
                                    </Container>
                                </Col>
                                <Col>
                                    <Container className='py-4 px-4 mt-4 center-block service-cards'>
                                        <h6 className='mb-4'>Пострелять в тире (1 раз)</h6>
                                        <p className='text-secondary'>Стрельба в тире 60 минут.</p>
                                        <div className='border border-secondary mb-4 border-price border-2 border-opacity-50 px-2 py-3'>
                                            <h6 className='mb-3'>Стоимость:</h6>
                                            <h5>90 рублей</h5>
                                        </div>
                                        <Button type="submit" href='/' className="btn-service">Подать заявку</Button>
                                    </Container>
                                </Col>
                                <Col>
                                    <Container className='py-4 px-4 mt-4 center-block service-cards'>
                                        <h6 className='mb-4'>Пострелять в тире (10 раз)</h6>
                                        <p className='text-secondary'>Стрельба в тире 600 минут</p>
                                        <div className='border border-secondary mb-4 border-price border-2 border-opacity-50 px-2 py-3'>
                                            <h6 className='mb-3'>Стоимость:</h6>
                                            <h5>90 рублей</h5>
                                        </div>
                                        <Button type="submit" href='/' className="btn-service">Подать заявку</Button>
                                    </Container>
                                </Col>
                                <Col>
                                    <Container className='py-4 px-4 mt-4 center-block service-cards'>
                                        <h6 className='mb-4'>Кружок по стрельбе из винтовки</h6>
                                        <p className='text-secondary'>Занятия в тире по стрельбе из винтовки 2 раза в неделю с тренером</p>
                                        <div className='border border-secondary mb-4 border-price border-2 border-opacity-50 px-2 py-3'>
                                            <h6 className='mb-3'>Стоимость:</h6>
                                            <h5>90 рублей</h5>
                                        </div>
                                        <Button type="submit" href='/' className="btn-service">Подать заявку</Button>
                                    </Container>
                                </Col>

                                <Col>
                                    <Container className='py-4 px-4 mt-4 center-block service-cards'>
                                        <h6 className='mb-4'>Кружок по стрельбе из пистолета</h6>
                                        <p className='text-secondary'>Занятия в тире по стрельбе из пистолета 2 раза в неделю с тренером</p>
                                        <div className='border border-secondary mb-4 border-price border-2 border-opacity-50 px-2 py-3'>
                                            <h6 className='mb-3'>Стоимость:</h6>
                                            <h5>90 рублей</h5>
                                        </div>
                                        <Button type="submit" href='/' className="btn-service">Подать заявку</Button>
                                    </Container>
                                </Col>
                            </Row>


                        </Container>
                    </Container>


                    <Container className='mt-5' fluid>
                        <Container className='d-flex justify-content-start' fluid>
                            <h5 className='border-bottom p-1 border-secondary border-opacity-50 border-1 mb-4'>Аренда помещений</h5>
                        </Container>
                        <Container fluid>
                            <Row xs={1} md={3}>
                                <Col>
                                    <Container className='py-4 px-4 mt-4 center-block service-cards'>
                                        <h6 className='mb-4'>Аренда этажа</h6>
                                        <p className='text-secondary'>Сдача помещения для офисов</p>
                                        <div className='border border-secondary mb-4 border-price border-2 border-opacity-50 px-2 py-3'>
                                            <h6 className='mb-3'>Стоимость:</h6>
                                            <h5>90 рублей</h5>
                                        </div>
                                        <Button type="submit" href='/' className="btn-service">Подать заявку</Button>
                                    </Container>
                                </Col>
                            </Row>


                        </Container>
                    </Container>

                </Container>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Форма заполнения заявки</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form className='px-4'>
                            <p className='text-secondary'>Подача заявки на услугу</p>
                            <h5 className='mb-4'>Лицензия на приобретение оружия</h5>
                            <Form.Group controlId='fromBasicRequestName'>
                                <Form.Control type='text' placeholder='Имя' className='request-control-input mb-3'/>
                            </Form.Group>

                            <Form.Group controlId='fromBasicRequestSurname'>
                                <Form.Control type='text' placeholder='Фамилия' className='request-control-input mb-3'/>
                            </Form.Group>

                            <Form.Group controlId='fromBasicRequestPhoneNumber'>
                                <Form.Control type='text' placeholder='Номер телефона' className='request-control-input mb-3'/>
                            </Form.Group>

                            <Form.Group controlId='fromBasicRequestEmail'>
                                <Form.Control type='Email' placeholder='Email' className='request-control-input mb-4'/>
                            </Form.Group>
                            <p className='text-center opacity-75'>После оставления заявки, с Вами свяжется сотрудник ДОСААФ</p>
                            <Button className="mt-4 mb-3 btn_form_reguest mx-auto d-block">Отправить заявку</Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </>
    );
}

export default Services;