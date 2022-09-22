import React, {useEffect} from 'react';
import axios from 'axios';

const AllHistory = ({journal}) => {
  const {tags, _id} = journal
  console.log(_id)
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
    </div>
  )
}

export default AllHistory