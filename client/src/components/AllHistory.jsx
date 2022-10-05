import React, { useEffect, useState } from 'react';

import EntryDisplay from './presentational/EntryCard';


const AllHistory = ({ journal }) => {

  const [filteredEntries, setFilteredEntries] = useState()
  const [filterToggle, setFilterToggle] = useState(false)
  const [activeTagID, setActiveTagID] = useState(null)

  const { tags, _id, entries } = journal

  const filterTags = (id) => {
    setFilterToggle(true)
    setActiveTagID(id)
    const filteredEntries = entries.filter(entry => entry.tags.includes(id))
    setFilteredEntries(filteredEntries)
  }

  useEffect(() => {
    // axios.get(`http://localhost:8000/api/`)
  }, [])
  return (
    <div className='history-container'>
      <h1 style={{ 'textAlign': 'center' }}>All Entries</h1>
      <h3>Click tags to filter entries</h3>
      {tags.map((tag, index) => (
        <div 
          className={`tag-item ${(activeTagID === tag._id)?'active':''}`} 
          key={index}
          onClick={() => filterTags(tag._id)}
        >
          <span className="text">{tag.name}</span>
        </div>
      ))}
      {
        filterToggle ? <EntryDisplay entries={filteredEntries} />: <EntryDisplay entries={entries} />
      }

    </div>
  )
}

export default AllHistory