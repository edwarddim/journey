import React, { useState } from 'react'
import '../assets/css/TagsInput.css'

const TagsInput = () => {

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
        </div>

    )
}

export default TagsInput