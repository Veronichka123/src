import React from 'react';
import '../styles/partners_admin.css';
import { Button, Container } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'

function Partners_admin(props) {
    const [ShowCreatePartner, SetShowCrPartner] = useState(false);
    const [ImagePartner, setImagePartner] = useState(null);
    const [FileNamePartner, setFileNamePartner] = useState("Выберите картинку")
    return (
        <>
            <Container fluid className='main-cnt-partners-admin p-0'>
                <Row>
                    <Col xs={3} className=''><Sidebar /></Col>
                    <Col xs={9}>
                        <h5 className='text-center mt-2'>ПАНЕЛЬ АДМИНИСТРАТОРА</h5>
                        <Container className='d-flex justify-content-center' fluid>
                            <p className='text-secondary border-bottom border-primary border-opacity-50 text-center'>Управление партнерами</p>
                        </Container>

                        <Container className='d-flex mt-3 p-0 mb-3' fluid>
                            <p className='d-flex align-items-center m-0 title-add-partner'>Желаете добавить партнера?</p>
                            <Button className='ms-4 btn-admin-partner' onClick={() => SetShowCrPartner(true)}>Добавить</Button>
                        </Container>
                        <Row xs={1} md={2} lg={2} className=''>
                            <Col>
                                <Container fluid className='partner-card p-4 shadow-sm rounded mt-4'>
                                    <p className='m-0 titles-partner-card'>Наименование партнера:</p>
                                    <p className='m-0 name-partner-card fw-bold'>Товарищество мышиных какишей</p>
                                    <p className='m-0 titles-partner-card mt-2'>Логотип партнера:</p>
                                    <Container fluid className='cnt-photo-partner border border-2 p-1 ms-0 mt-2'>
                                        <Image
                                            src='https://masterpiecer-images.s3.yandex.net/9dc518da8fa911eeb15f2aa0df1cd6e5:upscaled'
                                            height="100%"
                                            width='100%'
                                            className='mx-auto my-auto d-block photo-partner p-1'
                                            alt='Logo'
                                        />
                                    </Container>
                                    <Container className='d-flex justify-content-between p-0 mt-3 mb-1'>
                                        <Button className='btn-edit-partner shadow-sm' >Изменить</Button>
                                        <Button className='btn-delete-partner shadow-sm'>Удалить</Button>
                                    </Container>
                                </Container>
                            </Col>
                            <Col>
                                <Container fluid className='partner-card p-4 shadow-sm rounded mt-4'>
                                    <p className='m-0 titles-partner-card'>Наименование партнера:</p>
                                    <p className='m-0 name-partner-card fw-bold'>Товарищество мышиных какишей</p>
                                    <p className='m-0 titles-partner-card mt-2'>Логотип партнера:</p>
                                    <Container fluid className='cnt-photo-partner border border-2 p-1 ms-0 mt-2'>
                                        <Image
                                            src='https://masterpiecer-images.s3.yandex.net/9dc518da8fa911eeb15f2aa0df1cd6e5:upscaled'
                                            height="100%"
                                            width='100%'
                                            className='mx-auto my-auto d-block photo-admin-partner p-1'
                                            alt='Logo'
                                        />
                                    </Container>
                                    <Container className='d-flex justify-content-between p-0 mt-3 mb-1'>
                                        <Button className='btn-edit-partner shadow-sm'>Изменить</Button>
                                        <Button className='btn-delete-partner shadow-sm'>Удалить</Button>
                                    </Container>
                                </Container>
                            </Col>
                            <Col>
                                <Container fluid className='partner-card p-4 shadow-sm rounded mt-4'>
                                    <p className='m-0 titles-partner-card'>Наименование партнера:</p>
                                    <p className='m-0 name-partner-card fw-bold'>Товарищество мышиных какишей</p>
                                    <p className='m-0 titles-partner-card mt-2'>Логотип партнера:</p>
                                    <Container fluid className='cnt-photo-partner border border-2 p-1 ms-0 mt-2'>
                                        <Image
                                            src='https://masterpiecer-images.s3.yandex.net/9dc518da8fa911eeb15f2aa0df1cd6e5:upscaled'
                                            height="100%"
                                            width='100%'
                                            className='mx-auto my-auto d-block photo-admin-partner p-1'
                                            alt='Logo'
                                        />
                                    </Container>
                                    <Container className='d-flex justify-content-between p-0 mt-3 mb-1'>
                                        <Button className='btn-edit-partner shadow-sm'>Изменить</Button>
                                        <Button className='btn-delete-partner shadow-sm'>Удалить</Button>
                                    </Container>
                                </Container>
                            </Col>
                            <Col>
                                <Container fluid className='partner-card p-4 shadow-sm rounded mt-4'>
                                    <p className='m-0 titles-partner-card'>Наименование партнера:</p>
                                    <p className='m-0 name-partner-card fw-bold'>Товарищество мышиных какишей</p>
                                    <p className='m-0 titles-partner-card mt-2'>Логотип партнера:</p>
                                    <Container fluid className='cnt-photo-partner border border-2 p-1 ms-0 mt-2'>
                                        <Image
                                            src='https://хомячьецарство.рф/wp-content/uploads/2023/01/dsc_0119451-scaled.jpg'
                                            height="100%"
                                            width='100%'
                                            className='mx-auto my-auto d-block photo-admin-partner p-1'
                                            alt='Logo'
                                        />
                                    </Container>
                                    <Container className='d-flex justify-content-between p-0 mt-3 mb-1'>
                                        <Button className='btn-edit-partner shadow-sm'>Изменить</Button>
                                        <Button className='btn-delete-partner shadow-sm'>Удалить</Button>
                                    </Container>
                                </Container>
                            </Col>
                            <Col>
                                <Container fluid className='partner-card p-4 shadow-sm rounded mt-4'>
                                    <p className='m-0 titles-partner-card'>Наименование партнера:</p>
                                    <p className='m-0 name-partner-card fw-bold'>Товарищество мышиных какишей</p>
                                    <p className='m-0 titles-partner-card mt-2'>Логотип партнера:</p>
                                    <Container fluid className='cnt-photo-partner border border-2 p-1 ms-0 mt-2'>
                                        <Image
                                            src='https://masterpiecer-images.s3.yandex.net/9dc518da8fa911eeb15f2aa0df1cd6e5:upscaled'
                                            height="100%"
                                            width='100%'
                                            className='mx-auto my-auto d-block photo-admin-partner p-1'
                                            alt='Logo'
                                        />
                                    </Container>
                                    <Container className='d-flex justify-content-between p-0 mt-3 mb-1'>
                                        <Button className='btn-edit-partner shadow-sm'>Изменить</Button>
                                        <Button className='btn-delete-partner shadow-sm'>Удалить</Button>
                                    </Container>
                                </Container>
                            </Col>
                            <Col>
                                <Container fluid className='partner-card p-4 shadow-sm rounded mt-4'>
                                    <p className='m-0 titles-partner-card'>Наименование партнера:</p>
                                    <p className='m-0 name-partner-card fw-bold'>Товарищество мышиных какишей</p>
                                    <p className='m-0 titles-partner-card mt-2'>Логотип партнера:</p>
                                    <Container fluid className='cnt-photo-partner border border-2 p-1 ms-0 mt-2'>
                                        <Image
                                            src='https://smart-lab.ru/uploads/2024/images/21/79/60/2024/04/12/09a28a.png'
                                            height="100%"
                                            width='100%'
                                            className='mx-auto my-auto d-block photo-admin-partner p-1'
                                            alt='Logo'
                                        />
                                    </Container>
                                    <Container className='d-flex justify-content-between p-0 mt-3 mb-1'>
                                        <Button className='btn-edit-partner shadow-sm'>Изменить</Button>
                                        <Button className='btn-delete-partner shadow-sm'>Удалить</Button>
                                    </Container>
                                </Container>
                            </Col>

                        </Row>

                    </Col>

                </Row>
            </Container>
            <Modal
                show={ShowCreatePartner}
                onHide={() => SetShowCrPartner(false)}>
                <Modal.Header closeButton>
                    <Modal.Title className='partner-modal-title'>
                        Создание партнера
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='py-4 d-flex flex-column'>
                        <Form.Group>
                            <Form.Control type='text' placeholder='Введите наименование партнера' name="name" className='partner-name-control-input shadow-sm mb-3' />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type='text' placeholder='Введите ссылку на сайт партнера' name="cost" className='partner-name-control-input shadow-sm mb-4' />
                        </Form.Group>
                        <Form.Group className='form-input-logo-partner d-flex flex-column justify-content-center align-items-center mb-3 mx-auto'
                            onClick={() => document.querySelector(".input-field-partner").click()}>
                            <Form.Control type='file' accept=".jpg, .png" className='input-field-partner mb-3' hidden
                                onChange={({ target: { files } }) => {
                                    files[0] && setFileNamePartner(files[0].name)
                                    if (files) {
                                        setImagePartner(URL.createObjectURL(files[0]))
                                    }
                                }

                                } onClick={(event) => { event.target.value = null; }} />

                            {ImagePartner ?
                                <Image
                                    src={ImagePartner}
                                    height="100%"
                                    width='100%'
                                    className='mx-auto my-auto d-block photo-admin-partner p-1'
                                    alt='Logo'
                                /> :
                                <>
                                    <i className='bi bi-upload upload_icon'></i>
                                    <p className='m-0 name-photo-partner'>Загрузить фото</p>
                                </>
                            }
                        </Form.Group>
                        
                        <section className='upload-del p-2 d-flex justify-content-between shadow-sm border rounded mt-2'>
                            <div className='d-flex align-items-center cnt-name-file-partner'>
                                <i class="bi bi-file-image icon_image_partner"></i>
                                <p className='m-0 name-photo-partner'>{FileNamePartner}</p>
                            </div>
                            <i class="bi bi-trash icon_trash_partner" onClick={() => {
                                setFileNamePartner("Выберитите картинку")
                                setImagePartner(null)
                            }}></i>
                        </section>

                        <Button className="mt-4 btn_form_partner mx-auto" >Сохранить</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Partners_admin;