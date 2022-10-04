import React from 'react'
import {convertToStandardDate} from '../util/DateUtil'

import Card from 'react-bootstrap/Card';


const RecentHistory = ({ journal }) => {
  const { tags,entries } = journal


  return (
    <div className='history-container'>
      <h1 style={{'textAlign':'center'}}>Recent Entries</h1>
      {
        (entries.length !== 0) ?
        entries.map((entry) => {
          return(
            <Card style={{ width: '100%' }} className='my-2' key={entry._id}>
              <Card.Body>
                <Card.Text>{entry.body}</Card.Text>
                <Card.Text>Posted - {convertToStandardDate(entry.createdAt)}</Card.Text>
              </Card.Body>
            </Card>
          )
        }) : <h1 style={{'textAlign':'center'}}>No Entries Yet</h1>
      }
    </div>
  )
}

export default RecentHistory