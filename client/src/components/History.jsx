import React from 'react'

const History = ({ journal }) => {
    const {tags, entries} = journal
    console.log(entries)
    return (
        <div>
            <h1>Past Entries</h1>
            {
                tags.map((tag) => {
                    return(
                        <div className="tag-item" key={tag._id}>
                            <span className="text">{tag.name}</span>
                            <span
                                className="close"
                            >&times;</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default History