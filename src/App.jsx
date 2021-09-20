import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert'

const App = () => {
    return (
        <div>
            <h1>APP</h1>
            <Alert variant={"success"}>
                <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you like.
            </Alert>
        </div>
    )
}

export default App
