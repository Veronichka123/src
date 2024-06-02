import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/settings.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Form } from 'react-bootstrap'


function Settings(props) {
    return (
        <Container fluid className='main-cnt-settings p-0'>
            <Container className='mt-2 d-flex justify-content-center' >
                <p className='border-bottom p-2 border-primary border-opacity-50 main-section-title'>НАСТРОЙКИ</p>
            </Container>
            <Row className='mt-3'>
                <Col xs={3} sm={3} md={5} lg={3}><Sidebar /></Col>
                <Col xs={9} sm={9} md={7} lg={9}>
                    <Container fluid className='ms-0 p-4 settings-change-contact-data rounded shadow-sm'>
                        <Container fluid className='p-0 d-flex align-items-center'>
                            <i class="bi bi-person-circle settings-title-icon"></i>
                            <p className='mb-0 ms-2 settings-title'>Изменение контактных данных</p>
                        </Container>
                        <Form>
                            <p className='mb-0 mt-3 settings-name-titles'>Фамилия</p>
                            <Form.Control type='text' placeholder='Введите Фамилию:' className='settings-contact-input shadow-sm mt-1' />
                            <p className='mb-0 mt-3 settings-name-titles'>Имя</p>
                            <Form.Control type='text' placeholder='Введите Имя:' className='settings-contact-input shadow-sm mt-1' />
                            <p className='mb-0 mt-3 settings-name-titles'>Отчество</p>
                            <Form.Control type='text' placeholder='Введите Отчество:' className='settings-contact-input shadow-sm mt-1' />
                        </Form>
                    </Container>

                    <Container fluid className='ms-0 p-4 settings-change-contact-data rounded shadow-sm mt-4'>
                        <Container fluid className='p-0 d-flex align-items-center'>
                            <i class="bi bi-lock settings-title-icon"></i>
                            <p className='mb-0 ms-2 settings-title'>Изменение пароля</p>
                        </Container>
                        <Form>
                            <Form.Control type='password' placeholder='Введите старый пароль' className='settings-contact-input shadow-sm mt-3' />
                            <Form.Control type='password' placeholder='Введите новый пароль' className='settings-contact-input shadow-sm mt-3' />
                            <Form.Control type='password' placeholder='Подтвердите новый пароль' className='settings-contact-input shadow-sm mt-3' />
                        </Form>
                        <Button className='mt-4 btn-change-password'>Изменить пароль</Button>
                    </Container>

                    <Container fluid className='ms-0 p-4 settings-change-contact-data rounded shadow-sm mt-4'>
                        <Container fluid className='p-0 d-flex align-items-center'>
                            <i class="bi bi-envelope-check settings-title-icon"></i>
                            <p className='mb-0 ms-2 settings-title'>Подписка на новости </p>
                        </Container>
                        <Container fluid className='p-0 d-flex align-items-center mt-3'>
                            <Form.Check className='d-flex align-items-center'
                                type="checkbox"
                                name="Items" />

                            <p className='mb-0 ms-2 mailing-agreement-title'>Я хочу получать рассылки на почту</p>
                        </Container>
                    </Container>

                    <Button className='mt-4 btn-settings-save-changes'>Сохранить изменения</Button>





                </Col>
            </Row>
        </Container>
    );
}

export default Settings;