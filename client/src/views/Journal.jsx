import React,{useEffect, useState} from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import axios from "axios"

import TagsInput from '../components/TagsInput'
import RecentHistory from '../components/RecentHistory'

import Spinner from 'react-bootstrap/Spinner';
import AllHistory from '../components/AllHistory'

const Journal = ({}) => {
  const {id} = useParams()
  const [journal, setJournal] = useState()

  useEffect(() => {
    axios.get(`http://localhost:8000/api/journals/${id}`)
      .then(response => setJournal(response.data))
      .catch(error => console.log(error))
  },[])

  return (
    <>
      {
        (journal) ?
          <>
            <h1>{journal.name} Journal</h1>
            <TagsInput journal_id={id} />
            <Routes>
              <Route path="recent" element={<RecentHistory journal={journal} />} />
              <Route path='history' element={<AllHistory journal={journal} />} />
            </Routes>
          </> : <Spinner animation="border" />
      }
    </>
  )
}

export default Journal