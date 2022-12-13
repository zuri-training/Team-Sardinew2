import React from 'react'
import uuid from "react-uuid"
import {useNavigate} from "react-router-dom"

const Dashboard = () => {
    const navigate = useNavigate()
    const createForm = () => {
        const id = uuid()
        console.log(id)
        navigate("/form/" + id)
    }
  return (
      <div>
          <h1>Questions paper</h1>
          <button onClick={createForm}> create Form</button>
    </div>
  )
}

export default Dashboard