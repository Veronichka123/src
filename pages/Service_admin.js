import React, { useState, useEffect, useRef } from 'react';
import { Button, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../components/Sidebar';
import '../styles/service_admin.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import axios from 'axios';

function Service_admin(props) {

    const HOST = '26.252.162.70:8080';

    const [ShowEditChapter, SetShowEdChapter] = useState(false);
    const [ShowCreateChapter, SetShowCrChapter] = useState(false);
    const [ShowCreateService, SetShowCrService] = useState(false);
    const [ShowEditService, SetShowEdService] = useState(false);
    const [ShowDeeteServiceChapter, SetShowDelServiceChapter] = useState(false);
    const [ShowDeeteService, SetShowDelService] = useState(false);

    const [serviceSectionId, setServiceSectionId] = useState(-1); //для получения индекса раздела
    const [deleteServiceSectionId, setDeleteServiceSectionId] = useState(-1); //для получения индекса раздела
    const [serviceId, setServiceId] = useState(-1); //для получения индекса услуги


    const [dataServiceSection, setDataServiceSection] = useState({ name: "" }); //для добавления раздела
    const [dataService, setDataService] = useState({ name: "", description: "", cost: 0 }); //для добавления услуги

    const [serviceName, setServiceName] = useState(""); //для вывода названия услуги в модальном окне 
    const [serviceSectionName, setServiceSectionName] = useState(""); //для вывода названия раздела в модальном окне 


    const [serviceSections, setServiceSections] = useState([]); //для вывода всех разделов на страницу

    //запрос всех разделов с услугами
    useEffect(() => {
        axios
            .get("http://" + HOST + "/service/all")  //получаем все данные услуг
            .then((response) => {
                setServiceSections(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    //Создание услуги
    const addService = () => {
        axios
            .post("http://" + HOST + "/service?serviceSectionId=" + serviceSectionId, dataService) //отправляем id раздела, данные об услуге
            .then((response) => {
                const serviceResponse = response.data; //получаем услугу
                const index = serviceSections.findIndex(item => item.id === serviceResponse['sectionId']); //Ищем нужный раздел

                if (index === -1) return; //если такой раздел не найден, ничего не происходит

                const item = serviceSections[index]; //Получаем найденный раздел по индексу 
                const servicesUpdated = [...item.services]; //Копируем услуги с раздела
                servicesUpdated.push(serviceResponse); //записываем услугу в данные с разделом

                const updatedService = { //Обновляем услуги у раздела
                    ...item,
                    services: servicesUpdated //Услугам присваиваем новый массив с услугами
                };

                const updatedServices = [...serviceSections]; //Копируем все разделы

                updatedServices[index] = updatedService; //По индексу меняем прошлый раздел на обновленный

                setServiceSections(updatedServices); //Устанавливаем разделы вместе с обновленным

                SetShowCrService(false);
            })
            .catch((error) => {
                console.log(error);
            });

    };

    //Изменение полей в модальном окне добавления раздела
    const handleChangeServiceSectionAdd = (event) => {
        setDataServiceSection({ ...dataServiceSection, [event.target.name]: event.target.value });
    };

    //Создание раздела
    const addServiceSection = (e) => {
        axios
            .post("http://" + HOST + "/service/section", dataServiceSection)
            .then((response) => {
                setServiceSections(prevServices => [...prevServices, response.data])
                SetShowCrChapter(false);
            })
            .catch((error) => {
                console.log(error);
            });

    };

    const handleShowModalAddService = (event) => {
        setServiceSectionId(event.target.dataset.section);
        SetShowCrService(true);
    }

    //Изменение полей в модальном окне добавления услуги
    const handleChangeServiceAdd = (event) => {
        setDataService({ ...dataService, [event.target.name]: event.target.value });

    };

    const deleteService = (e) => {
        setServiceId(e.target.dataset.service);
    }

    useEffect(() => {
        if (serviceId === -1) return;

        axios
            .get("http://" + HOST + "/service/" + serviceId)
            .then((response) => {
                setServiceName(response.data['name']);
                SetShowDelService(true);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [serviceId]);

    const handleDeleteService = (event) => {
        axios
            .delete("http://" + HOST + "/service/" + serviceId)
            .then((response) => {
                const deletedServiceId = response.data;

                const indexServiceSection = serviceSections.findIndex(section =>
                    section.services.findIndex(service => service.id == deletedServiceId) != -1); //Ищем нужный раздел

                if (indexServiceSection === -1) return; //если такой раздел не найден, ничего не происходит

                const item = serviceSections[indexServiceSection]; //Получаем найденный раздел по индексу 

                const updatedService = { //Обновляем услуги у раздела
                    ...item,
                    services: item.services.filter(service => service.id != deletedServiceId) //удаляем услугу разделе 
                };

                const updatedServices = [...serviceSections]; //Копируем все разделы

                updatedServices[indexServiceSection] = updatedService; //По индексу меняем прошлый раздел на обновленный

                setServiceSections(updatedServices); //Устанавливаем разделы вместе с обновленным

                SetShowDelService(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const handleDeleteChapter = (event) => {
        axios
        .delete("http://" + HOST + "/service/section/" + deleteServiceSectionId)
        .then((response) => {
            const deletedServiceSectionId = response.data;

            const updatedServiceSections = serviceSections.filter(section => section.id != deletedServiceSectionId)

            setServiceSections(updatedServiceSections); //Устанавливаем разделы вместе с обновленным

            SetShowDelServiceChapter(false);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const deleteServiceSection = (e) => {
        setDeleteServiceSectionId(e.target.dataset.section);
        SetShowDelServiceChapter(true);
    }

    useEffect(() => {
        if (deleteServiceSectionId === -1) return;

        axios
            .get("http://" + HOST + "/service/section/" + deleteServiceSectionId)
            .then((response) => {
                setServiceSectionName(response.data['name']);
                SetShowDelServiceChapter(true);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [deleteServiceSectionId]);

    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs={4}><Sidebar /></Col>
                    <Col xs={8}>

                        <h5 className='text-center mt-2'>ПАНЕЛЬ АДМИНИСТРАТОРА</h5>
                        <Container className='d-flex justify-content-center' fluid>
                            <p className='text-secondary border-bottom border-primary border-opacity-50 text-center'>Управление услугами</p>
                        </Container>

                        <Container className='d-flex mt-3' fluid>
                            <h5 className='d-flex align-items-center'>Желаете добавить раздел услуг?</h5>
                            <Button className='ms-4 btn-admin-service' onClick={() => SetShowCrChapter(true)}>Добавить</Button>
                        </Container>
                        {serviceSections.map((serviceSection) => (
                            <Container className='mt-5 chapter-services p-4' fluid>
                                <div className='d-flex justify-content-start' fluid>

                                    <p className='d-flex align-items-center border-bottom border-3 title-chapter'>{serviceSection.name}</p>

                                    <Button className='btn-admin-chapter-edit ms-5' onClick={() => SetShowEdChapter(true)}>Редактровать раздел</Button>
                                    <Button className='btn-admin-chapter-delete ms-2' onClick={deleteServiceSection} data-section={serviceSection.id}>Удалить раздел</Button>
                                </div>
                                <p>Услуги</p>
                                <Row xs={1} md={2}>
                                    {serviceSection.services && serviceSection.services.length > 0 ? serviceSection.services.map((service) => (
                                        <Col>
                                            <Container className='admin-card-service p-4 mb-4'>
                                                <p><span className="fw-bold">Наименование: </span>{service.name}</p>
                                                <p><span className="fw-bold">Стоимость: </span>{service.cost} рублей.</p>
                                                <Container className='d-flex justify-content-around'>
                                                    <Button className='btn-admin-service-edit'>Изменить</Button>
                                                    <Button className='btn-admin-service-delete' data-service={service.id} onClick={deleteService}>Удалить</Button>
                                                </Container>
                                            </Container>
                                        </Col>
                                    )) : <p>Услуг еще не создано</p>}
                                </Row>
                                <Container className='d-flex justify-content-start' fluid>
                                    <Button className='btn-plus-service fw-light d-flex justify-content-center align-items-center' data-section={serviceSection.id} onClick={handleShowModalAddService}><i className='bi bi-plus'></i></Button>
                                    <p className='text-secondary ms-3 d-block mt-auto'>Добавить услугу в раздел</p>
                                </Container>
                            </Container>
                        ))}
                    </Col>
                </Row>
            </Container>
            <Modal
                show={ShowCreateChapter}
                onHide={() => SetShowCrChapter(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Добавить раздел
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='py-4'>
                        <Form.Group controlId='NameChapter'>
                            <Form.Control type='text' placeholder='Введите наименование раздела' name="name" onChange={handleChangeServiceSectionAdd} className='chapter-service-control-input mb-3' />
                        </Form.Group>
                        <Button className="mt-3 mb-2 btn_form_chapter-service" onClick={addServiceSection}>Сохранить</Button>
                    </Form>
                </Modal.Body>
            </Modal>


            <Modal
                show={ShowEditChapter}
                onHide={() => SetShowEdChapter(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Редактровать раздел
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='py-4'>
                        <Form.Group controlId='NameChapter'>
                            <Form.Control type='text' className='chapter-service-control-input mb-3' value='Получить лицензию на оружие' />
                        </Form.Group>
                        <Button className="mt-3 mb-2 btn_form_chapter-service ">Сохранить</Button>
                    </Form>
                </Modal.Body>
            </Modal>

            <Modal
                show={ShowCreateService}
                onHide={() => SetShowCrService(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Добавить услугу
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='py-4'>
                        <Form.Group controlId='NameChapter'>
                            <Form.Control type='text' placeholder='Введите наименование услуги' name="name" onChange={handleChangeServiceAdd} className='chapter-service-control-input mb-3' />
                        </Form.Group>
                        <Form.Group controlId='NameChapter'>
                            <Form.Control type='text' placeholder='Введите стоимость услуги (в рублях)' name="cost" onChange={handleChangeServiceAdd} className='chapter-service-control-input mb-3' />
                        </Form.Group>
                        <Form.Group controlId='NameChapter'>
                            <Form.Control as="textarea" placeholder='Введите описание услуги' style={{whiteSpace: "pre-line"}} name="description" onChange={handleChangeServiceAdd} className='chapter-service-description-input mb-3' />
                        </Form.Group>
                        <Button className="mt-3 mb-2 btn_form_chapter-service" onClick={addService}>Сохранить</Button>
                    </Form>
                </Modal.Body>
            </Modal>

            <Modal
                show={ShowEditService}
                onHide={() => SetShowEdService(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Изменить услугу
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='py-4'>
                        <Form.Group controlId='NameChapter'>
                            <Form.Control type='text' value='Лицензия на приобретение оружия' className='chapter-service-control-input mb-3' />
                        </Form.Group>
                        <Form.Group controlId='NameChapter'>
                            <Form.Control type='text' value='99' className='chapter-service-control-input mb-3' />
                        </Form.Group>
                        <Form.Group controlId='NameChapter'>
                            <Form.Control as="textarea" value='Сдавайте экзамен и приобретайте оружие' className='chapter-service-description-input mb-3' />
                        </Form.Group>
                        <Button className="mt-3 mb-2 btn_form_chapter-service ">Сохранить</Button>
                    </Form>
                </Modal.Body>
            </Modal>


            <Modal
                show={ShowDeeteServiceChapter}
                onHide={() => SetShowDelServiceChapter(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Удаление
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5 className='fw-light'>Вы действительно хотите удалить раздел <span className="fw-bold">{serviceSectionName}</span> со всеми услугами в нем?</h5>
                    <Button className="mt-3 mb-2 btn_delete_chapter-service " onClick={handleDeleteChapter}>Удалить</Button>
                </Modal.Body>
            </Modal>

            <Modal
                show={ShowDeeteService}
                onHide={() => { SetShowDelService(false); setServiceId(-1); }}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Удаление
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5 className='fw-light'>Вы действительно хотите удалить услугу <span className="fw-bold">{serviceName}</span> с полной потерей данных?</h5>
                    <Button className="mt-3 mb-2 btn_delete_chapter-service " onClick={handleDeleteService}>Удалить</Button>
                </Modal.Body>
            </Modal>

        </>


    );
}

export default Service_admin;