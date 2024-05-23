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
        <Container fluid className='main-cnt-erequest-service p-0'>
            <Container className='mt-2 d-flex justify-content-center' >
                <p className='border-bottom p-2 border-primary border-opacity-50 main-section-title'>ЗАЯВКИ</p>
            </Container>
            <Row className='mt-3'>
                <Col xs={3} sm={3} md={5} lg={3}><Sidebar /></Col>
                <Col xs={9} sm={9} md={7} lg={9}>
                    <Container className='info_material_user px-5 py-4 d-flex justify-content-around shadow-sm'>
                        <Container>
                            <h5>Оставляйте онлайн-заявки на услуги.</h5>
                            <p className='text-secondary lead description-materials'>Это позволит Вам получить быстрое обслуживание прямо из дома.</p>
                            <Button type="submit" href='/' className="my-2 btn_go_to_service d-flex justify-content-center align-items-center shadow-sm">
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
                    <Container fluid className='my_reguest p-0'>

                        <h5 className='mt-5 mb-4'>Мои заявки</h5>

                        <table className="table table-striped table-bordered m-0 request-table">
                            <thead>
                                <tr className='border-bottom border-secondary border-opacity-50'>
                                    <th scope="col" className='text-secondary size-table-text'>№Заявки</th>
                                    <th scope="col" className='text-secondary size-table-text'>Дата</th>
                                    <th scope="col" className='text-secondary size-table-text'>Услуга</th>
                                    <th scope="col" className='text-secondary size-table-text'>Статус</th>
                                </tr>
                            </thead>
                            <tbody>
                                {requests.map((requestUser) => (
                                    <tr className='border-bottom border-secondary border-opacity-25'>
                                        <td className='size-table-text'>{requestUser.id}</td>
                                        <td className='size-table-text'>{' ' + requestUser["date"].substring(8, 10) + '.' +
                                            requestUser["date"].substring(5, 7) + '.' +
                                            requestUser["date"].substring(0, 4)}</td>
                                        <td className='size-table-text'>{requestUser.serviceName}</td>
                                        {requestUser.status === "STATUS_EXAMINE" ?
                                            <td className='text-primary opacity-75 size-table-text'>На рассмотрении</td> :
                                            requestUser.status === "STATUS_ACCEPTED" ? <td className='text-success opacity-75 size-table-text'>Принято</td> :
                                                <td className='text-danger opacity-75 size-table-text'>Отклонено</td>
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