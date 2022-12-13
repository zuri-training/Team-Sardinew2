import React, { useState, useEffect } from 'react'
import "./QuestionForm.css"

const Question_form = () => {
    const [questions, setQuestions] = useState(
        [
            {
                questionText: "what is the capital city of Nigeria?",
                questionType: "radio",
                options: [
                    {optionText: "Ibadan"},
                    {optionText: "Lagos"},
                    {optionText: "Osun"},
                ],
                open: true,
                required:false
            }
        ]
    )

    function questionUI() {
        return  questions.map((qeus, i) => {
            // {questions[i].questionText}
        //     <div>
        //         <div>
        //           {questions.questionText}
        //        </div>
        //    </div>
            
        })
    }
  return (
      <div>
          <div className='container section'>
              <div className='question_title_section'>
                  <div className="question_form_top">
                      <input type="text" className='question_form_top_name' placeholder='untitled Document' />
                      <input type="text" className='question_form_top_decription' placeholder='form description' />
              
                  </div>
              </div>
             

              {questions.map((ques, i) => {
                  return (
                      <div className='card' key={i}>
                      <div className='card-body'  > 
                          <div>{ques.questionText}</div>
                              <div>{ques.options.map((op, j) => (
                                  <div key={j}>
                                      <input type={ques.questionType} />
                                      <label key={ques.questionText}>{ op.optionText}</label>
                              </div>
                          ))}</div>
                      </div>
                      </div>
                  )
               })}
          </div>
    </div>
  )
}

export default Question_form