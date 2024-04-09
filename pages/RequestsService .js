import React from 'react';
import { Container } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/request.css';
import reguest_icon from '../components/reguest.png';
import Button from 'react-bootstrap/Button';


function requests(props) {
    return (
        <Container fluid>
            <Row>
                <Col xs={4}><Sidebar /></Col>
                <Col xs={8}>
                    <Container className='mt-2 d-flex justify-content-center' >
                        <h5 className='border-bottom p-2 border-primary border-opacity-50'>ЗАЯВКИ</h5>
                    </Container>

                    <Container className='info_reguest_user mt-2 px-5 py-4 d-flex justify-content-around'>
                        <Container>
                            <h5>Оставляйте онлайн-заявки на услуги.</h5>
                            <p className='text-secondary lead description-reguest'>Это позволит Вам получить быстрое обслуживание прямо из дома</p>
                            <Button type="submit" href='/' className="my-2 btn_reguest d-flex justify-content-center align-items-center">
                                Перейти к услугам
                            </Button>
                        </Container>
                        <img
                            src={reguest_icon}
                            height="80"
                            width="80"
                            className='m-3'
                            alt='Logo'
                        />
                    </Container>
                    <Container className='my_reguest'>

                        <h5 className='mt-5 mb-4'>Мои заявки</h5>

                        <table class="table">
                            <thead>
                                <tr className='border-bottom border-primary border-opacity-25'>
                                    <th scope="col" className='text-secondary'>№ Заявки</th>
                                    <th scope="col" className='text-secondary'>Дата</th>
                                    <th scope="col" className='text-secondary'>Услуга</th>
                                    <th scope="col" className='text-secondary'>Статус</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='border-bottom border-primary border-opacity-25'>
                                    <td>6822345</td>
                                    <td>12.01.2024</td>
                                    <td >Сдать на права категория “B“</td>
                                    <td className='text-success opacity-75'>Принято</td>
                                </tr>
                                <tr className='border-bottom border-primary border-opacity-25'>
                                    <td>5673989</td>
                                    <td>22.01.2024</td>
                                    <td>Пострелять в тире (1 раз)</td>
                                    <td className='text-danger opacity-75'>Отклонено</td>
                                </tr>
                                <tr className='border-bottom border-primary border-opacity-25'>
                                    <td>9876304</td>
                                    <td>28.02.2024</td>
                                    <td>Пострелять в тире (1 раз)</td>
                                    <td className='text-primary opacity-75'>На рассмотрении</td>
                                </tr>
                                <tr className='border-bottom border-primary border-opacity-25'>
                                    <td>4587698</td>
                                    <td>28.02.2024</td>
                                    <td>Лицензия на приобретение оружия</td>
                                    <td className='text-primary opacity-75'>На рассмотрении</td>
                                </tr>
                            </tbody>
                        </table>


                    </Container>






                </Col>

            </Row>
        </Container>
    );
}

export default requests;