import React from 'react';
import PageInfo from '../components/PageInfo';
import { useState, useEffect } from 'react';
import test from '../components/test.png';
import { Button, Container } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/testing.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import ProgressBar from 'react-bootstrap/ProgressBar';

function Testing(props) {
    const [InfoTitle, setInfoTitle] = useState("Выполняйте экзаменационные тренировочные тесты");
    const [InfoText, setInfoText] = useState("Это позволит Вам качественно подготовиться к экзамену по приобретению оружия");
    const [InfoBtnText, setInfoBtnText] = useState("Перейти к учебным материалам");
    return (
        <Container className='main-cnt-testing p-0' fluid>
            <Container className='mt-2 d-flex justify-content-center' >
                <p className='border-bottom p-2 border-primary border-opacity-50 main-section-title'>ТРЕНИРОВОЧНЫЕ ТЕСТЫ</p>
            </Container>
            <Row className='mt-3'>
                <Col xs={3} sm={3} md={5} lg={3}><Sidebar /></Col>
                <Col xs={9} sm={9} md={7} lg={9}>
                    <PageInfo text={InfoText} title={InfoTitle} btn_text={InfoBtnText} picture={test} />
                    <Row xs={1} md={1} lg={2} className='mt-4 cols-test-cards'>
                        <Col>
                            <Container fluid className='test-card p-4 mb-4 shadow rounded d-flex flex-column'>
                                <Container fluid className='d-flex p-0 align-items-center'>
                                    <i class="bi bi-card-checklist title-test-cart-icon"></i>
                                    <p className='mb-0 ms-1 title-test-card'>Тест:</p>
                                </Container>
                                <p className='name-test-card mt-3 mb-0'>Владение оружием 1</p>
                                <Container fluid className='d-flex p-0 align-items-center'>
                                    <p className='mastered-titile text-secondary m-0'>Освоено: </p>
                                    <p className='mastered-percent mb-0 ms-1'>56%</p>
                                </Container>
                                <Container fluid className='p-0 mt-4 cnt-progress-bar'>
                                    <ProgressBar now={56} className='test-progress shadow-sm' visuallyHidden />
                                </Container>
                                <Button className='btn-go-to-test mt-4' href='test_passing'>Пройти тест</Button>
                            </Container>
                        </Col>

                        <Col>
                            <Container fluid className='test-card p-4 mb-4 shadow rounded d-flex flex-column'>
                                <Container fluid className='d-flex p-0 align-items-center'>
                                    <i class="bi bi-card-checklist title-test-cart-icon"></i>
                                    <p className='mb-0 ms-1 title-test-card'>Тест:</p>
                                </Container>
                                <p className='name-test-card mt-3 mb-0'>Владение оружием 2</p>
                                <Container fluid className='d-flex p-0 align-items-center'>
                                    <p className='mastered-titile text-secondary m-0'>Освоено: </p>
                                    <p className='mastered-percent mb-0 ms-1'>0%</p>
                                </Container>
                                <Container fluid className='p-0 mt-4 cnt-progress-bar'>
                                    <ProgressBar now={0} className='test-progress shadow-sm' visuallyHidden />
                                </Container>
                                <Button className='btn-go-to-test mt-4'>Пройти тест</Button>
                            </Container>
                        </Col>


                    </Row>



                </Col>

            </Row>
        </Container>

    );
}

export default Testing;