import React from 'react';
import { Container } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/testing.css';
import test_icon from '../components/test.png';
import Button from 'react-bootstrap/Button';


function requests(props) {
    return (
        <Container fluid>
            <Row>
                <Col xs={4}><Sidebar /></Col>
                <Col xs={8}>
                    <Container className='mt-2 d-flex justify-content-center' >
                        <h5 className='border-bottom p-2 border-primary border-opacity-50'>ТЕСТИРОВАНИЕ</h5>
                    </Container>

                    <Container className='info_reguest_testing mt-2 px-5 py-3 d-flex justify-content-around'>
                        <Container>
                            <h5>Выполняйте тренировочные экзаменационные тесты</h5>
                            <p className='text-secondary lead description-test'>Это позволит Вам более качетвенно подготовиться к экзамену по приобретению оружия.</p>
                        </Container>
                        <img
                            src={test_icon}
                            height="80"
                            width="80"
                            className='m-2'
                            alt='Logo'
                        />
                    </Container>
                    <Container className='my-testing{'>
                        <Row>
                            <Col>
                                <Container className='p-4 center-block text-center my-3 test-card'>
                                    <h5>Тест по владению оружием 1</h5>
                                    <p className='test-status mt-4'>Пройдено</p>
                                    <p className='fw-bold text-secondary tets-percent mt-4'>0%</p>
                                    <Button type="submit" href='/' className="my-2 d-flex justify-content-center align-items-center btn-test-not-done mx-auto d-block">Пройти</Button>
                                </Container>
                            </Col>
                            <Col>
                                <Container className='p-4 center-block text-center my-3 test-card'>
                                    <h5>Тест по владению оружием 2</h5>
                                    <p className='test-status mt-4'>Пройдено</p>
                                    <p className='fw-bold text-secondary tets-percent mt-4'>100%</p>
                                    <Button type="submit" href='/' className="my-2 d-flex justify-content-center align-items-center btn-test-done mx-auto d-block">Пройти</Button>
                                </Container>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Container className='p-4 center-block text-center my-3 test-card'>
                                    <h5>Тест по владению оружием 3</h5>
                                    <p className='test-status mt-4'>Пройдено</p>
                                    <p className='fw-bold text-secondary tets-percent mt-4'>0%</p>
                                    <Button type="submit" href='/' className="my-2 d-flex justify-content-center align-items-center btn-test-not-done mx-auto d-block">Пройти</Button>
                                </Container>
                            </Col>
                            <Col>
                                <Container className='p-4 center-block text-center my-3 test-card'>
                                    <h5>Тест по владению оружием 4</h5>
                                    <p className='test-status mt-4'>Пройдено</p>
                                    <p className='fw-bold text-secondary tets-percent mt-4'>60%</p>
                                    <Button type="submit" href='/' className="d-flex justify-content-center align-items-center btn-test-done mx-auto d-block">Пройти</Button>
                                </Container>
                            </Col>
                        </Row>






                    </Container>






                </Col>

            </Row>
        </Container>
    );
}

export default requests;