import React from 'react';
import { Container } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/request.css';
import reguest_icon from '../components/reguest.png';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import axios from 'axios';


function RequestsService(props) {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        axios
            .get("/request/user",
                {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token")
                    }
                })
            .then((response) => {
                setRequests(response.data);
            })
            .catch((error) => {
                console.log(error);
                localStorage.removeItem("token");
            });
    }, [])

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

                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr className='border-bottom border-secondary border-opacity-50'>
                                    <th scope="col" className='text-secondary'>№ Заявки</th>
                                    <th scope="col" className='text-secondary'>Дата</th>
                                    <th scope="col" className='text-secondary'>Услуга</th>
                                    <th scope="col" className='text-secondary'>Статус</th>
                                </tr>
                            </thead>
                            <tbody>
                                {requests.map((requestUser) => (
                                    <tr className='border-bottom border-secondary border-opacity-25'>
                                        <td>{requestUser.id}</td>
                                        <td>{' ' + requestUser["date"].substring(8, 10) + '.' +
                                            requestUser["date"].substring(5, 7) + '.' +
                                            requestUser["date"].substring(0, 4)}</td>
                                        <td >{requestUser.serviceName}</td>
                                        {requestUser.status === "STATUS_EXAMINE" ?
                                            <td className='text-primary opacity-75'>На рассмотрении</td> :
                                            requestUser.status === "STATUS_ACCEPTED" ? <td className='text-success opacity-75'>Принято</td> :
                                                <td className='text-danger opacity-75'>Отклонено</td>
                                        }
                                    </tr>
                                ))}
                            </tbody>
                        </table>


                    </Container>






                </Col>

            </Row>
        </Container>
    );
}

export default RequestsService;