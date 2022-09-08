import React,{useEffect, useState} from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import axios from "axios"

import TagsInput from '../components/TagsInput'
import History from '../components/History'

import Spinner from 'react-bootstrap/Spinner';
import spinner from "../assets/images/load_spinner.gif"

const Journal = ({}) => {
  const {id} = useParams()
  const [journal, setJournal] = useState()

  useEffect(() => {
    axios.get(`http://localhost:8000/api/journals/${id}`)
      .then(response => setJournal(response.data))
      .catch(error => console.log(error))
  },[])

  return (
    <div>
      {
        (journal) ?
          <div>
            <h1>{journal.name} Journal</h1>
            <TagsInput journal_id={id} />
            <Routes>
              <Route path="history" element={<History journal={journal} />} />
            </Routes>
          </div> : <Spinner animation="border" />
      }
    </div>
  )
}

export default Journal