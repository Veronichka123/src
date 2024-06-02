import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/educational_materials.css';
import Image from 'react-bootstrap/Image';
import book from '../components/book.png';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Educational_materials(props) {
    const [allEdMaterials, setAllEdMatertials] = useState(null);

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
                
            })
            .catch((error) => {
                window.location.assign("login");
            })
        }
    }, [])

    useEffect(() => {
        axios.get('/education/all', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem("token")
            }
        }).then((response) => {
            setAllEdMatertials(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])

    const setIcon = (name) => {
        let pdf = RegExp(/^.*[.](pdf)$/);
        let docx = RegExp(/^.*[.](docx)$/);
        let doc = RegExp(/^.*[.](doc)$/);

        if(pdf.test(name)){
            return <i className="bi bi-filetype-pdf admin-doc-icon"></i>;
        }

        if(docx.test(name)){
            return <i className="bi bi-filetype-docx admin-doc-icon"></i>;
        }

        if(doc.test(name)){
            return <i className="bi bi-filetype-doc admin-doc-icon"></i>;
        }
    }

    const handleDownloadFile = (e) => {
        axios.get('/education/' + e.target.dataset.id, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem("token")
            }
        }).then((response) => {
            axios.get(response.data.filePath,{
                responseType: 'blob'
            }).then((responseFile) => {
                const href = URL.createObjectURL(responseFile.data);
                
                const link = document.createElement('a');
                link.href = href;
                link.setAttribute('download', response.data.file);
                document.body.appendChild(link);
                link.click();
            
                document.body.removeChild(link);
                URL.revokeObjectURL(href);
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (

        <Container className='cnt-ed-material p-0' fluid>
            <Container className='mt-2 d-flex justify-content-center' >
                <p className='border-bottom p-2 border-primary border-opacity-50 main-section-title'>УЧЕБНЫЕ МАТЕРИАЛЫ</p>
            </Container>
            <Row className='mt-3'>
                <Col xs={3} sm={3} md={5} lg={3}><Sidebar /></Col>
                <Col xs={9} sm={9} md={7} lg={9}>
                    <Container className='info_material_user px-5 py-4 d-flex justify-content-around shadow-sm'>
                        <Container>
                            <h5>Изучение теории.</h5>
                            <p className='text-secondary lead description-materials'>Это позволит Вам подготовиться к экзаменационному тестированию.</p>
                            <Button type="submit" href='/' className="my-2 btn_go_to_test d-flex justify-content-center align-items-center shadow-sm">
                                Перейти к тренировачным тестам
                            </Button>
                        </Container>
                        <img
                            src={book}
                            height="80"
                            width="80"
                            className='m-3'
                            alt='Logo'
                        />
                    </Container>

                    {allEdMaterials ?
                        allEdMaterials.map((edMaterial) => (
                            <Container fluid className='material-cnt p-3 rounded d-flex justify-content-between mt-3 shadow-sm'>
                                <Container fluid className='p-0 d-flex material-name-icon ms-0'>
                                {setIcon(edMaterial.file)}                                    
                                <p className='name-material my-auto ms-4' data-id={edMaterial.id} onClick={handleDownloadFile}>{edMaterial.name}</p>
                                </Container>
                                <i className="bi bi-download download-material-icon fw-bold" data-id={edMaterial.id} onClick={handleDownloadFile}></i>
                            </Container>
                        ))
                    : ""}
                </Col>

            </Row>
        </Container>
    );
}

export default Educational_materials;