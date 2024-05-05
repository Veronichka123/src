import React from 'react';
import { Container, Modal } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../styles/Services.css';
import { Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';


function Services() {

    const HOST = '26.252.162.70:8080';

    const [services, setServices] = useState([]);

    useEffect(() => {
        axios
            .get("http://" + HOST + "/service/all")
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

    useEffect(() =>{
        if (serviceId === -1) return;

        axios
            .get("http://" + HOST + "/service/" + serviceId)
            .then((response) => {
                setServiceName(response.data['name']);
                setServiceId(response.data['id']);
            })
            .catch((error) => {
                console.log(error);
            });

        if(localStorage.getItem("token")){
            axios
                .get("http://" + HOST + "/user",
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
        axios
        .post("http://" + HOST + "/request?serviceId=" + serviceId,
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
            <Container fluid>
                <Container className='mt-2 d-flex justify-content-center' >
                    <h5 className='border-bottom p-2 border-primary border-opacity-50'>УСЛУГИ ДОСААФ КОСТРОМА</h5>
                </Container>
                {services.map((serviceSection) => (serviceSection.services && serviceSection.services.length > 0 ?
                    <Container className='mt-5' fluid>
                        <Container className='d-flex justify-content-start' fluid>
                            <h5 className='border-bottom p-1 border-secondary border-opacity-50 border-1'>{serviceSection.name}</h5>
                        </Container>
                        <Container fluid>
                            <Row xs={1} md={3}>
                                {serviceSection['services'].map((service) => (
                                    <Col>
                                        <Container className='py-4 px-4 mt-4 center-block service-cards'>
                                            <h6 className='mb-4'>{service.name}</h6>
                                            <p className='text-secondary' style={{whiteSpace: "pre-line"}}>{service.description}</p>
                                            <div className='border border-secondary mb-4 border-price border-2 border-opacity-50 px-2 py-3'>
                                                <h6 className='mb-3'>Стоимость:</h6>
                                                <h5>{service.cost} рублей</h5>
                                            </div>
                                            <Button type="submit" data-id={service.id} className="btn-service"
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