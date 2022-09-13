import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Routes, Route, Link } from "react-router-dom"
import Dashboard from './views/Dashboard';

import "./assets/css/index.css"
import Journal from './views/Journal';

const App = () => {
    return (
        <>
            <Container className="py-2">
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