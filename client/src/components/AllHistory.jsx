import React, {useEffect} from 'react';
import {convertToStandardDate} from '../util/DateUtil'

import Card from 'react-bootstrap/Card';


const AllHistory = ({journal}) => {
  const {tags, _id, entries} = journal
  useEffect(() => {
    // axios.get(`http://localhost:8000/api/`)
  }, [])
  return (
    <div className='history-container'>
        <h1 style={{'textAlign':'center'}}>All Entries</h1>
        {tags.map((tag, index) => (
            <div className="tag-item" key={index}>
                <span className="text">{tag.name}</span>
                <span
                    className="close"
                    onClick={() => removeTag(index)}
                >&times;</span>
            </div>
        ))}
        {
          entries.map((entry) => {
            return(
              <Card style={{ width: '100%' }} className='my-2' key={entry._id}>
                <Card.Body>
                  <Card.Text>{entry.body}</Card.Text>
                  <Card.Text>Posted - {convertToStandardDate(entry.createdAt)}</Card.Text>
                </Card.Body>
              </Card>
            )
          })
        }
    </div>
  )
}

export default AllHistory