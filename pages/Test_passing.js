import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/test_passing.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Form } from 'react-bootstrap';

function Test_passing(props) {
    return (
        <Container fluid className='main-ctn-twst-passing p-0'>
            <Container className='mt-2 d-flex justify-content-center' >
                <p className='border-bottom p-2 border-primary border-opacity-50 main-section-title'>ТРЕНИРОВОЧНЫЕ ТЕСТЫ</p>
            </Container>
            <Row className='mt-3'>
                <Col xs={3} sm={3} md={5} lg={3}><Sidebar /></Col>
                <Col xs={9} sm={9} md={7} lg={9}>
                    <p className='m-0 test-passing-name-test'>Тест по владению оружием 1</p>

                    <p className='mb-0 mt-2 all-count-question-title'>Вопросов: 17</p>

                    <Container fluid className='p-4 test-passing-question shadow-sm rounded ms-0 mt-3'>
                        <p className='text-secondary m-0 title-question-number'>Вопрос 1</p>
                        <p className='mb-0 mt-3 test-passing-name-question'>Как звали прабабку Пэлка?</p>
                        <p className='text-secondary mb-0 mt-3 count-select-answers-title'>Выберите один вариант ответа</p>
                        <Container fluid className='d-flex p-2 mt-2 test-passion-variant-answer shadow-sm ms-0'>
                            <Form.Check className='m-0 d-flex align-items-center'

                                type="radio"
                                name="Items"
                            />
                            <p className='my-auto ms-3 test-passing-variant-answer'>Изольда</p>
                        </Container>
                        <Container fluid className='d-flex p-2 mt-2 test-passion-variant-answer shadow-sm ms-0'>
                            <Form.Check className='m-0 d-flex align-items-center'

                                type="radio"
                                name="Items"
                            />
                            <p className='my-auto ms-3 test-passing-variant-answer'>Изольда</p>
                        </Container>

                        <Container fluid className='d-flex p-2 mt-2 test-passion-variant-answer shadow-sm ms-0'>
                            <Form.Check className='m-0 d-flex align-items-center'

                                type="radio"
                                name="Items"
                            />
                            <p className='my-auto ms-3 test-passing-variant-answer'>Изольда</p>
                        </Container>
                    </Container>

                    <Container fluid className='p-4 test-passing-question shadow-sm rounded ms-0 mt-3'>
                        <p className='text-secondary m-0 title-question-number'>Вопрос 2</p>
                        <p className='mb-0 mt-3 test-passing-name-question'>Как звали прабабку Пэлка?</p>
                        <p className='text-secondary mb-0 mt-3 count-select-answers-title'>Выберите один или несколько вариантов ответа</p>
                        <Container fluid className='d-flex p-2 mt-2 test-passion-variant-answer shadow-sm ms-0'>
                            <Form.Check className='m-0 d-flex align-items-center'

                                type="checkbox"
                                name="Items"
                            />
                            <p className='my-auto ms-3 test-passing-variant-answer'>Изольда</p>
                        </Container>
                        <Container fluid className='d-flex p-2 mt-2 test-passion-variant-answer shadow-sm ms-0'>
                            <Form.Check className='m-0 d-flex align-items-center'

                                type="checkbox"
                                name="Items"
                            />
                            <p className='my-auto ms-3 test-passing-variant-answer'>Изольда</p>
                        </Container>

                        <Container fluid className='d-flex p-2 mt-2 test-passion-variant-answer shadow-sm ms-0'>
                            <Form.Check className='m-0 d-flex align-items-center'

                                type="checkbox"
                                name="Items"
                            />
                            <p className='my-auto ms-3 test-passing-variant-answer'>Изольда</p>
                        </Container>
                    </Container>

                    <Container fluid className='p-4 test-passing-question shadow-sm rounded ms-0 mt-3'>
                        <p className='text-secondary m-0 title-question-number'>Вопрос 3</p>
                        <p className='mb-0 mt-3 test-passing-name-question'>Как звали прабабку Пэлка?</p>
                        <p className='text-secondary mb-0 mt-3 count-select-answers-title'>Впишите в поле верный ответ</p>
                        <Form.Control type='text' placeholder='Ответ:' className='test-passing-text-input shadow-sm mt-2' />

                    </Container>


                    <Container fluid className='p-4 test-passing-question shadow-sm rounded ms-0 mt-3'>
                        <p className='text-secondary m-0 title-question-number'>Вопрос 1</p>
                        <p className='mb-0 mt-3 test-passing-name-question'>Как звали прабабку Пэлка?</p>
                        <p className='text-secondary mb-0 mt-3 count-select-answers-title'>Выберите один вариант ответа</p>
                        <Container fluid className='d-flex p-2 mt-2 test-passion-variant-answer shadow-sm ms-0'>
                            <Form.Check className='m-0 d-flex align-items-center'
                                disabled
                                type="radio"
                                name="Items"
                            />
                            <p className='my-auto ms-3 test-passing-variant-answer'>Изольда</p>
                        </Container>
                        <Container fluid className='d-flex p-2 mt-2 test-passion-variant-answer shadow-sm ms-0'>
                            <Form.Check className='m-0 d-flex align-items-center'
                                disabled
                                type="radio"
                                name="Items"
                            />
                            <p className='my-auto ms-3 test-passing-variant-answer'>Изольда</p>
                        </Container>

                        <Container fluid className='d-flex p-2 mt-2 test-passion-variant-answer shadow-sm ms-0'>
                            <Form.Check className='m-0 d-flex align-items-center'
                                disabled
                                type="radio"
                                name="Items"
                            />
                            <p className='my-auto ms-3 test-passing-variant-answer'>Изольда</p>
                        </Container>

                        <Container fluid className='p-0 d-flex align-items-center mt-3'>
                            <i class="bi bi-check correct-answer-icon"></i>
                            <p className='mb-0 correct-answer-text fw-bold'>Ответ верный</p>
                        </Container>
                    </Container>

                    <Container fluid className='p-4 test-passing-question shadow-sm rounded ms-0 mt-3'>
                        <p className='text-secondary m-0 title-question-number'>Вопрос 2</p>
                        <p className='mb-0 mt-3 test-passing-name-question'>Как звали прабабку Пэлка?</p>
                        <p className='text-secondary mb-0 mt-3 count-select-answers-title'>Выберите один или несколько вариантов ответа</p>
                        <Container fluid className='d-flex p-2 mt-2 test-passion-variant-answer shadow-sm ms-0'>
                            <Form.Check className='m-0 d-flex align-items-center'
                                disabled
                                type="checkbox"
                                name="Items"
                            />
                            <p className='my-auto ms-3 test-passing-variant-answer'>Изольда</p>
                        </Container>
                        <Container fluid className='d-flex p-2 mt-2 test-passion-variant-answer shadow-sm ms-0'>
                            <Form.Check className='m-0 d-flex align-items-center'
                                disabled
                                type="checkbox"
                                name="Items"
                            />
                            <p className='my-auto ms-3 test-passing-variant-answer'>Изольда</p>
                        </Container>

                        <Container fluid className='d-flex p-2 mt-2 test-passion-variant-answer shadow-sm ms-0'>
                            <Form.Check className='m-0 d-flex align-items-center'
                                disabled
                                type="checkbox"
                                name="Items"
                            />
                            <p className='my-auto ms-3 test-passing-variant-answer'>Изольда</p>
                        </Container>

                        <Container fluid className='p-0 d-flex align-items-center mt-3'>
                            <i class="bi bi-x no-correct-answer-icon"></i>
                            <p className='mb-0 no-correct-answer-text fw-bold'>Ответ не верный</p>
                        </Container>
                    </Container>

                    <Container fluid className='p-4 test-passing-question shadow-sm rounded ms-0 mt-3'>
                        <p className='text-secondary m-0 title-question-number'>Вопрос 3</p>
                        <p className='mb-0 mt-3 test-passing-name-question'>Как звали прабабку Пэлка?</p>
                        <p className='text-secondary mb-0 mt-3 count-select-answers-title'>Впишите в поле верный ответ</p>
                        <Form.Control disabled type='text' placeholder='Ответ:' className='test-passing-text-input shadow-sm mt-2' />

                        <Container fluid className='p-0 d-flex align-items-center mt-3'>
                            <i class="bi bi-check correct-answer-icon"></i>
                            <p className='mb-0 correct-answer-text fw-bold'>Ответ верный</p>
                        </Container>
                    </Container>


                    <Button className='btn-finish-test-attempt mt-4 d-flex align-items-center justify-content-center' href='test_passing'>Завершить прохождение</Button>
                </Col>

            </Row>
        </Container>

    );
}

export default Test_passing;