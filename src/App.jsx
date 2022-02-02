import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Auth from './views/Auth';
import ParticlesContainer from './views/ParticlesContainer'

import "./assets/css/index.css"
import styles from './App.module.css'

const App = () => {


    console.log(styles)

    const style = {
        position: "absolute",
        top: 15,
        left: 15,
    }

    return (
        <>
            <ParticlesContainer />
            <Container style={style}>
                <h1 className={styles.header}>Heroes' Journey</h1>
                {/* <Auth /> */}
            </Container>
        </>
    )
}

export default App
