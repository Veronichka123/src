import React from 'react';
import { Button, Container } from 'react-bootstrap';
import '../styles/home.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Image from 'react-bootstrap/Image';

function Home(props) {
    return (
        <Container fluid className='banner-cnt p-5'>
            <p className='mb-1 banner-title'>Оказание услуг.</p>
            <p className='mb-1 banner-title'>Новости организации.</p>
            <p className='mb-1 banner-title'>Пробные экзамены.</p>

            <Row xs={1} md={1} lg={3} className='mt-3'>

                <Col>
                    <Container fluid className="shadow p-4 mt-3 ms-0 function-banner d-flex pt-auto align-items-center" >
                        <i className='bi bi-clipboard-check banner-icon m-0'></i>
                        <p className='function-banner-text my-0 ms-4'>Подача заявок на различные типы услуг</p>
                    </Container>
                </Col>

                <Col>
                    <Container fluid className="shadow p-4 mt-3 ms-0 function-banner d-flex pt-auto align-items-center" >
                        <i className='bi bi-newspaper banner-icon m-0'></i>
                        <p className='function-banner-text my-0 ms-4'>Просмотр опубликованных новостей организации</p>
                    </Container>
                </Col>
                <Col>
                    <Container fluid className="shadow p-4 mt-3 ms-0 function-banner d-flex pt-auto align-items-center" >
                        <i className='bi bi-pencil-square banner-icon m-0'></i>
                        <p className='function-banner-text my-0 ms-4'>Прохождение пробных тестовых экзаменов </p>
                    </Container>
                </Col>
            </Row>
            <Button className='banner-btn mt-5'>Перейти в личный кабинет</Button>
        </Container>

    );
}

export default Home;