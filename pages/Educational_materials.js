import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/educational_materials.css';
import Image from 'react-bootstrap/Image';
import book from '../components/book.png';

function Educational_materials(props) {
    return (

        <Container className='cnt-ed-material p-0' fluid>
            <Container className='mt-2 d-flex justify-content-center' >
                <p className='border-bottom p-2 border-primary border-opacity-50 main-section-title'>УЧЕБНЫЕ МАТЕРИАЛЫ</p>
            </Container>
            <Row className='mt-3'>
                <Col xs={3} sm={3} md={5} lg={3}><Sidebar /></Col>
                <Col xs={9} sm={9} md={7} lg={9}>
                    <Container className='info_material_user px-5 py-4 d-flex justify-content-around shadow-sm'>
                        <Container>
                            <h5>Изучение теории.</h5>
                            <p className='text-secondary lead description-materials'>Это позволит Вам подготовиться к экзаменационному тестированию.</p>
                            <Button type="submit" href='/' className="my-2 btn_go_to_test d-flex justify-content-center align-items-center shadow-sm">
                                Перейти к тренировачным тестам
                            </Button>
                        </Container>
                        <img
                            src={book}
                            height="80"
                            width="80"
                            className='m-3'
                            alt='Logo'
                        />
                    </Container>
                    <Container fluid className='material-cnt p-3 rounded d-flex justify-content-between mt-3 shadow-sm'>
                        <Container fluid className='p-0 d-flex material-name-icon ms-0'>
                            <i class="bi bi-filetype-pdf doc-icon"></i>
                            <p className='name-material my-auto ms-4'>vfjnaskjkasjnvk kdhwbvjhsa ighsdjhvg iusdiuymhbds fiuuhbidushf uhsifuh iufahs gpiuhsad gpiusdh gpasdohj dsogojosdijgd ijds gjodsaij gdsoij dgvh iuhds vu</p>
                        </Container>
                        <i class="bi bi-download download-material-icon fw-bold"></i>

                    </Container>

                    <Container fluid className='material-cnt p-3 rounded d-flex justify-content-between mt-3 shadow-sm'>
                        <Container fluid className='p-0 d-flex material-name-icon ms-0'>
                            <i class="bi bi-filetype-doc doc-icon"></i>
                            <p className='name-material my-auto ms-4'>vfjnaskjkasjnvk kdhwbvjhsa ighsdjhvg iusdiuymhbds fiuuhbidushf uhsifuh iufahs gpiuhsad gpiusdh gpasdohj dsogojosdijgd ijds gjodsaij gdsoij dgvh iuhds vu</p>
                        </Container>
                        <i class="bi bi-download download-material-icon fw-bold"></i>

                    </Container>

                    <Container fluid className='material-cnt p-3 rounded d-flex justify-content-between mt-3 shadow-sm'>
                        <Container fluid className='p-0 d-flex material-name-icon ms-0'>
                            <i class="bi bi-filetype-docx doc-icon"></i>
                            <p className='name-material my-auto ms-4'>vfjnaskjkasjnvk kdhwbvjhsa ighsdjhvg iusdiuymhbds fiuuhbidushf uhsifuh iufahs gpiuhsad gpiusdh gpasdohj dsogojosdijgd ijds gjodsaij gdsoij dgvh iuhds vu</p>
                        </Container>
                        <i class="bi bi-download download-material-icon fw-bold"></i>

                    </Container>






                </Col>

            </Row>
        </Container>
    );
}

export default Educational_materials;