import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../components/Sidebar';
import '../styles/news_admin.css';
import { Modal, Form } from 'react-bootstrap';
import { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import ham from '../components/hamster.jpg';
import Image from 'react-bootstrap/Image';

function News_admin(props) {
    const [ShowCreateNew, SetShowCrNew] = useState(false);
    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs={4}><Sidebar /></Col>
                    <Col xs={8}>

                        <h5 className='text-center mt-2'>ПАНЕЛЬ АДМИНИСТРАТОРА</h5>
                        <Container className='d-flex justify-content-center' fluid>
                            <p className='text-secondary border-bottom border-primary border-opacity-50 text-center'>Управление новостями</p>
                        </Container>

                        <Container className='d-flex mt-3' fluid>
                            <h5 className='d-flex align-items-center'>Желаете создать новость?</h5>
                            <Button className='ms-4 btn-admin-news' onClick={() => SetShowCrNew(true)}>Создать новость</Button>
                        </Container>

                        <Container className='mt-5 container-news p-4' fluid>
                            <Row xs={1} md={2}>
                                <Col>
                                    <Container className='admin-card-new p-4 mb-4'>
                                        <p className='mb-1'><span className="fw-bold">Наименование:</span>«Зарница» завершилась тактической
                                            игрой в «Лазертаг»</p>
                                        <p className='mb-1'><span className="fw-bold">Дата создания: </span> 22.02.2024</p>
                                        <p className='mb-3'><span className="fw-bold">Фото: </span> 10 фотографий</p>
                                        <div className='d-flex justify-content-around'>
                                            <Button className='btn-admin-new-redirect' >К новости</Button>
                                            <Button className='btn-admin-new-edit'>Изменить</Button>
                                            <Button className='btn-admin-new-delete' >Удалить</Button>
                                        </div>
                                    </Container>

                                </Col>

                                <Col>
                                    <Container className='admin-card-new p-4 mb-4'>
                                        <p className='mb-1'><span className="fw-bold">Наименование:</span>«Зарница» завершилась тактической
                                            игрой в «Лазертаг»</p>
                                        <p className='mb-1'><span className="fw-bold">Дата создания: </span> 22.02.2024</p>
                                        <p className='mb-3'><span className="fw-bold">Фото: </span> 10 фотографий</p>
                                        <div className='d-flex justify-content-around'>
                                            <Button className='btn-admin-new-redirect' >К новости</Button>
                                            <Button className='btn-admin-new-edit'>Изменить</Button>
                                            <Button className='btn-admin-new-delete' >Удалить</Button>
                                        </div>
                                    </Container>

                                </Col>

                                <Col>
                                    <Container className='admin-card-new p-4 mb-4'>
                                        <p className='mb-1'><span className="fw-bold">Наименование:</span>«Зарница» завершилась тактической
                                            игрой в «Лазертаг»</p>
                                        <p className='mb-1'><span className="fw-bold">Дата создания: </span> 22.02.2024</p>
                                        <p className='mb-3'><span className="fw-bold">Фото: </span> 10 фотографий</p>
                                        <div className='d-flex justify-content-around'>
                                            <Button className='btn-admin-new-redirect' >К новости</Button>
                                            <Button className='btn-admin-new-edit'>Изменить</Button>
                                            <Button className='btn-admin-new-delete' >Удалить</Button>
                                        </div>
                                    </Container>

                                </Col>
                            </Row>
                        </Container>


                    </Col>
                </Row>
            </Container>

            <Modal
                show={ShowCreateNew}
                onHide={() => SetShowCrNew(false)}
                size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>
                        Создание новости
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='pt-4'>
                        <Form.Group controlId='NameChapter'>
                            <Form.Control type='text' placeholder='Введите название новости' name="name" className='new-control-input mb-3' />
                            <Form.Control as="textarea" placeholder='Введите описание новости' className='new-description-input mb-3' />
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="Вставьте ссылку на альбом"
                                    className='new-control-input'
                                />
                                <Button className='btn-download-photo' id="button-addon2">
                                    Загрузить фото
                                </Button>
                            </InputGroup>
                        </Form.Group>

                    </Form>
                    <Container fluid className='container-phonos-links scrollspy-example scrollspy-example' >
                        <Container className='link-photo-for-news d-flex mt-3'>
                            <div class="p-1"> <Image 
                                src={ham}
                                height="50"
                                width="50"
                                className='mx-auto d-block photo-format'
                                alt='Logo'
                            /></div>
                            <p className='p-2 d-flex align-items-center'>Фото 1</p>
                            <p className='p-2 d-flex align-items-center'>https://sun1-94.userapi.com/impg/JHGUP</p>
                            <p class="ms-auto p-2 del-photo d-flex align-items-center">Удалить фото</p>
                        </Container>

                        <Container className='link-photo-for-news d-flex mt-3'>
                            <div class="p-1"> <Image 
                                src={ham}
                                height="50"
                                width="50"
                                className='mx-auto d-block photo-format'
                                alt='Logo'
                            /></div>
                            <p className='p-2 d-flex align-items-center'>Фото 1</p>
                            <p className='p-2 d-flex align-items-center'>https://sun1-94.userapi.com/impg/JHGUP</p>
                            <p class="ms-auto p-2 del-photo d-flex align-items-center">Удалить фото</p>
                        </Container>

                        <Container className='link-photo-for-news d-flex mt-3'>
                            <div class="p-1"> <Image 
                                src={ham}
                                height="50"
                                width="50"
                                className='mx-auto d-block photo-format'
                                alt='Logo'
                            /></div>
                            <p className='p-2 d-flex align-items-center'>Фото 1</p>
                            <p className='p-2 d-flex align-items-center'>https://sun1-94.userapi.com/impg/JHGUP</p>
                            <p class="ms-auto p-2 del-photo d-flex align-items-center">Удалить фото</p>
                        </Container>

                        <Container className='link-photo-for-news d-flex mt-3'>
                            <div class="p-1"> <Image 
                                src={ham}
                                height="50"
                                width="50"
                                className='mx-auto d-block photo-format'
                                alt='Logo'
                            /></div>
                            <p className='p-2 d-flex align-items-center'>Фото 1</p>
                            <p className='p-2 d-flex align-items-center'>https://sun1-94.userapi.com/impg/JHGUP</p>
                            <p class="ms-auto p-2 del-photo d-flex align-items-center">Удалить фото</p>
                        </Container>

                    </Container>
                    <Button className="mt-3 mb-2 btn_form_new">Сохранить</Button>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default News_admin;