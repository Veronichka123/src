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

    const [show, setShow] = useState(false);
    const [service_name, setServiceName] = useState("");
    const [data, setData] = useState({ id: "", name: "", surname: "", patronymic: "", email: "", phone_number: "" });

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        let serviceId = e.target.dataset.id;
        setData({ ...data, id: serviceId });

        axios
            .get("http://25.43.21.15:8080/service/" + serviceId)
            .then((response) => {
                setServiceName(response.data['name']);
            })
            .catch((error) => {
                console.log(error);
            });
        setShow(true);
    };

    const [services, setServices] = useState([]);

    useEffect(() => {
        axios
            .get("http://25.43.21.15:8080/service/all")
            .then((response) => {
                setServices(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

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
                                            <p className='text-secondary'>{service.description}</p>
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
                            <Form.Control value={data.name} onChange={handleChange} type='text' name="name" placeholder='Имя' className='request-control-input mb-3' />
                        </Form.Group>

                        <Form.Group controlId='fromBasicRequestSurname'>
                            <Form.Control value={data.surname} onChange={handleChange} type='text' name="surname" placeholder='Фамилия' className='request-control-input mb-3' />
                        </Form.Group>

                        <Form.Group controlId='fromBasicRequestSurname'>
                            <Form.Control value={data.patronymic} onChange={handleChange} type='text' name="patronymic" placeholder='Отчество' className='request-control-input mb-3' />
                        </Form.Group>

                        <Form.Group controlId='fromBasicRequestPhoneNumber'>
                            <Form.Control value={data.phone_number} onChange={handleChange} type='text' name="phone_number" placeholder='Номер телефона' className='request-control-input mb-3' />
                        </Form.Group>

                        <Form.Group controlId='fromBasicRequestEmail'>
                            <Form.Control value={data.email} onChange={handleChange} type='Email' name="email" placeholder='Email' className='request-control-input mb-4' />
                        </Form.Group>
                        <p className='text-center opacity-75'>После оставления заявки, с Вами свяжется сотрудник ДОСААФ</p>
                        <Button className="mt-4 mb-3 btn_form_reguest mx-auto d-block">Отправить заявку</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Services;