import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import '../styles/footer.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import logo from './dosaaf_logo.png';

class Footer extends Component {
    render() {
        return (
            <Container fluid className='footer p-0'>
                <Container fluid className='footer-w p-0'>
                    <Container fluid className='partners-title ms-0 p-4 mt-5'>
                        <p className='my-auto'>Партнеры ДОСААФ</p>
                    </Container>
                    <hr className='hr_partners mt-0'></hr>
                    <Row xs={3} md={4} lg={6}>
                        <Col>
                            <Container fluid className="photo-cnt-partner p-0 mt-3 d-flex flex-column border border-1 border-secondary border-opacity-50">
                                <Image
                                    src='https://static.mk.ru/upload/entities/2017/01/20/articles/detailPicture/bd/e0/05/bf9373712_9521764.jpg'
                                    height="100%"
                                    width='100%'
                                    className='mx-auto my-auto d-block photo-partner p-1'
                                    alt='Logo'
                                />
                            </Container>
                        </Col>
                        <Col>
                            <Container fluid className="photo-cnt-partner p-0 mt-3 d-flex flex-column border border-1 border-secondary border-opacity-50">
                                <Image
                                    src='https://static.mk.ru/upload/entities/2017/01/20/articles/detailPicture/bd/e0/05/bf9373712_9521764.jpg'
                                    height="100%"
                                    width='100%'
                                    className='mx-auto my-auto d-block photo-partner p-1'
                                    alt='Logo'
                                />
                            </Container>
                        </Col>
                        <Col>
                            <Container fluid className="photo-cnt-partner p-0 mt-3 d-flex flex-column border border-1 border-secondary border-opacity-50">
                                <Image
                                    src='https://static.mk.ru/upload/entities/2017/01/20/articles/detailPicture/bd/e0/05/bf9373712_9521764.jpg'
                                    height="100%"
                                    width='100%'
                                    className='mx-auto my-auto d-block photo-partner p-1'
                                    alt='Logo'
                                />
                            </Container>
                        </Col>
                        <Col>
                            <Container fluid className="photo-cnt-partner p-0 mt-3 d-flex flex-column border border-1 border-secondary border-opacity-50">
                                <Image
                                    src='https://static.mk.ru/upload/entities/2017/01/20/articles/detailPicture/bd/e0/05/bf9373712_9521764.jpg'
                                    height="100%"
                                    width='100%'
                                    className='mx-auto my-auto d-block photo-partner p-1'
                                    alt='Logo'
                                />
                            </Container>
                        </Col>
                        <Col>
                            <Container fluid className="photo-cnt-partner p-0 mt-3 d-flex flex-column border border-1 border-secondary border-opacity-50">
                                <Image
                                    src='https://smart-lab.ru/uploads/2024/images/21/79/60/2024/04/12/09a28a.png'
                                    height="100%"
                                    width='100%'
                                    className='mx-auto my-auto d-block photo-partner p-1'
                                    alt='Logo'
                                />
                            </Container>
                        </Col>
                        <Col>
                            <Container fluid className="photo-cnt-partner p-0 mt-3 d-flex flex-column border border-1 border-secondary border-opacity-50">
                                <Image
                                    src='https://smart-lab.ru/uploads/2024/images/21/79/60/2024/04/12/09a28a.png'
                                    height="100%"
                                    width='100%'
                                    className='mx-auto my-auto d-block photo-partner p-1'
                                    alt='Logo'
                                />
                            </Container>
                        </Col>
                        <Col>
                            <Container fluid className="photo-cnt-partner p-0 mt-3 d-flex flex-column border border-1 border-secondary border-opacity-50">
                                <Image
                                    src='https://хомячьецарство.рф/wp-content/uploads/2023/01/dsc_0119451-scaled.jpg'
                                    height="100%"
                                    width='100%'
                                    className='mx-auto my-auto d-block photo-partner p-1'
                                    alt='Logo'
                                />
                            </Container>
                        </Col>
                        <Col>
                            <Container fluid className="photo-cnt-partner p-0 mt-3 d-flex flex-column border border-1 border-secondary border-opacity-50">
                                <Image
                                    src='https://smart-lab.ru/uploads/2024/images/21/79/60/2024/04/12/09a28a.png'
                                    height="100%"
                                    width='100%'
                                    className='mx-auto my-auto d-block photo-partner p-1'
                                    alt='Logo'
                                />
                            </Container>
                        </Col>
                        <Col>
                            <Container fluid className="photo-cnt-partner p-0 mt-3 d-flex flex-column border border-1 border-secondary border-opacity-50">
                                <Image
                                    src='https://masterpiecer-images.s3.yandex.net/9dc518da8fa911eeb15f2aa0df1cd6e5:upscaled'
                                    height="100%"
                                    width='100%'
                                    className='mx-auto my-auto d-block photo-partner p-1'
                                    alt='Logo'
                                />
                            </Container>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className='organization-info-footer p-4 mt-3 d-flex justify-content-between'>
                    <Container fluid className='d-flex justify-content-start'>
                        <img
                            src={logo}
                            height="40"
                            width="40"
                            alt='Logo'
                            className = 'my-auto'
                        />
                        <p className='my-auto mx-2 text-secondary'>|</p>
                        <p className='my-auto text-secondary'>Официальный сайт ДОСААФ Кострома</p>
                    </Container>
                    <Container fluid className='d-flex flex-column'>
                        <p className='my-auto ms-auto text-secondary p-1 text-break'>Адрес: Кострома, ул. Галичская 47б</p>
                        <p className='my-auto ms-auto text-secondary p-1 text-break'>Email: dosaaf_kostroma@gmail.com</p>
                    </Container>
                </Container>
            </Container>
        );
    }
}

export default Footer;