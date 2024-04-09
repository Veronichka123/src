import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import My_page from './My_page';
import {Route, Routes } from 'react-router-dom';


class Home extends Component {
    render() {
        return (
            <>
                <div>
                <Link to='/my_page' className='link_login d-flex justify-content-center'>Зарегистироваться</Link>
                </div>
                <Routes>
                    <Route exact path='/my_page' Component={My_page} />
                </Routes>
            </>
        );
    }
}

export default Home;