import React, { useEffect, useState } from 'react'
import axios from "axios"
import CreateJournal from '../components/CreateJournal'
import JournalCard from '../components/JournalCard'


const Dashboard = ({ }) => {
  const [journals, setJournals] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8000/api/journals")
      .then(response => setJournals(response.data))
      .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <h1>Start something New!</h1>
      <CreateJournal />
      <h2 className='mt-3'>Journal Notebook</h2>
      <div className='journal-container py-1'>
        {
          journals.map((journal) => {
            return (
              <JournalCard key={journal._id} journal={journal} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Dashboard