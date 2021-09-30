import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Auth from './views/Auth';

const App = () => {
    return (
        <Container>
            <h1>APP</h1>
            <Auth />
        </Container>
    )
}

export default App
