import React, {useEffect, useState, useCallback} from 'react'


const History = ({ journal }) => {
  const { tags,entries } = journal

  return (
    <div className='history-container'>
      <h1 style={{'textAlign':'center'}}>Past Entries</h1>
      {
        tags.map((tag) => {
          return (
            <div className="tag-item" key={tag._id}>
              <span className="text">{tag.name}</span>
              <span
                className="close"
              >&#43;</span>
            </div>
          )
        })
      }
      {
        entries.map((entry) => {
          return(
            <div key={entry._id}>
              <p>{entry.body}</p>
              <p>Posted - {new Date(entry.createdAt).toLocaleDateString('en-US')}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default History