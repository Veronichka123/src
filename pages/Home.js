import React from 'react';
import { Button, Container } from 'react-bootstrap';
import '../styles/home.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Image from 'react-bootstrap/Image';

function Home(props) {
    return (
        <Container fluid className='home-cnt p-0'>
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

            <Container fluid className='home-anons p-0 mt-5'>
                <Row>
                    <Col sm={7}>
                        <Container className='anons-text p-5 shadow'>
                            <p className='anons-title fw-bold'>ДОСААФ России и «Ростелеком» заключили соглашение о сотрудничестве.</p>
                            <p className='anons-info mt-4'>«Ростелеком» и Общероссийская общественно-государственная организация «Добровольное общество содействия армии, авиации и флоту России» (ДОСААФ России) заключили соглашение о сотрудничестве в области повышения эффективности, надежности и безопасности функционирования автомобильного транспорта на территории Российской Федерации, трудоустройства молодых специалистов, поддержки и развития российских организаций и населения. На площадке Международной выставки-форума «Россия» документ подписали президент «Ростелекома» Михаил Осеевский и председатель ДОСААФ России Александр Дворников.</p>
                        </Container>
                    </Col>
                    <Col sm={5}>
                        <Container className='anons-image-cnt p-0'>
                            <Image
                                src='https://masterpiecer-images.s3.yandex.net/9dc518da8fa911eeb15f2aa0df1cd6e5:upscaled'
                                className='mx-auto d-block anons-image'
                                alt='Logo'
                            />
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Container>


    );
}

export default Home;