import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { Button, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/request_admin.css';
import axios from 'axios';

function Request_admin(props) {
    const [showtab, SetShowtab] = useState(1);
    const handletab = (e) => {
        SetShowtab(e);
    }

    const [allRequests, SetRequests] = useState(null);

    useEffect(() => {
        axios
            .get("/request/all")
            .then((response) => {
                SetRequests(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleAcceptRequest = (event) => {
        axios
            .put("/request/accept/" + event.target.dataset.request)
            .then((response) => {
                const acceptedRequest = response.data;

                const indexRequest = allRequests.examine.findIndex(request => request.id == acceptedRequest.id); //Ищем нужную заявку

                if (indexRequest === -1) return;

                const item = allRequests;

                const updatedRequests = {
                    ...item,
                    examine: item.examine.filter(request => request.id != acceptedRequest.id)
                };

                updatedRequests.accepted.push(acceptedRequest);

                SetRequests(updatedRequests);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const handleRejectRequest = (event) => {
        axios
            .put("/request/reject/" + event.target.dataset.request)
            .then((response) => {
                const rejectedRequest = response.data;

                const indexRequest = allRequests.examine.findIndex(request => request.id == rejectedRequest.id); //Ищем нужную заявку

                if (indexRequest === -1) return;

                const item = allRequests;

                const updatedRequests = {
                    ...item,
                    examine: item.examine.filter(request => request.id != rejectedRequest.id)
                };

                updatedRequests.rejected.push(rejectedRequest);

                SetRequests(updatedRequests);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const handleAcceptRejectedRequest = (event) => {
        axios
            .put("/request/accept/" + event.target.dataset.request)
            .then((response) => {
                const acceptedRequest = response.data;

                const indexRequest = allRequests.rejected.findIndex(request => request.id == acceptedRequest.id); //Ищем нужную заявку

                if (indexRequest === -1) return;

                const item = allRequests;

                const updatedRequests = {
                    ...item,
                    rejected: item.rejected.filter(request => request.id != acceptedRequest.id)
                };

                updatedRequests.accepted.push(acceptedRequest);

                SetRequests(updatedRequests);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const handleRejectAcceptedRequest = (event) => {
        axios
            .put("/request/reject/" + event.target.dataset.request)
            .then((response) => {
                const rejectedRequest = response.data;

                const indexRequest = allRequests.accepted.findIndex(request => request.id == rejectedRequest.id); //Ищем нужную заявку

                if (indexRequest === -1) return;

                const item = allRequests;

                const updatedRequests = {
                    ...item,
                    accepted: item.accepted.filter(request => request.id != rejectedRequest.id)
                };

                updatedRequests.rejected.push(rejectedRequest);

                SetRequests(updatedRequests);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <Container fluid className='main-cnt-request-admin p-0'>
                <p className='text-center mt-2 main-section-title mb-1'>ПАНЕЛЬ АДМИНИСТРАТОРА</p>
                <Container className='d-flex justify-content-center' fluid>
                    <p className='text-secondary border-bottom border-primary border-opacity-50 text-center title-subsection'>Управление заявками</p>
                </Container>
                <Row className='mt-3'>
                    <Col xs={3} sm={3} md={5} lg={3}><Sidebar /></Col>
                    <Col xs={9} sm={9} md={7} lg={9}>
                        <Container fluid className='d-flex justify-content-center p-0'>
                            <Button className={showtab === 1 ? 'btn-new-requests active' : 'btn-new-requests'} onClick={() => handletab(1)}>Новые заявки</Button>
                            <Button className={showtab === 2 ? 'btn-accepted-requests active' : 'btn-accepted-requests'} onClick={() => handletab(2)}>Принятые заявки</Button>
                            <Button className={showtab === 3 ? 'btn-rejected-requests active' : 'btn-rejected-requests'} onClick={() => handletab(3)}>Отклоненные заявки</Button>
                        </Container>

                        {allRequests ?
                            <Container fluid className='tab-content text-dark' id='pills-tabContent p-0'>
                                <Container fluid className={showtab === 1 ? 'tab-pane fade show active' : "tab-pane fade show"}>
                                    {allRequests.examine.length != 0 ? allRequests.examine.map((request) => (
                                        <Container fluid className='cont-new-requests px-5 py-3 mt-4 shadow rounded'>
                                            <p className='text-secondary mb-4'>Заявка № {request.id} от
                                                {request.date ?
                                                    ' ' + request.date.substring(8, 10) + '.' +
                                                    request.date.substring(5, 7) + '.' +
                                                    request.date.substring(0, 4) :
                                                    ""}</p>
                                            <p className='text-secondary mb-3'>Имя: <span className='text-dark'>{request.userSurname + " " + request.userName + " " + request.userPatronymic}</span></p>
                                            <p className='text-secondary mb-3'>Почта: <span className='text-dark'>{request.userEmail}</span></p>
                                            <p className='text-secondary'>Услуга: <span className='text-dark'>{request.serviceName}</span></p>
                                            <div className='d-flex justify-content-start mt-4'>
                                                <Button className='btn-accept-request' data-request={request.id} onClick={handleAcceptRequest}>Принять</Button>
                                                <Button className='btn-reject-request ms-5' data-request={request.id} onClick={handleRejectRequest}>Отклонить</Button>
                                            </div>
                                        </Container>
                                    )) : "Заявок на рассмотрении нет"}
                                </Container>


                                <Container fluid className={showtab === 2 ? 'tab-pane fade show active' : "tab-pane fade"}>
                                    {allRequests.accepted.length != 0 ? allRequests.accepted.map((request) => (
                                        <Container fluid className='cont-accept-requests px-5 py-3 mt-4 shadow rounded'>
                                            <p className='text-secondary mb-4'>Заявка № {request.id} от
                                                {request.date ?
                                                    ' ' + request.date.substring(8, 10) + '.' +
                                                    request.date.substring(5, 7) + '.' +
                                                    request.date.substring(0, 4) :
                                                    ""}</p>
                                            <p className='text-secondary mb-3'>Имя: <span className='text-dark'>{request.userSurname + " " + request.userName + " " + request.userPatronymic}</span></p>
                                            <p className='text-secondary mb-3'>Почта: <span className='text-dark'>{request.userEmail}</span></p>
                                            <p className='text-secondary'>Услуга: <span className='text-dark'>{request.serviceName}</span></p>
                                            <div className='mt-4'>
                                                <Button className='btn-reject-request' data-request={request.id} onClick={handleRejectAcceptedRequest}>Отклонить</Button>
                                            </div>
                                        </Container>
                                    )) : "Принятых заявок нет"}

                                </Container>

                                <Container fluid className={showtab === 3 ? 'tab-pane fade show active' : "tab-pane fade"}>
                                    {allRequests.rejected.length != 0 ? allRequests.rejected.map((request) => (
                                        <Container fluid className='cont-reject-requests px-5 py-3 mt-4 shadow rounded'>
                                            <p className='text-secondary mb-4'>Заявка № {request.id} от
                                                {request.date ?
                                                    ' ' + request.date.substring(8, 10) + '.' +
                                                    request.date.substring(5, 7) + '.' +
                                                    request.date.substring(0, 4) :
                                                    ""}</p>
                                            <p className='text-secondary mb-3'>Имя: <span className='text-dark'>{request.userSurname + " " + request.userName + " " + request.userPatronymic}</span></p>
                                            <p className='text-secondary mb-3'>Почта: <span className='text-dark'>{request.userEmail}</span></p>
                                            <p className='text-secondary'>Услуга: <span className='text-dark'>{request.serviceName}</span></p>
                                            <div className='mt-4'>
                                                <Button className='btn-accept-request' data-request={request.id} onClick={handleAcceptRejectedRequest}>Принять</Button>
                                            </div>
                                        </Container>
                                    )) : "Отклоненных заявок нет"}
                                </Container>
                            </Container>
                            : ""
                        }
                    </Col>

                </Row>
            </Container>



        </>
    );
}

export default Request_admin;