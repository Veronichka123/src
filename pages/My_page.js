import React from 'react';
import { Container } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/profile.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import none_test from '../components/none_test.png';



function My_page(props) {
    return (
        <Container fluid>
            <Row>
                <Col xs={4}><Sidebar /></Col>
                <Col xs={8}>
                    <Container className='mt-2 d-flex justify-content-center' >
                        <h5 className='border-bottom p-2 border-primary border-opacity-50'>ПРОФИЛЬ</h5>
                    </Container>
                    <Container className='content_for_profile mt-2 px-5 py-4 '>
                        <Container className='bg-white info_user mx-1 px-5 py-4 shadow-sm'>
                            <h5 className='mb-3'>Кукушкина Вероника</h5>
                            <p className='text-secondary lead time_registration'>Зарегистрирован с 01.12.2023</p>

                            <div className='d-flex align-items-center'>
                                <i className='bi bi-envelope-open-fill mr-3'></i>

                                <div className='mx-3'>Email</div>
                                <div className='mx-3'>akh@hbfk.ru</div>

                            </div>
                        </Container>
                        <Container className='bg-white dinamic-tests mx-1  py-4 mt-4 shadow-sm'>
                            <h6 className='mb-3 px-5'>Динамика прохождения тестов</h6>
                            <hr className='hrfor'></hr>
                            <p className='text-secondary lead time_registration px-5 text-center'>Пока нет данных, проходите тесты и они обязательно появятся</p>
                            <img
                                src={none_test}
                                height="80"
                                width="80"
                                className='mx-auto d-block'
                                alt='none_test'
                            />
                        </Container>

                        

                    </Container>


                </Col>

            </Row>
        </Container>


    );
}


export default My_page;