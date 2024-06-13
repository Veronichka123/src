import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../components/Sidebar';
import '../styles/groups_mailing.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import { Regex } from 'react-bootstrap-icons';
import { useState, useEffect } from 'react';

function Groups_malings(props) {
    const [showCreateGroupMailing, setShowCreateGroupMailing] = useState(false);
    const [showCreateGroupMember, setShowCreateGroupMember] = useState(false);
    return (
        <>
            <Container fluid className='main-cnt-group-mailing p-0'>
                <p className='text-center mt-2 main-section-title mb-1'>ПАНЕЛЬ АДМИНИСТРАТОРА</p>
                <Container className='title-subsection d-flex justify-content-center' fluid>
                    <p className='text-secondary border-bottom border-primary border-opacity-50 text-center'>Группы для рассылки</p>
                </Container>
                <Row className='mt-3'>
                    <Col xs={3} sm={3} md={5} lg={3}><Sidebar /></Col>
                    <Col xs={9} sm={9} md={7} lg={9}>
                        <Container className='d-flex p-0' fluid>
                            <p className='d-flex align-items-center title-admin-add m-0'>Добавить группу?</p>
                            <Button className='ms-4 btn-admin-add' onClick={() => setShowCreateGroupMailing(true)}>Добавить</Button>
                        </Container>
                        <Container fluid className='p-4 cnt-group-mailing rounded mt-4 shadow-sm'>
                            <Container className='d-flex justify-content-end'>
                                <Button className='edit_group_mailing d-flex justify-content-center align-items-center'><i class="bi bi-pencil icon_disabled"></i></Button>
                                <Button className='delete_group_mailing ms-2 d-flex justify-content-center align-items-center'><i class="bi bi-trash3 icon_disabled"></i></Button>
                            </Container>
                            <p className='title-group-mailing-name mb-0 mt-2'>Кадетские корпуса</p>
                            <Row xs={1} md={1} lg={2} xxl={2}>
                                <Col>
                                    <Container fluid className='p-3 cnt-group-mailing-position rounded mt-3'>
                                        <Container fluid className='p-0 d-flex cnt-name-email-group'>
                                            <i class="bi bi-people group-position-icon"></i>
                                            <Container fluid className='p-0 ms-2 cnt-control-width-name-email'>
                                                <p className='mb-0 group-position-title'>Имя участника группы</p>
                                                <p className='mb-0 group-position-name-email'>ОГБОУ КШИ "Костромской Кадетский Корпус"</p>
                                            </Container>
                                        </Container>
                                        <Container fluid className='p-0 d-flex mt-3 cnt-name-email-group'>
                                            <i class="bi bi-envelope-open group-position-icon"></i>
                                            <Container fluid className='p-0 ms-2 cnt-control-width-name-email'>
                                                <p className='mb-0 group-position-title'>Email участника группы</p>
                                                <p className='mb-0 group-position-name-email'>kad_corp@mail.com</p>
                                            </Container>
                                        </Container>
                                        <Container fluid className='d-flex justify-content-between p-0 mt-4 cnt-btn-edit-delete-group-position'>
                                            <Button className='btn-edit-group-position d-flex justify-content-center align-items-center'><p className='m-0 text-in-button-group-mailing'>Изменить</p><i class="bi bi-pencil icon_disabled icon-in-button-group-mailing"></i></Button>
                                            <Button className='btn-delete-group-position d-flex justify-content-center align-items-center'><p className='m-0 text-in-button-group-mailing'>Удалить</p><i class="bi bi-trash3 icon_disabled icon-in-button-group-mailing"></i></Button>
                                        </Container>
                                    </Container>
                                </Col>

                                <Col>
                                    <Container fluid className='p-3 cnt-group-mailing-position rounded mt-3'>
                                        <Container fluid className='p-0 d-flex cnt-name-email-group'>
                                            <i class="bi bi-people group-position-icon"></i>
                                            <Container fluid className='p-0 ms-2 cnt-control-width-name-email'>
                                                <p className='mb-0 group-position-title'>Имя участника группы</p>
                                                <p className='mb-0 group-position-name-email'>Кадетская школа-интернат</p>
                                            </Container>
                                        </Container>
                                        <Container fluid className='p-0 d-flex mt-3 d-flex cnt-name-email-group'>
                                            <i class="bi bi-envelope-open group-position-icon"></i>
                                            <Container fluid className='p-0 ms-2 cnt-control-width-name-email'>
                                                <p className='mb-0 group-position-title'>Email участника группы</p>
                                                <p className='mb-0 group-position-name-email'>kad_shkola@mail.com</p>
                                            </Container>
                                        </Container>
                                        <Container fluid className='d-flex justify-content-between p-0 mt-4 cnt-btn-edit-delete-group-position'>
                                            <Button className='btn-edit-group-position d-flex justify-content-center align-items-center'><p className='m-0 text-in-button-group-mailing'>Изменить</p><i class="bi bi-pencil icon_disabled icon-in-button-group-mailing"></i></Button>
                                            <Button className='btn-delete-group-position d-flex justify-content-center align-items-center'><p className='m-0 text-in-button-group-mailing'>Удалить</p><i class="bi bi-trash3 icon_disabled icon-in-button-group-mailing"></i></Button>
                                        </Container>
                                    </Container>
                                </Col>
                            </Row>
                            <Container className='d-flex justify-content-start p-0 mt-4 cnt-btn-edit-delete-group-position' fluid>
                                <Button className='btn-plus-group-position fw-light d-flex justify-content-center align-items-center' onClick={() => setShowCreateGroupMember(true)}><i className='bi bi-plus icon_disabled'></i></Button>
                                <p className='text-secondary ms-3 d-block mt-auto my-auto add-position-group-title'>Добавить участника в группу</p>
                            </Container>
                        </Container>

                        <Container fluid className='p-4 cnt-group-mailing rounded mt-4 shadow-sm'>
                            <Container className='d-flex justify-content-end'>
                                <Button className='edit_group_mailing d-flex justify-content-center align-items-center'><i class="bi bi-pencil icon_disabled"></i></Button>
                                <Button className='delete_group_mailing ms-2 d-flex justify-content-center align-items-center'><i class="bi bi-trash3 icon_disabled"></i></Button>
                            </Container>
                            <p className='title-group-mailing-name mb-0 mt-2'>Школы</p>
                            <Row xs={1} md={1} lg={2} xxl={2}>
                                <Col>
                                    <Container fluid className='p-3 cnt-group-mailing-position rounded mt-3'>
                                        <Container fluid className='p-0 d-flex cnt-name-email-group'>
                                            <i class="bi bi-people group-position-icon"></i>
                                            <Container fluid className='p-0 ms-2 cnt-control-width-name-email'>
                                                <p className='mb-0 group-position-title'>Имя участника группы</p>
                                                <p className='mb-0 group-position-name-email'>Школа № 21</p>
                                            </Container>
                                        </Container>
                                        <Container fluid className='p-0 d-flex mt-3 cnt-name-email-group'>
                                            <i class="bi bi-envelope-open group-position-icon"></i>
                                            <Container fluid className='p-0 ms-2 cnt-control-width-name-email'>
                                                <p className='mb-0 group-position-title'>Email участника группы</p>
                                                <p className='mb-0 group-position-name-email'>scool_21@mail.com</p>
                                            </Container>
                                        </Container>
                                        <Container fluid className='d-flex justify-content-between p-0 mt-4 cnt-btn-edit-delete-group-position'>
                                            <Button className='btn-edit-group-position d-flex justify-content-center align-items-center'><p className='m-0 text-in-button-group-mailing'>Изменить</p><i class="bi bi-pencil icon_disabled icon-in-button-group-mailing"></i></Button>
                                            <Button className='btn-delete-group-position d-flex justify-content-center align-items-center'><p className='m-0 text-in-button-group-mailing'>Удалить</p><i class="bi bi-trash3 icon_disabled icon-in-button-group-mailing"></i></Button>
                                        </Container>
                                    </Container>
                                </Col>
                            </Row>
                            <Container className='d-flex justify-content-start p-0 mt-4 cnt-btn-edit-delete-group-position' fluid>
                                <Button className='btn-plus-group-position fw-light d-flex justify-content-center align-items-center' onClick={() => setShowCreateGroupMember(true)}><i className='bi bi-plus icon_disabled'></i></Button>
                                <p className='text-secondary ms-3 d-block mt-auto my-auto add-position-group-title'>Добавить участника в группу</p>
                            </Container>
                        </Container>
                    </Col >
                </Row >

                <Modal
                    show={showCreateGroupMailing}
                    onHide={() => setShowCreateGroupMailing(false)}
                >
                    <Modal.Header closeButton>
                        <Modal.Title className='modal-group-mailing-title'>
                            Добавить группу для рассылки
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Control type='text' placeholder='Введите наименование группы'
                            className='input-modal-group-mailing shadow-sm' />
                        <Button className='mt-3 btn-modal-group-mailing-save'>Сохранить</Button>
                    </Modal.Body>
                </Modal>

                <Modal
                    show={showCreateGroupMember}
                    onHide={() => setShowCreateGroupMember(false)}
                >
                    <Modal.Header closeButton>
                        <Modal.Title className='modal-group-mailing-title'>
                            Добавить участника группы
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Control type='text' placeholder='Введите имя участника'
                            className='input-modal-group-mailing shadow-sm' />
                        <Form.Control type='text' placeholder='Введите Email участника'
                            className='input-modal-group-mailing shadow-sm mt-2' />
                        <Button className='mt-3 btn-modal-group-mailing-save'>Сохранить</Button>
                    </Modal.Body>
                </Modal>
            </Container >
        </>
    );
}

export default Groups_malings;