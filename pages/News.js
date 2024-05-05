import React from 'react';
import '../styles/news.css';
import { Button, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';
import New from './New';
import { Route, Routes } from 'react-router-dom';




function News(props) {
    return (
        <>
            <Container className='cont-news mt-0 px-4 pb-4' fluid>

                <Container className='pt-2 d-flex justify-content-center' >
                    <h5 className='border-bottom p-2 border-primary border-opacity-50'>НОВОСТИ ДОСААФ КОСТРОМА</h5>
                </Container>
                <Container fluid className='p-4 mt-5 cnt-search'>
                    <Container fluid className='d-flex'>
                        <InputGroup className='me-4'>
                            <Form.Control placeholder="Поиск новости" />
                        </InputGroup>
                        <Button className='px-3 btn-search'><i className='bi bi-search'></i></Button>
                    </Container>
                    <hr className='hrsearch'></hr>
                    <Container className='d-flex'>
                        <p className='my-auto me-4'>Сортировать по: </p>
                        <Form.Select className='select-sort'>
                            <option defaultValue="1">Дате(новые)</option>
                            <option defaultValue="2">Дате(старые)</option>
                        </Form.Select>

                    </Container>
                </Container>

                <Row xs={1} md={2}>
                    <Col>
                        <Container className='d-flex justify-content-center mt-5'>
                            <Container className='new-card p-5'>
                                <h5>Зарница завершилась тактической игрой в лазертаг</h5>
                                <p className='text-secondary fw-light'>11:16 | 22.02.2024</p>
                                <div className="p-1"> <Image
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE4BbNI177TEIRGWm-v8HO5Dvjo7WCMTtbwiapJM7oOA&s'
                                    height="250"
                                    width="100%"
                                    className='mx-auto d-block format-new-photo'
                                    alt='Logo'
                                /></div>
                                <p className='mt-2'>В Лузе, небольшом городке Кировской области, юнармейцы школ выясняли, какая команда сильнее в военно-спортивной игре «Зарница».</p>
                                <Button className='btn-go-to-new' href="/new">Узнать больше</Button>
                            </Container>
                        </Container>
                    </Col>
                    <Col>
                        <Container className='d-flex justify-content-center mt-5'>
                            <Container className='new-card p-5'>
                                <h5>Зарница завершилась тактической игрой в лазертаг</h5>
                                <p className='text-secondary fw-light'>11:16 | 22.02.2024</p>
                                <div className="p-1"> <Image
                                    src='https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTfz3tIfnYqrELwrTFI1kvqcV1n9QYB6HMzJIRf57E5N9I_at2B5MVpuKpK5fnfJWz3n1ZP-hQ8U0avEuU'
                                    height="250"
                                    width="100%"
                                    className='mx-auto d-block format-new-photo'
                                    alt='Logo'
                                /></div>
                                <p className='mt-2'>В Лузе, небольшом городке Кировской области, юнармейцы школ выясняли, какая команда сильнее в военно-спортивной игре «Зарница».</p>
                                <Button className='btn-go-to-new'>Узнать больше</Button>
                            </Container>
                        </Container>
                    </Col>
                    <Col>
                        <Container className='d-flex justify-content-center mt-5'>
                            <Container className='new-card p-5'>
                                <h5>Зарница завершилась тактической игрой в лазертаг</h5>
                                <p className='text-secondary fw-light'>11:16 | 22.02.2024</p>
                                <div className="p-1"> <Image
                                    src='https://img.freepik.com/free-photo/cute-rat-wearing-clothes_23-2150702533.jpg'
                                    height="250"
                                    width="100%"
                                    className='mx-auto d-block format-new-photo'
                                    alt='Logo'
                                /></div>
                                <p className='mt-2'>В Лузе, небольшом городке Кировской области, юнармейцы школ выясняли, какая команда сильнее в военно-спортивной игре «Зарница».</p>
                                <Button className='btn-go-to-new'>Узнать больше</Button>
                            </Container>
                        </Container>
                    </Col>

                    <Col>
                        <Container className='d-flex justify-content-center mt-5'>
                            <Container className='new-card p-5'>
                                <h5>Пэлк помылся</h5>
                                <p className='text-secondary fw-light'>11:16 | 22.02.2024</p>
                                <p className='mt-2'>Фото предпочел скрыть (потому что не помылся еще)</p>
                                <Button className='btn-go-to-new'>Узнать больше</Button>
                            </Container>
                        </Container>
                    </Col>
                </Row>
                <Pagination className='d-flex justify-content-center mt-5'>
                    <Pagination.First className='paginationItemStyle me-1' />
                    <Pagination.Prev className='paginationItemStyle me-1' />
                    <Pagination.Item active className='paginationItemStyle me-1'>{1}</Pagination.Item>
                    <Pagination.Item className='paginationItemStyle me-1'>{2}</Pagination.Item>
                    <Pagination.Item className='paginationItemStyle me-1'>{3}</Pagination.Item>
                    <Pagination.Item className='paginationItemStyle me-1'>{4}</Pagination.Item>
                    <Pagination.Next className='paginationItemStyle me-1' />
                    <Pagination.Last className='paginationItemStyle' />
                </Pagination>
            </Container>
            <Routes>
                <Route exact path='/new' Component={New} />
            </Routes>
        </>
    );
}

export default News;

