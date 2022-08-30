import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import TagsInput from '../components/TagsInput'
import axios from "axios"

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
          <TagsInput />
        </div> : <img src={spinner} alt="loader" />
      }
    </div>
  )
}

export default Journal