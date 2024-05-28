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
    const [ShowUpdateNew, SetShowUpdateNew] = useState(false);

    const [newsData, setNewsData] = useState({ title: "", content: "", albumLink: null, pictures: [] })
    const [allNews, setAllNews] = useState(null)

    const [ShowDeleteNews, SetShowDeleteNews] = useState(false);

    const [errors, setErrors] = useState({ title: "", content: "", albumLink: "", pictures: "" })

    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            window.location.assign("login");
        }
        else {
            axios.get('/user', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem("token")
                }
            }).then((response) => {
                if (response.data.roles[0].name != 'ROLE_ADMIN') {
                    window.location.assign("login");
                }
                else {
                    setIsAdmin(true);
                }
            })
                .catch((error) => {
                    console.log(error);
                })
        }
    }, [])

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
        setNewsData({ title: "", content: "", albumLink: null, pictures: [] });
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
        setErrors({ ...errors, [event.target.name]: "" });
    };

    const handleGetPictures = (e) => {
        if (!newsData.albumLink) {
            setErrors(prevState => ({ ...prevState, albumLink: "вставьте ссылку на альбом, прежде чем загружать фотографии" }))
            return;
        }

        setErrors(prevState => ({ ...prevState, albumLink: "" }))

        axios.get("/newspicture?albumLink=" + newsData.albumLink).then((response) => {
            setNewsData(prevState => ({ ...prevState, pictures: response.data }));
        })
            .catch((error) => {
                setErrors(prevState => ({ ...prevState, albumLink: "не удалось получить фотографии с альбома" }));
                setNewsData(prevState => ({ ...prevState, pictures: [] }));
            });
    }

    const validate = () => {
        let noErrors = true;

        let r = new RegExp(/^https:[/]{2}vk.com[/]album[-]\d{1,}_\d{1,}$/);
        if (newsData.albumLink && !r.test(newsData.albumLink)) {
            setErrors(prevState => ({ ...prevState, albumLink: "неверная ссылка на альбом, пример: https://vk.com/album-12345678_123456789" }))
            noErrors = false;
        }
        else if (newsData.albumLink && newsData.pictures.length == 0) {
            setErrors(prevState => ({ ...prevState, albumLink: "нажмите кнопку загрузить фото, либо удалите ссылку на альбом" }))
            noErrors = false;
        }

        if (!newsData.title) {
            setErrors(prevState => ({ ...prevState, title: "заголовок не может быть пустым" }))
            noErrors = false;
        }
        else if (newsData.title.length > 200) {
            setErrors(prevState => ({ ...prevState, title: "длина заголовка не может быть больше, чем 200 символов" }))
            noErrors = false;
        }

        if (!newsData.content) {
            setErrors(prevState => ({ ...prevState, content: "содержание не может быть пустым" }))
            noErrors = false;
        }
        else if (newsData.content.length > 15000) {
            setErrors(prevState => ({ ...prevState, content: "длина содержания не может быть больше, чем 15000 символов" }))
            noErrors = false;
        }

        return noErrors;
    }

    const handleCreateNews = (e) => {
        if (!validate()) {
            return;
        }

        axios.post("/news", newsData).then((response) => {
            setAllNews(prevAllNews => [...prevAllNews, response.data]);
            SetShowCrNew(false);
            setNewsData({ title: "", content: "", albumLink: null, pictures: [] });
        }).catch((error) => { console.log(error) });
    }

    const handleMainPictureChange = (e) => {
        const news = newsData;

        let index = e.target.dataset.index; //Получаем индекс в массиве фотографии, которую будем ставить главной
        const indexPrev = news.pictures.findIndex(picture => picture.mainPicture); //Ищем текущую главную фотографию

        const prevPicture = {
            ...news.pictures[indexPrev],
            mainPicture: false
        };

        const newPicture = {
            ...news.pictures[index],
            mainPicture: true
        };

        news.pictures[indexPrev] = prevPicture;
        news.pictures[index] = newPicture;

        setNewsData(news);
    }

    const handleShowUpdate = (e) => {
        axios
            .get("/news/" + e.target.dataset.id)
            .then((response) => {
                setNewsData(response.data);
                SetShowUpdateNew(true);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const handleUpdateNews = (e) => {
        if (!validate()) {
            return;
        }

        axios.put("/news", newsData).then((response) => {

            const updatedNews = response.data;

            const index = allNews.findIndex(news => news.id == updatedNews.id);

            const updatedAllNews = allNews;

            updatedAllNews[index] = updatedNews;

            setAllNews(updatedAllNews);
            SetShowUpdateNew(false);
            setNewsData({ title: "", content: "", albumLink: null, pictures: [] });

        }).catch((error) => { console.log(error) });
    }

    const handleDeletePicture = (e) => {
        let isMainPicture = false;

        const updatedNewsData = newsData;

        const index = e.target.dataset.index;

        if (updatedNewsData.pictures[index].mainPicture) {
            isMainPicture = true;
        }

        updatedNewsData.pictures.splice(index, 1);

        if (isMainPicture && updatedNewsData.pictures.length > 0) {
            updatedNewsData.pictures[index].mainPicture = true;
        }

        setNewsData({
            ...newsData,
            pictures: updatedNewsData.pictures
        });
    }

    const getDate = (news) => {
        const months = {
            1: 31,
            2: 28,
            3: 31,
            4: 30,
            5: 31,
            6: 30,
            7: 31,
            8: 31,
            9: 30,
            10: 31,
            11: 30,
            12: 31
        }

        let hour = parseInt(news.creationDateTime.substring(11, 13)) + 3;
        let minute = parseInt(news.creationDateTime.substring(14, 16));
        let day = parseInt(news.creationDateTime.substring(8, 10));
        let month = parseInt(news.creationDateTime.substring(5, 7));
        let year = parseInt(news.creationDateTime.substring(0, 4));

        if(hour >= 24){
            hour = hour - 24;

            day++;

            if(day > months[month]){
                if(month == 2 && ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)){
                    day = 29;
                }
                else{
                    month++;
                    day = 1;
                }

                if(month > 12){
                    month = 1;
                    year++;
                }
            }
        }

        return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year < 10 ? '0' + year : year}`;
    }

    if (isAdmin) {
        return (
            <>
                <Container fluid className='main-cnt-news-admin p-0'>
                    <p className='text-center mt-2 main-section-title mb-1'>ПАНЕЛЬ АДМИНИСТРАТОРА</p>
                    <Container className='d-flex justify-content-center' fluid>
                        <p className='text-secondary border-bottom border-primary border-opacity-50 text-center title-subsection'>Управление новостями</p>
                    </Container>
                    <Row className='mt-3'>
                        <Col xs={3} sm={3} md={5} lg={3}><Sidebar /></Col>
                        <Col xs={9} sm={9} md={7} lg={9}>



                            <Container className='d-flex p-0' fluid>
                                <p className='d-flex align-items-center title-add-new m-0'>Создать новость?</p>
                                <Button className='ms-4 btn-admin-news' onClick={() => SetShowCrNew(true)}>Создать</Button>
                            </Container>

                            <Container className='mt-4 p-0' fluid>
                                <Row xs={1} md={2}>
                                    {allNews ? allNews.map((news) => (
                                        <Col>
                                            <Container className='admin-card-new px-5 py-4 mb-4 shadow rounded'>
                                                <Container fluid className='cnt-admin-name-new p-0'>
                                                    <p className='mb-1 admin-name-new'><span className="fw-bold">Наименование:</span> {news.title}</p>
                                                </Container>
                                                <p className='mb-1 name-count-photo'><span className="fw-bold">Дата создания: </span>{getDate(news)}</p>
                                                <p className='mb-3 name-count-photo'><span className="fw-bold">Фото: </span> {news.pictures.length} фотографий</p>
                                                <div className='d-flex justify-content-between'>
                                                    <Button className='btn-admin-new-edit' data-id={news.id} onClick={handleShowUpdate}>Изменить</Button>
                                                    <Button className='btn-admin-new-archive' data-id={news.id} onClick={handleShowDelete}>В архив</Button>
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
                    onHide={() => { SetShowCrNew(false); setErrors({ title: "", content: "", albumLink: "", pictures: "" }) }}
                    size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title className='news-modal-title'>
                            Создание новости
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form className='pt-4'>
                            <Form.Group controlId='NameChapter'>
                                <Form.Control type='text' placeholder='Введите название новости' name="title" onChange={handleChange} className='new-control-input shadow-sm' />
                                <Form.Label className='mb-3 mx-1 text-danger'>{errors.title}</Form.Label>
                                <Form.Control as="textarea" placeholder='Введите содержание новости' name="content" onChange={handleChange} className='new-description-input shadow-sm' />
                                <Form.Label className='mb-3 mx-1 text-danger'>{errors.content}</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        placeholder="Вставьте ссылку на альбом"
                                        className='shadow-sm new-control-input'
                                        name="albumLink"
                                        onChange={handleChange}
                                    />
                                    <Button className='btn-download-photo' id="button-addon2" onClick={handleGetPictures}>
                                        Загрузить фото
                                    </Button>
                                </InputGroup>
                                <Form.Label className='mb-3 mx-1 text-danger'>{errors.albumLink}</Form.Label>
                            </Form.Group>

                        </Form>
                        <Container fluid className='container-phonos-links scrollspy-example scrollspy-example' >
                            {newsData.pictures.length > 0 ? newsData.pictures.map((picture, i) => (
                                <Container className='link-photo-for-news d-flex mt-3  align-items-center text-wrap shadow-sm'>
                                    {picture.mainPicture ?
                                        <Form.Check
                                            data-index={i}
                                            defaultChecked
                                            onChange={handleMainPictureChange}
                                            className='mx-1'
                                            type={'radio'}
                                            name="mainPicture"
                                        />
                                        :
                                        <Form.Check
                                            data-index={i}
                                            onChange={handleMainPictureChange}
                                            className='mx-1'
                                            type={'radio'}
                                            name="mainPicture"
                                        />
                                    }

                                    <div className="p-1"> <Image
                                        src={picture.pictureLink}
                                        height="50"
                                        width="50"
                                        className='mx-auto d-block photo-format'
                                        alt='Logo'
                                    /></div>
                                    <p className='p-2 d-flex align-items-center m-0'>Фото {i + 1}</p>
                                    <Container className='cnt-for-link'>
                                        <a href={picture.pictureLink} target="_blank"><p className='p-2 d-flex align-items-center m-0 text-break link-to-photo'>{picture.pictureLink}</p></a>
                                    </Container>
                                    <Button className="ms-auto p-2 del-photo d-flex align-items-center m-0" data-index={i} onClick={handleDeletePicture}><i class="bi bi-x" style={{pointerEvents: 'none'}}></i></Button>
                                </Container>
                            )) : <p className='mx-1 my-2'>Тут будут отображаться фото с альбома</p>}
                        </Container>
                        <Button className="mt-3 mb-2 btn_form_new shadow-sm" onClick={handleCreateNews}>Сохранить</Button>
                    </Modal.Body>
                </Modal>

                <Modal
                    show={ShowUpdateNew}
                    onHide={() => { SetShowUpdateNew(false); setErrors({ title: "", content: "", albumLink: "", pictures: "" }); setNewsData({ title: "", content: "", albumLink: null, pictures: [] }) }}
                    size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title className='news-modal-title'>
                            Изменение новости
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form className='pt-4'>
                            <Form.Group controlId='NameChapter'>
                                <Form.Control type='text' placeholder='Введите название новости' name="title" defaultValue={newsData.title} onChange={handleChange} className='new-control-input shadow-sm' />
                                <Form.Label className='mb-3 mx-1 text-danger'>{errors.title}</Form.Label>
                                <Form.Control as="textarea" placeholder='Введите содержание новости' name="content" defaultValue={newsData.content} onChange={handleChange} className='new-description-input shadow-sm' />
                                <Form.Label className='mb-3 mx-1 text-danger'>{errors.content}</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        defaultValue={newsData.albumLink}
                                        placeholder="Вставьте ссылку на альбом"
                                        className='new-control-input shadow-sm'
                                        name="albumLink"
                                        onChange={handleChange}
                                    />
                                    <Button className='btn-download-photo' id="button-addon2" onClick={handleGetPictures}>
                                        Загрузить фото
                                    </Button>
                                </InputGroup>
                                <Form.Label className='mb-3 mx-1 text-danger'>{errors.albumLink}</Form.Label>
                            </Form.Group>

                        </Form>
                        <Container fluid className='container-phonos-links scrollspy-example scrollspy-example' >
                            {newsData.pictures.length > 0 ? newsData.pictures.map((picture, i) => (
                                <Container className='link-photo-for-news d-flex mt-3  align-items-center text-wrap shadow-sm'>
                                    {picture.mainPicture ?
                                        <Form.Check
                                            data-index={i}
                                            defaultChecked
                                            onChange={handleMainPictureChange}
                                            className='mx-1 r-button-main-photo'
                                            type={'radio'}
                                            name="mainPicture"
                                        />
                                        :
                                        <Form.Check
                                            data-index={i}
                                            onChange={handleMainPictureChange}
                                            className='mx-1'
                                            type={'radio'}
                                            name="mainPicture"
                                        />
                                    }

                                    <div className="p-1"> <Image
                                        src={picture.pictureLink}
                                        height="50"
                                        width="50"
                                        className='mx-auto d-block photo-format'
                                        alt='Logo'
                                    /></div>
                                    <p className='p-2 d-flex align-items-center m-0 link-photo-number '>Фото {i + 1}</p>
                                    <Container className='cnt-for-link'>
                                        <a href={picture.pictureLink} target="_blank"><p className='p-2 d-flex align-items-center m-0 text-break link-to-photo'>{picture.pictureLink}</p></a>
                                    </Container>
                                    <Button className="ms-auto p-2 del-photo d-flex align-items-center m-0" data-index={i} onClick={handleDeletePicture}><i class="bi bi-x" style={{pointerEvents: 'none'}}></i></Button>
                                </Container>
                            )) : <p className='mx-1 my-2'>Тут будут отображаться фото с альбома</p>}
                        </Container>
                        <Button className="mt-3 mb-2 btn_form_new" onClick={handleUpdateNews}>Сохранить</Button>
                    </Modal.Body>
                </Modal>

                <Modal
                    show={ShowDeleteNews}
                    onHide={() => { SetShowDeleteNews(false); }}>
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
}

export default News_admin;