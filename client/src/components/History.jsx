import React from 'react'
import {convertToStandardDate} from '../util/DateUtil'


const History = ({ journal }) => {
  const { tags,entries } = journal

  const addTagToFilter = (tag_id) => {
    console.log(tag_id)
  }

  return (
    <div className='history-container'>
      <h1 style={{'textAlign':'center'}}>Past Entries</h1>
      {
        tags.map((tag) => {
          return (
            <div className="tag-item" key={tag._id}>
              <span className="text">{tag.name}</span>
              <span
                onClick={() => addTagToFilter(tag._id)}
                className="add-tag"
              >&#43;</span>
            </div>
          )
        })
      }
      {
        (entries.length !== 0) ?
        entries.map((entry) => {
          return(
            <div key={entry._id}>
              <p>{entry.body}</p>
              <p>Posted - {convertToStandardDate(entry.createdAt)}</p>
            </div>
          )
        }) : <h1 style={{'textAlign':'center'}}>No Entries Yet</h1>
      }
    </div>
  )
}

export default History