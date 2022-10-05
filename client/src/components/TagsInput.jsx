import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/TagsInput.css"

const TagsInput = ({ journal_id }) => {
  const [tags, setTags] = useState([])
  const [entry, setEntry] = useState("")
  const [activeButton, setActiveButton] = useState(0)

  const handleKeyDown = e => {
    if (e.key !== 'Enter') return
    const value = e.target.value
    if (!value.trim()) return
    setTags([...tags, value])
    e.target.value = ''
  }

  const removeTag = index => setTags(tags.filter((el, i) => i !== index))

  const submitEntry = () => {
    const body = {
      tags,
      entry
    }
    axios.post(`http://localhost:8000/api/journals/${journal_id}`, body)
      .then(response => console.log(response.data))
      .catch(error => console.log(error))
  }

  return (
    <div style={{ width: '100%' }}>
      <div className="tags-input-container">
        {tags.map((tag, index) => (
          <div className="tag-item" key={index}>
            <span className="text">{tag}</span>
            <span
              className="close"
              onClick={() => removeTag(index)}
            >&times;</span>
          </div>
        ))}
        <input
          onKeyDown={handleKeyDown}
          type="text"
          className="tags-input"
          placeholder="ENTER TAGS"
        />
      </div>
      <div className="tags-input-container">
        <textarea
          name="entry"
          onChange={e => setEntry(e.target.value)}
          className="tags-input"
          placeholder="Write your thoughts" cols="30" rows="10"
        ></textarea>
      </div>
      <div>
        <button onClick={submitEntry} className='submit'>Submit</button>
        <Link to="recent">
          <button onClick={() => setActiveButton(1)} className={`history-btn ${(activeButton===1) ? 'active':''}`}>See Recent Entries</button>
        </Link>
        <Link to="history">
          <button onClick={() => setActiveButton(2)} className={`history-btn ${(activeButton===2) ? 'active':''}`}>See All Entries</button>
        </Link>
      </div>
    </div>
  )
}

export default TagsInput