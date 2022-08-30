import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'


const Dashboard = ({ }) => {

  const [journals, setJournals] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8000/api/journals")
      .then(response => setJournals(response.data))
      .catch(error => console.log(error))

  }, [])

  return (
    <div>
      <h1>Your Journals</h1>
      {
        journals.map((journal) => {
          return (
            <div key={journal._id}>
              <Link to={`/journals/${journal._id}`}>{journal.name}</Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default Dashboard