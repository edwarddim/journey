import React from 'react'
import Card from 'react-bootstrap/Card';
import { convertToStandardDate } from '../../util/DateUtil'


const EntryDisplay = ({ entries }) => {
    return (
        entries.map((entry) => {
            return (
                <Card style={{ width: '100%' }} className='my-2' key={entry._id}>
                    <Card.Body>
                        <Card.Text>{entry.body}</Card.Text>
                        <Card.Text>Posted - {convertToStandardDate(entry.createdAt)}</Card.Text>
                    </Card.Body>
                </Card>
            )
        })
    )
}

export default EntryDisplay