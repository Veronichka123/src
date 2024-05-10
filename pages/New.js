import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../styles/new.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function New(props) {
    const [PhotoGalleryShow, setPhotoGalleryShow] = useState(false);
    const [PhotoInCarouselShow, setPhotoInCarouselShow] = useState(false);
    return (
        <>
            <Container fluid className='mt-5 main-new'>
                <h5>Зарница» завершилась тактической игрой в «Лазертаг»</h5>
                <Row xs={3} md={4} lg={6}>

                    <Col>
                        <Container fluid className="preview-photo p-0 mt-3">
                            <div className='go-to-preview-photo d-flex justify-content-center align-items-center'><i className='bi bi-arrows-angle-expand text-light opacity-75 m-1'></i></div>
                            <Image
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE4BbNI177TEIRGWm-v8HO5Dvjo7WCMTtbwiapJM7oOA&s'
                                height="100%"
                                width='100%'
                                className='mx-auto d-block format-preview-photo'
                                alt='Logo'
                            />
                        </Container>
                    </Col>

                    <Col>
                        <Container fluid className="preview-photo p-0 mt-3">
                            <div className='go-to-preview-photo d-flex justify-content-center align-items-center'><i className='bi bi-arrows-angle-expand text-light opacity-75'></i></div>
                            <Image
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE4BbNI177TEIRGWm-v8HO5Dvjo7WCMTtbwiapJM7oOA&s'
                                height="100%"
                                width='100%'
                                className='mx-auto d-block format-preview-photo'
                                alt='Logo'
                            />
                        </Container>
                    </Col>

                    <Col>
                        <Container fluid className="preview-photo p-0 mt-3">
                            <div className='go-to-preview-photo d-flex justify-content-center align-items-center'><i className='bi bi-arrows-angle-expand text-light opacity-75'></i></div>
                            <Image
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE4BbNI177TEIRGWm-v8HO5Dvjo7WCMTtbwiapJM7oOA&s'
                                height="100%"
                                width='100%'
                                className='mx-auto d-block format-preview-photo'
                                alt='Logo'
                            />
                        </Container>
                    </Col>

                    <Col>
                        <Container fluid className="preview-photo p-0 mt-3">
                            <div className='go-to-preview-photo d-flex justify-content-center align-items-center'><i className='bi bi-arrows-angle-expand text-light opacity-75'></i></div>
                            <Image
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE4BbNI177TEIRGWm-v8HO5Dvjo7WCMTtbwiapJM7oOA&s'
                                height="100%"
                                width='100%'
                                className='mx-auto d-block format-preview-photo'
                                alt='Logo'
                            />
                        </Container>
                    </Col>

                    <Col>
                        <Container fluid className="preview-photo p-0 mt-3">
                            <div className='go-to-preview-photo d-flex justify-content-center align-items-center'><i className='bi bi-arrows-angle-expand text-light opacity-75'></i></div>
                            <Image
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE4BbNI177TEIRGWm-v8HO5Dvjo7WCMTtbwiapJM7oOA&s'
                                height="100%"
                                width='100%'
                                className='mx-auto d-block format-preview-photo'
                                alt='Logo'
                            />
                        </Container>
                    </Col>

                    <Col>
                        <Container fluid className="preview-photo p-0 mt-3">
                            <div className='go-to-preview-photo d-flex justify-content-center align-items-center'><i className='bi bi-arrows-angle-expand text-light opacity-75'></i></div>
                            <Image
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE4BbNI177TEIRGWm-v8HO5Dvjo7WCMTtbwiapJM7oOA&s'
                                height="100%"
                                width='100%'
                                className='mx-auto d-block format-preview-photo'
                                alt='Logo'
                            />
                        </Container>
                    </Col>

                    <Col>
                        <Container fluid className="preview-photo p-0 mt-3">
                            <div className='go-to-preview-photo d-flex justify-content-center align-items-center'><i className='bi bi-arrows-angle-expand text-light opacity-75'></i></div>
                            <Image
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE4BbNI177TEIRGWm-v8HO5Dvjo7WCMTtbwiapJM7oOA&s'
                                height="100%"
                                width='100%'
                                className='mx-auto d-block format-preview-photo'
                                alt='Logo'
                            />
                        </Container>
                    </Col>

                    <Col>
                        <Container fluid className="preview-photo p-0 mt-3">
                            <div className='go-to-preview-photo d-flex justify-content-center align-items-center'><i className='bi bi-arrows-angle-expand text-light opacity-75'></i></div>
                            <Image
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE4BbNI177TEIRGWm-v8HO5Dvjo7WCMTtbwiapJM7oOA&s'
                                height="100%"
                                width='100%'
                                className='mx-auto d-block format-preview-photo'
                                alt='Logo'
                            />
                        </Container>
                    </Col>

                    <Col>
                        <Container fluid className="preview-photo p-0 mt-3">
                            <div className='go-to-preview-photo d-flex justify-content-center align-items-center'><i className='bi bi-arrows-angle-expand text-light opacity-75'></i></div>
                            <Image
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE4BbNI177TEIRGWm-v8HO5Dvjo7WCMTtbwiapJM7oOA&s'
                                height="100%"
                                width='100%'
                                className='mx-auto d-block format-preview-photo'
                                alt='Logo'
                            />
                        </Container>
                    </Col>

                    <Col>
                        <Container fluid className="preview-photo p-0 mt-3">
                            <div className='go-to-preview-photo d-flex justify-content-center align-items-center'><i className='bi bi-arrows-angle-expand text-light opacity-75'></i></div>
                            <Image
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE4BbNI177TEIRGWm-v8HO5Dvjo7WCMTtbwiapJM7oOA&s'
                                height="100%"
                                width='100%'
                                className='mx-auto d-block format-preview-photo'
                                alt='Logo'
                            />
                        </Container>
                    </Col>

                    <Col>
                        <Container fluid className="preview-photo p-0 mt-3">
                            <div className='go-to-preview-photo d-flex justify-content-center align-items-center'><i className='bi bi-arrows-angle-expand text-light opacity-75'></i></div>
                            <Image
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE4BbNI177TEIRGWm-v8HO5Dvjo7WCMTtbwiapJM7oOA&s'
                                height="100%"
                                width='100%'
                                className='mx-auto d-block format-preview-photo'
                                alt='Logo'
                            />
                        </Container>
                    </Col>

                    <Col>
                        <Container fluid className="preview-photo p-0 mt-3" onClick={() => setPhotoGalleryShow(true)}>
                            <div className='go-to-all-photo d-flex justify-content-center align-items-center'><div><p className='text-light m-0 text-center'>Увидеть все фото</p> <p className='text-light text-center m-0 pt-2 fw-bolder'>520 фото</p></div></div>
                            <Image
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE4BbNI177TEIRGWm-v8HO5Dvjo7WCMTtbwiapJM7oOA&s'
                                height="100%"
                                width='100%'
                                className='mx-auto d-block format-preview-photo'
                                alt='Logo'
                            />
                        </Container>
                    </Col>
                </Row>
                <Container fluid className='d-flex justify-content-center p-0 mt-3'>
                    <Container fluid className='new-all-card px-5 py-4'>
                        <p className='mt-2'>В Лузе, небольшом городке Кировской области, юнармейцы школ выясняли, какая команда сильнее в военно-спортивной игре «Зарница».
                            Активно помогли в организации и проведении муниципального этапа «Зарницы» председатель местного отделения ДОСААФ Полина Головяшева и член совета регионального отделения оборонного общества Александр Долматов. В этой игре, занимающей особое место в системе военно-патриотического воспитания школьников, формировании готовности молодежи к военной службе, от ДОСААФ Кировской области в координации муниципальных этапов участвуют местные отделения и образовательные учреждения оборонной организации.
                            Юнармейцы Лузы в нынешней игре состязались в стрельбе, разборке-сборке автомата и снаряжении его магазина, строевой и физической подготовке, показывали мастерство в пользовании защитным комплектом. Все это оценивало строгое жюри, отметившее, что все юнармейские команды справились с заданиями.
                            Лучшими командами названы «Патриот», «Витязь» и «Надежда».  Сильнейшим зарничникам вручены дипломы и памятные подарки. Приятным бонусом для юнармейцев стала тактическая игра «Лазертаг», завершившая этот день. </p>
                        <Container fluid className='d-flex justifi-content-start p-0'>
                            <p className='text-secondary fw-light'>Дата публикации: </p>
                            <p className='text-secondary fw-light ms-4'>22 февраля 2024 г. в 11:16</p>
                        </Container>

                    </Container>
                </Container>
            </Container>


            <Modal
                size='xl'
                show={PhotoGalleryShow}
                onHide={() => setPhotoGalleryShow(false)}
                scrollable
            >
                <Modal.Header closeButton>
                    <Modal.Title >
                        Зарница» завершилась тактической игрой в «Лазертаг»
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='mb-3'>
                    <Row xs={3} md={4} lg={6}>

                        <Col>
                            <Container fluid className="photo-in-gallery p-0 mt-3" onClick={() => setPhotoInCarouselShow(true)}>
                                <Image
                                    src='https://masterpiecer-images.s3.yandex.net/9dc518da8fa911eeb15f2aa0df1cd6e5:upscaled'
                                    height="100%"
                                    width='100%'
                                    className='mx-auto d-block format-preview-photo'
                                    alt='Logo'
                                />
                            </Container>
                        </Col>

                        <Col>
                            <Container fluid className="photo-in-gallery p-0 mt-3">
                                <Image
                                    src='https://masterpiecer-images.s3.yandex.net/9dc518da8fa911eeb15f2aa0df1cd6e5:upscaled'
                                    height="100%"
                                    width='100%'
                                    className='mx-auto d-block format-preview-photo'
                                    alt='Logo'
                                />
                            </Container>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>

            <Modal
                size='lg'
                show={PhotoInCarouselShow}
                onHide={() => setPhotoInCarouselShow(false)}
                animation={false}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Фото № 828</Modal.Title>
                </Modal.Header>
                <Modal.Body className='mb-3'>

                    <Carousel data-bs-theme="dark" interval={null} indicators={false} slide={false}>
                        <Carousel.Item>
                            <Container className='mx-auto d-block format-selected-photo d-flex justify-content-center'>
                                <Image className='selected-img'
                                    src='https://masterpiecer-images.s3.yandex.net/9dc518da8fa911eeb15f2aa0df1cd6e5:upscaled'
                                    alt='Logo'
                                />
                            </Container>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Container className='mx-auto d-block format-selected-photo d-flex justify-content-center'>
                                <Image className='selected-img'
                                    src='https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663255474_12-mykaleidoscope-ru-p-zlobnii-khomyak-vkontakte-12.jpg'
                                    alt='Logo'
                                />
                            </Container>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Container className='mx-auto d-block format-selected-photo d-flex justify-content-center'>
                                <Image className='selected-img'
                                    src='https://i0.wp.com/catandcat.ru/wp-content/uploads/2019/12/homjaki-anons.jpeg?fit=585%2C385&ssl=1'
                                    alt='Logo'

                                />
                            </Container>

                        </Carousel.Item>
                    </Carousel>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default New;