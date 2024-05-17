import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../components/Sidebar';
import '../styles/news_admin.css';
import { Modal, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import ham from '../components/hamster.jpg';
import Image from 'react-bootstrap/Image';
import axios, { all } from 'axios';

function News_admin(props) {
    const [ShowCreateNew, SetShowCrNew] = useState(false);

    const [newsData, setNewsData] = useState({ title: "", content: "", albumLink: null, pictures: []})
    const [allNews, setAllNews] = useState(null)

    const [ShowDeleteNews, SetShowDeleteNews] = useState(false);

    const handleDeleteNews = (e) => {
        SetShowDeleteNews(false);
        axios
        .delete("/news/" + newsData.id)
        .then((response) => {
            SetShowDeleteNews(false);
            const item = allNews.filter(news => news.id != response.data);
            setAllNews(item);
        })
        .catch((error) => {
            console.log(error);
        });
        setNewsData({ title: "", content: "", albumLink: null, pictures: []});
    }

    const handleShowDelete = (e) => {
        axios
        .get("/news/" + e.target.dataset.id)
        .then((response) => {
            setNewsData(response.data);
            SetShowDeleteNews(true);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        axios
            .get("/news/all")
            .then((response) => {
                setAllNews(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleChange = (event) => {
        setNewsData({ ...newsData, [event.target.name]: event.target.value });
    };

    const handleGetPictures = (e) => {
        if(!newsData.albumLink) return;

        axios.get("/newspicture?albumLink=" + newsData.albumLink).then((response) => {
            const item = newsData;
            const updatedNewsData = {
                ...item,
                pictures: response.data
            }
            console.log(response.data);
            setNewsData(updatedNewsData);
        }).catch((error) => { console.log(error)});
    }

    const handleCreateNews = (e) => {
        if(newsData.albumLink && newsData.pictures.length == 0){
            console.log("Нажмите кнопку загрузить фото, либо удалите ссылку на альбом");
            return;
        }

        axios.post("/news", newsData).then((response) => {
            setAllNews(prevAllNews => [...prevAllNews, response.data]);
            SetShowCrNew(false);
            setNewsData({ title: "", content: "", albumLink: null, pictures: []});
        }).catch((error) => { console.log(error)});
    }

    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs={4}><Sidebar /></Col>
                    <Col xs={8}>

                        <h5 className='text-center mt-2'>ПАНЕЛЬ АДМИНИСТРАТОРА</h5>
                        <Container className='d-flex justify-content-center' fluid>
                            <p className='text-secondary border-bottom border-primary border-opacity-50 text-center'>Управление новостями</p>
                        </Container>

                        <Container className='d-flex mt-3' fluid>
                            <h5 className='d-flex align-items-center'>Желаете создать новость?</h5>
                            <Button className='ms-4 btn-admin-news' onClick={() => SetShowCrNew(true)}>Создать новость</Button>
                        </Container>

                        <Container className='mt-5 container-news p-4' fluid>
                            <Row xs={1} md={2}>
                                {allNews ? allNews.map((news) => (
                                    <Col>
                                        <Container className='admin-card-new p-4 mb-4'>
                                            <p className='mb-1'><span className="fw-bold">Наименование:</span> {news.title}</p>
                                            <p className='mb-1'><span className="fw-bold">Дата создания: </span>{
                                             ' ' + news.creationDateTime.substring(8, 10) + '.' +
                                             news.creationDateTime.substring(5, 7) + '.' +
                                             news.creationDateTime.substring(0, 4)
                                             }</p>
                                            <p className='mb-3'><span className="fw-bold">Фото: </span> {news.pictures.length} фотографий</p>
                                            <div className='d-flex justify-content-around'>
                                                <Button className='btn-admin-new-redirect' >К новости</Button>
                                                <Button className='btn-admin-new-edit'>Изменить</Button>
                                                <Button className='btn-admin-new-delete' data-id={news.id} onClick={handleShowDelete}>Удалить</Button>
                                            </div>
                                        </Container>

                                    </Col>
                                ))
                                : "Новостей еще не создано"}
                            </Row>
                        </Container>


                    </Col>
                </Row>
            </Container>

            <Modal
                show={ShowCreateNew}
                onHide={() => SetShowCrNew(false)}
                size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>
                        Создание новости
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='pt-4'>
                        <Form.Group controlId='NameChapter'>
                            <Form.Control type='text' placeholder='Введите название новости' name="title" onChange={handleChange} className='new-control-input mb-3' />
                            <Form.Control as="textarea" placeholder='Введите содержание новости' name="content" onChange={handleChange} className='new-description-input mb-3' />
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="Вставьте ссылку на альбом"
                                    className='new-control-input'
                                    name="albumLink"
                                    onChange={handleChange}
                                />
                                <Button className='btn-download-photo' id="button-addon2" onClick={handleGetPictures}>
                                    Загрузить фото
                                </Button>
                            </InputGroup>
                        </Form.Group>

                    </Form>
                    <Container fluid className='container-phonos-links scrollspy-example scrollspy-example' >
                        {newsData.pictures.length > 0 ? newsData.pictures.map((picture) => (
                            <Container className='link-photo-for-news d-flex mt-3  align-items-center text-wrap'>
                                <div class="p-1"> <Image 
                                    src={picture.pictureLink}
                                    height="50"
                                    width="50"
                                    className='mx-auto d-block photo-format'
                                    alt='Logo'
                                /></div>
                                <p className='p-2 d-flex align-items-center m-0'>Фото 1</p>
                                <p className='p-2 d-flex align-items-center m-0 text-break'>{picture.pictureLink}</p>
                                <p class="ms-auto p-2 del-photo d-flex align-items-center m-0">Удалить фото</p>
                            </Container>
                        )): "Тут будут отображаться фото с альбома"}
                    </Container>
                    <Button className="mt-3 mb-2 btn_form_new" onClick={handleCreateNews}>Сохранить</Button>
                </Modal.Body>
            </Modal>

            <Modal
                show={ShowDeleteNews}
                onHide={() => { SetShowDeleteNews(false);}}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Удаление
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5 className='fw-light'>Вы действительно хотите удалить новость <span className="fw-bold">{newsData.title}</span> с полной потерей данных?</h5>
                    <Button className="mt-3 mb-2 btn_delete_chapter-service " onClick={handleDeleteNews}>Удалить</Button>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default News_admin;