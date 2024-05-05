import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Button, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/request_admin.css';

function Request_admin(props) {
    const [showtab, SetShowtab] = useState(1);
    const handletab = (e) => {
        SetShowtab(e);
    }
    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs={4}><Sidebar /></Col>
                    <Col xs={8}>

                        <h5 className='text-center mt-2'>ПАНЕЛЬ АДМИНИСТРАТОРА</h5>
                        <Container className='d-flex justify-content-center' fluid>
                            <p className='text-secondary border-bottom border-primary border-opacity-50 text-center'>Управление заявками</p>
                        </Container>
                        <Container fluid className='d-flex justify-content-center mt-3'>
                            <Button className={showtab === 1 ? 'btn-new-requests active' : 'btn-new-requests'} onClick={() => handletab(1)}>Новые заявки</Button>
                            <Button className={showtab === 2 ? 'btn-accepted-requests active' : 'btn-accepted-requests'} onClick={() => handletab(2)}>Принятые заявки</Button>
                            <Button className={showtab === 3 ? 'btn-rejected-requests active' : 'btn-rejected-requests'} onClick={() => handletab(3)}>Отклоненные заявки</Button>
                        </Container>

                        <Container fluid className='tab-content text-dark' id='pills-tabContent'>
                            <Container fluid className={showtab === 1 ? 'tab-pane fade show active' : "tab-pane fade show"}>
                                <Container fluid className='cont-new-requests px-5 py-3 mt-4'>
                                    <p className='text-secondary mb-4'>Заявка № 237 от 21.02.2024</p>
                                    <p className='text-secondary mb-3'>Имя: <span className='text-dark'>Сидоров Сергей Платонович</span></p>
                                    <p className='text-secondary mb-3'>Почта: <span className='text-dark'>idsgv@sv.ru</span></p>
                                    <p className='text-secondary'>Услуга: <span className='text-dark'>Стрельба из винтовки</span></p>
                                    <div className='d-flex justify-content-start mt-4'>
                                        <Button className='btn-accept-request'>Принять</Button>
                                        <Button className='btn-reject-request ms-5'>Отклонить</Button>
                                    </div>
                                </Container>
                                <Container fluid className='cont-new-requests px-5 py-3 mt-4'>
                                    <p className='text-secondary mb-4'>Заявка № 237 от 21.02.2024</p>
                                    <p className='text-secondary mb-3'>Имя: <span className='text-dark'>Сидоров Сергей Платонович</span></p>
                                    <p className='text-secondary mb-3'>Почта: <span className='text-dark'>idsgv@sv.ru</span></p>
                                    <p className='text-secondary'>Услуга: <span className='text-dark'>Стрельба из пистолета</span></p>
                                    <div className='d-flex justify-content-start mt-4'>
                                        <Button className='btn-accept-request'>Принять</Button>
                                        <Button className='btn-reject-request ms-5'>Отклонить</Button>
                                    </div>
                                </Container>
                                <Container fluid className='cont-new-requests px-5 py-3 mt-4'>
                                    <p className='text-secondary mb-4'>Заявка № 237 от 21.02.2024</p>
                                    <p className='text-secondary mb-3'>Имя: <span className='text-dark'>Сидоров Сергей Платонович</span></p>
                                    <p className='text-secondary mb-3'>Почта: <span className='text-dark'>idsgv@sv.ru</span></p>
                                    <p className='text-secondary'>Услуга: <span className='text-dark'>Аренда помещения</span></p>
                                    <div className='d-flex justify-content-start mt-4'>
                                        <Button className='btn-accept-request'>Принять</Button>
                                        <Button className='btn-reject-request ms-5'>Отклонить</Button>
                                    </div>
                                </Container>
                            </Container>


                            <Container fluid className={showtab === 2 ? 'tab-pane fade show active' : "tab-pane fade"}>
                                <Container fluid className='cont-accept-requests px-5 py-3 mt-4'>
                                    <p className='text-secondary mb-4'>Заявка № 237 от 21.02.2024</p>
                                    <p className='text-secondary mb-3'>Имя: <span className='text-dark'>Сидоров Сергей Платонович</span></p>
                                    <p className='text-secondary mb-3'>Почта: <span className='text-dark'>FSh@palk.ru</span></p>
                                    <p className='text-secondary'>Услуга: <span className='text-dark'>Аренда помещения</span></p>
                                    <div className='mt-4'>
                                        <Button className='btn-reject-request'>Отклонить</Button>
                                    </div>
                                </Container>
                            </Container>

                            <Container fluid className={showtab === 3 ? 'tab-pane fade show active' : "tab-pane fade"}>
                                <Container fluid className='cont-reject-requests px-5 py-3 mt-4'>
                                    <p className='text-secondary mb-4'>Заявка № 237 от 21.02.2024</p>
                                    <p className='text-secondary mb-3'>Имя: <span className='text-dark'>Сидоров Сергей Платонович</span></p>
                                    <p className='text-secondary mb-3'>Почта: <span className='text-dark'>FSh@palk.ru</span></p>
                                    <p className='text-secondary'>Услуга: <span className='text-dark'>Аренда помещения</span></p>
                                    <div className='mt-4'>
                                        <Button className='btn-accept-request'>Принять</Button>
                                    </div>
                                </Container>
                            </Container>
                        </Container>



                    </Col>

                </Row>
            </Container>



        </>
    );
}

export default Request_admin;