import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Question_form from './Question_form'


const CreateForm = () => {
    
  return (
      <div>
          <>
              <div className='section' >
                  <h1> Form Template </h1>
              </div>
              <div className='form_titile'>
                  <input type="text" placeholder='Untitled form' className='form_name' />
                  <Question_form />
                  
              </div>
          </>
    </div>
  )
}

export default CreateForm