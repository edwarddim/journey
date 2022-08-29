import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap';
import { Routes, Route } from "react-router-dom"
import ParticlesContainer from './views/ParticlesContainer'

import "./assets/css/index.css"
import styles from './App.module.css'
import Auth from './views/Auth';
import Journal from './views/Journal';
import TagsInput from './components/TagsInput';

const App = () => {

    return (
        <>
            {/* <ParticlesContainer /> */}
            <Container>
                <h1>Heroes' Journey</h1>
                <Routes>
                    <Route path="/" element={<Journal />} />
                    <Route path="/login" element={<Auth />} />
                </Routes>
            </Container>
        </>
    )
}

export default App;