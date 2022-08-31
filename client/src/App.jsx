import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Routes, Route } from "react-router-dom"
import Dashboard from './views/Dashboard';
import ParticlesContainer from './views/ParticlesContainer'

import "./assets/css/index.css"
import Journal from './views/Journal';

const App = () => {

    return (
        <>
            {/* <ParticlesContainer /> */}
            <Container>
                <h1>Heroes' Journey</h1>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/journals/:id/*" element={<Journal />} />

                    {/* <Route path="/login" element={<Auth />} /> */}
                </Routes>
            </Container>
        </>
    )
}

export default App;