import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/TagsInput.css"

const TagsInput = ({journal_id}) => {
    const [tags, setTags] = useState([])
    const [entry, setEntry] = useState("")

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
        <div>
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
                <Link className='history-btn' to="history">
                    <button>See History</button>
                </Link>
            </div>
        </div>
    )
}

export default TagsInput