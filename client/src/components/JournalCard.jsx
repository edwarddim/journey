import React from 'react'
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import {convertToRelativeTimeBasic} from '../util/DateUtil'

const JournalCard = ({journal}) => {
  const navigate = useNavigate()
  return (
    <Card>
      <Card.Body>
        <Card.Title>{journal.name}</Card.Title>
        <Card.Text>
          Created - {convertToRelativeTimeBasic(journal.createdAt)}
        </Card.Text>
        <Button onClick={() => navigate(`/journals/${journal._id}`)} variant="primary">Write</Button>
      </Card.Body>
    </Card>
  )
}

export default JournalCard