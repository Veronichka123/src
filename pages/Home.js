import React from 'react';
import { Button, Container } from 'react-bootstrap';
import '../styles/home.css';
import '../styles/footer.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Image from 'react-bootstrap/Image';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Home(props) {
    const [allAnnouncements, setAllAnnouncements] = useState(null);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", (event) => {setWindowWidth(window.innerWidth); console.log(windowWidth)});
    })

    useEffect(() => {
        axios.get('/announcement/all')
        .then((response) => {
            setAllAnnouncements(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

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

            {allAnnouncements ? allAnnouncements.map((anons, i) => (
                windowWidth < 800 ?
                    anons.image ?
                        <Container fluid className='home-anons p-0 mt-4'>
                            <Container className='d-flex flex-column p-0'>
                                <Container className='anons-text p-5 shadow border-container-radius'>
                                    <p className='anons-title fw-bold'>{anons.title}</p>
                                    <p className='anons-info mt-4'>{anons.content}</p>
                                </Container>
                                <Container className='anons-image-cnt p-0'>
                                    <Image
                                        src={axios.defaults.baseURL + anons.imagePath}
                                        className='mx-auto d-block anons-image image-container-radius'
                                        alt='Logo'
                                    />
                                </Container>
                            </Container>
                        </Container>
                    :
                        <Container fluid className='home-anons p-0 mt-4'>
                            <Container fluid className='anons-text-without-photo p-5 shadow'>
                                <p className='anons-title fw-bold'>{anons.title}</p>
                                <p className='anons-info mt-4'>{anons.content}</p>
                            </Container>
                        </Container>
                :
                    anons.image ? 
                        i % 2 == 0 ? 
                            <Container fluid className='home-anons p-0 mt-4'>
                                <Row>
                                    <Col sm={7}>
                                        <Container className='anons-text p-5 shadow'>
                                            <p className='anons-title fw-bold'>{anons.title}</p>
                                            <p className='anons-info mt-4'>{anons.content}</p>
                                        </Container>
                                    </Col>
                                    <Col sm={5}>
                                        <Container className='anons-image-cnt p-0'>
                                            <Image
                                                src={axios.defaults.baseURL + anons.imagePath}
                                                className='mx-auto d-block anons-image'
                                                alt='Logo'
                                            />
                                        </Container>
                                    </Col>
                                </Row>
                            </Container>
                        :
                            <Container fluid className='home-anons p-0 mt-4'>
                                <Row>
                                    <Col sm={5}>
                                        <Container className='anons-image-cnt p-0'>
                                            <Image
                                                src={axios.defaults.baseURL + anons.imagePath}
                                                className='mx-auto d-block anons-image'
                                                alt='Logo'
                                            />
                                        </Container>
                                    </Col>
                                    <Col sm={7}>
                                        <Container className='anons-text p-5 shadow'>
                                            <p className='anons-title fw-bold'>{anons.title}</p>
                                            <p className='anons-info mt-4'>{anons.content}</p>
                                        </Container>
                                    </Col>
                                </Row>
                            </Container>
                    :
                        <Container fluid className='home-anons p-0 mt-4'>
                            <Container fluid className='anons-text-without-photo p-5 shadow'>
                                <p className='anons-title fw-bold'>{anons.title}</p>
                                <p className='anons-info mt-4'>{anons.content}</p>
                            </Container>
                        </Container>
                ))
                
            :""}

        </Container>

    );
}

export default Home;