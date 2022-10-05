import React from 'react'
import {convertToStandardDate} from '../util/DateUtil'

import Card from 'react-bootstrap/Card';
import EntryDisplay from './presentational/EntryCard';


const RecentHistory = ({ journal }) => {
  const { tags,entries } = journal

  return (
    <div className='history-container'>
      <h1 style={{'textAlign':'center'}}>Recent Entries</h1>
      {
        (entries.length !== 0) ? <EntryDisplay entries={entries} />: <h1 style={{'textAlign':'center'}}>No Entries Yet</h1>
      }
    </div>
  )
}

export default RecentHistory