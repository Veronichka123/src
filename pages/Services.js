import React from 'react';
import { Container, Modal } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../styles/Services.css';
import { Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'
import axios from 'axios';


function Services() {

    const [services, setServices] = useState([]);

    useEffect(() => {
        axios
            .get("/service/all")
            .then((response) => {
                setServices(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const [show, setShow] = useState(false);
    const [service_name, setServiceName] = useState("");
    const [serviceId, setServiceId] = useState(-1);

    const [userData, setUserData] = useState({ name: "", surname: "", patronymic: "", email: "" });
    const [phoneNumber, setPhoneNumber] = useState("");


    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    };

    const handleChangePhoneNumber = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleClose = () => {
        setServiceId(-1);
        setShow(false);
    }

    useEffect(() => {
        if (serviceId === -1) return;

        axios
            .get("/service/" + serviceId)
            .then((response) => {
                setServiceName(response.data['name']);
                setServiceId(response.data['id']);
            })
            .catch((error) => {
                console.log(error);
            });

        if (localStorage.getItem("token")) {
            axios
                .get("/user",
                    {
                        headers: {
                            Authorization: 'Bearer ' + localStorage.getItem("token")
                        }
                    })
                .then((response) => {
                    setUserData(response.data);
                })
                .catch((error) => {
                    localStorage.removeItem("token");
                    console.log(error);
                });
        }

        setShow(true);
    }, [serviceId]);

    const handleShow = (e) => {
        setServiceId(e.target.dataset.id);
    };

    const handleSendRequest = (e) => {
        if (phoneNumber === "" || userData.email === "" || userData.name === "" || userData.surname === "") {
            console.log("поля не заполнены");
            return;
        }
        axios
            .post("/request?serviceId=" + serviceId,
                {
                    "userName": userData.name,
                    "userSurname": userData.surname,
                    "userPatronymic": userData.patronymic,
                    "userEmail": userData.email,
                    "userPhoneNumber": phoneNumber
                },
                {
                    headers: {
                        Authorization: localStorage.getItem("token") ? 'Bearer ' + localStorage.getItem("token") : ''
                    }
                })
            .then((response) => {
                setUserData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        setShow(false);
        setPhoneNumber("");
    }

    return (
        <>
            <Container fluid className='p-0 main-service-cnt'>
                <Container className='mt-2 d-flex justify-content-center' >
                    <h5 className='border-bottom p-2 border-primary border-opacity-50'>УСЛУГИ ДОСААФ КОСТРОМА</h5>
                </Container>
                {services.map((serviceSection) => (serviceSection.services && serviceSection.services.length > 0 ?
                    <Container className='mt-5 p-0' fluid>
                        <Container className='d-flex justify-content-start p-0' fluid>
                            <p className='border-bottom px-1 border-secondary border-opacity-50 border-1 section-title'>{serviceSection.name}</p>
                        </Container>
                        <Container fluid>
                            <Row xs={1} md={2} lg={3}>
                                {serviceSection['services'].map((service) => (
                                    <Col className='pe-4 ps-0'>
                                        <Container className='py-4 px-4 mt-4 center-block service-cards d-flex flex-column shadow'>
                                            <p className='mb-4 service-title fw-bold'>{service.name}</p>
                                            <Container className='service-description mb-1 p-0'><p className='text-secondary' style={{ whiteSpace: "pre-line" }}>{service.description}</p></Container>
                                            <div className='border-price px-2 py-3 mb-4 border border-secondary border-opacity-50'>
                                                <div className='d-flex flex-row py-auto'>
                                                    
                                                    <div className='ms-3'>
                                                        <p className='mb-2 stoimost fw-light my-auto'>Стоимость : </p>
                                                        <p className='price-value fw-bold my-auto'>{service.cost} ₽</p>
                                                    </div>

                                                    <i className='bi bi-wallet2 wallet px-2 py-1 me-3 shadow-sm my-auto mx-auto'></i>

                                                </div>

                                            </div>
                                            <Button type="submit" data-id={service.id} className="btn-service mt-auto"
                                                onClick={handleShow}>Подать заявку</Button>
                                        </Container>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </Container>
                    : ''
                ))}
            </Container>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Форма заполнения заявки</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='px-4'>
                        <p className='text-secondary'>Подача заявки на услугу</p>
                        <h5 className='mb-4'>{service_name}</h5>
                        <Form.Group controlId='fromBasicRequestName'>
                            <Form.Control value={userData.name} onChange={handleChange} type='text' name="name" placeholder='Имя' className='request-control-input mb-3' />
                        </Form.Group>

                        <Form.Group controlId='fromBasicRequestSurname'>
                            <Form.Control value={userData.surname} onChange={handleChange} type='text' name="surname" placeholder='Фамилия' className='request-control-input mb-3' />
                        </Form.Group>

                        <Form.Group controlId='fromBasicRequestSurname'>
                            <Form.Control value={userData.patronymic} onChange={handleChange} type='text' name="patronymic" placeholder='Отчество' className='request-control-input mb-3' />
                        </Form.Group>

                        <Form.Group controlId='fromBasicRequestPhoneNumber'>
                            <Form.Control value={phoneNumber} onChange={handleChangePhoneNumber} type='text' name="phoneNumber" placeholder='Номер телефона' className='request-control-input mb-3' />
                        </Form.Group>

                        <Form.Group controlId='fromBasicRequestEmail'>
                            <Form.Control value={userData.email} disabled={userData.email !== "" && userData.id} onChange={userData.email !== "" && userData.id ? '' : handleChange} type='Email' name="email" placeholder='Email' className='request-control-input mb-4' />
                        </Form.Group>
                        <p className='text-center opacity-75'>После оставления заявки, с Вами свяжется сотрудник ДОСААФ</p>
                        <Button className="mt-4 mb-3 btn_form_reguest mx-auto d-block" onClick={handleSendRequest}>Отправить заявку</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Services;