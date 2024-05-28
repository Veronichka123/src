import React from 'react';
import { Container, Button } from 'react-bootstrap';
import '../styles/Educational_materials_admin.css';
import Sidebar from '../components/Sidebar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/educational_materials.css';
import '../styles/titles-sizes.css';
import axios from 'axios';

function Educational_materials_admin(props) {
    const [ShowCreatePartner, SetShowCrPartner] = useState(false);
    const [ImagePartner, setImagePartner] = useState(null);
    const [FileNamePartner, setFileNamePartner] = useState("Файл не выбран");
    const [data, setData] = useState({ name: "", link: "" });
    const [dataImage, setDataImage] = useState(null);
    return (
        
        <>
            <Container fluid className='cnt-main-ed-mat-admin p-0'>
                <p className='text-center mt-2 main-section-title mb-1'>ПАНЕЛЬ АДМИНИСТРАТОРА</p>
                <Container className=' d-flex justify-content-center' fluid>
                    <p className='text-secondary border-bottom border-primary border-opacity-50 text-center title-subsection'>Управление материалами</p>
                </Container>
                <Row className='mt-3'>
                    <Col xs={3} sm={3} md={5} lg={3}><Sidebar /></Col>
                    <Col xs={9} sm={9} md={7} lg={9}>


                        <Container className='d-flex p-0' fluid>
                            <p className='d-flex align-items-center m-0 title-admin-add'>Добавить документ?</p>
                            <Button className='ms-4 btn-admin-add' onClick={() => SetShowCrPartner(true)}>Добавить</Button>
                        </Container>

                        <Container fluid className='admin-material-cnt p-3 rounded d-flex justify-content-between mt-4 shadow-sm'>
                            <Container fluid className='p-0 d-flex admin-material-name-icon ms-0'>
                                <i class="bi bi-filetype-pdf admin-doc-icon"></i>
                                <p className='admin-name-material my-auto ms-4'>vfjnaskjkasjnvk kdhwbvjhsa ighsdjhvg iusdiuymhbds fiuuhbidushf uhsifuh iufahs gpiuhsad gpiusdh gpasdohj dsogojosdijgd ijds gjodsaij gdsoij dgvh iuhds vu</p>
                            </Container>
                            <Button className='admin-materials-btn-edit me-1 d-flex justify-content-center align-items-center'><i class="bi bi-pencil"></i></Button>
                            <Button className='admin-materials-btn-delete d-flex justify-content-center align-items-center'><i class="bi bi-trash3"></i></Button>
                        </Container>

                        <Container fluid className='admin-material-cnt p-3 rounded d-flex justify-content-between mt-4 shadow-sm'>
                            <Container fluid className='p-0 d-flex admin-material-name-icon ms-0'>
                                <i class="bi bi-filetype-doc admin-doc-icon"></i>
                                <p className='admin-name-material my-auto ms-4 '>vfjnaskjkasjnvk kdhwbvjhsa ighsdjhvg iusdiuymhbds fiuuhbidushf uhsifuh iufahs gpiuhsad gpiusdh gpasdohj dsogojosdijgd ijds gjodsaij gdsoij dgvh iuhds vu</p>
                            </Container>
                            <Button className='admin-materials-btn-edit me-1 d-flex justify-content-center align-items-center'><i class="bi bi-pencil"></i></Button>
                            <Button className='admin-materials-btn-delete d-flex justify-content-center align-items-center'><i class="bi bi-trash3"></i></Button>
                        </Container>

                        <Container fluid className='admin-material-cnt p-3 rounded d-flex justify-content-between mt-4 shadow-sm'>
                            <Container fluid className='p-0 d-flex admin-material-name-icon ms-0'>
                                <i class="bi bi-filetype-docx admin-doc-icon"></i>
                                <p className='admin-name-material my-auto ms-4'>vfjnaskjkasjnvk kdhwbvjhsa ighsdjhvg iusdiuymhbds fiuuhbidushf uhsifuh iufahs gpiuhsad gpiusdh gpasdohj dsogojosdijgd ijds gjodsaij gdsoij dgvh iuhds vu</p>
                            </Container>
                            <Button className='admin-materials-btn-edit me-1 d-flex justify-content-center align-items-center'><i class="bi bi-pencil"></i></Button>
                            <Button className='admin-materials-btn-delete d-flex justify-content-center align-items-center'><i class="bi bi-trash3"></i></Button>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <Modal
                show={ShowCreatePartner}
                onHide={() => {
                    SetShowCrPartner(false);
                }}>
                <Modal.Header closeButton>
                    <Modal.Title className='partner-modal-title'>
                        Создание учебного материала
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='py-4 d-flex flex-column'>
                        <Form.Group>
                            <Form.Control type='text' placeholder='Введите наименование учебного материала' name="name" className='ed-mat-name-control-input shadow-sm' />
                            <Form.Control type="file" accept=".doc, .docx, .pdf" className='input-education-file shadow-sm mt-3'/>
                        </Form.Group>

                        <Button className="mt-5 btn_form_partner mx-auto">Сохранить</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Educational_materials_admin;