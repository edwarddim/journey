import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useNavigate } from 'react-router-dom';

const CreateJournal = () => {

  const [name, setName] = useState();
  const [validationErrors, setValidationErrors] = useState();

  const navigate = useNavigate()

  const createJournal = e => {
    e.preventDefault();
    const body = {
      name
    }
    axios.post("http://localhost:8000/api/journals", body)
      .then(response => {
        const { _id } = response.data
        navigate(`/journals/${_id}`)
      })
      .catch(err => {
        const errorResponse = err.response.data.errors;
        const errors = {}
        for (const key of Object.keys(errorResponse)) {
          errors[key] = errorResponse[key].message
        }
        setValidationErrors(errors)
      })
  }


  return (
    <div>
      <Form onSubmit={createJournal}>
        <Form.Group controlId="formJournal">
          <Row className='align-items-bottom'>
            <Col xs={8}>
              <FloatingLabel
                controlId="floatingJournal"
                label="Start a new journal"
              >
                <Form.Control
                  onChange={e => setName(e.target.value)}
                  type="text"
                  placeholder="Start a New Journal" />
              </FloatingLabel>
            </Col>
            <Col>
              <Button>Create</Button>
            </Col>
          </Row>
          {
            validationErrors?.name &&
            <Form.Text className="text-danger">
              {validationErrors.name}
            </Form.Text>
          }
        </Form.Group>
      </Form>
    </div>
  )
}

export default CreateJournal