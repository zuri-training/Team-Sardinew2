import React,{useState} from 'react'

const Form = () => {
    const [formContent, setformContent] = useState([])
    const [onEdit, setOnEdit] = useState(false)
    const [textField, setTextField] = useState("")
    const [editedField, seteditedField] = useState("")
    const addQuestion = () => {
        const field = {
            'name': `question_${formContent.length}`,
            "label": "Edit Title",
            "question_type": "question_type", // pararam, multichoice
            "list": []
        }
        setformContent([...formContent, field])
        console.log(formContent)
    }
    const editField = (fieldName, fieldLabel) => {
        const formFeilds = [...formContent];
        const feildIndex = formFeilds.findIndex(f => f.name === fieldName)
        if (feildIndex > -1) {
            formFeilds[feildIndex].label = fieldLabel;
            setformContent(formFeilds)
        }
    }

    const editFieldType = (fieldName, fieldLabel) =>{
          const formFeilds = [...formContent];
        const feildIndex = formFeilds.findIndex(f => f.name === fieldName)
        if (feildIndex > -1) {
            formFeilds[feildIndex].question_type = fieldLabel;
            setformContent(formFeilds)
        }
    }
    const addFieldOption = (fieldName, option) =>{
          const formFeilds = [...formContent];
        const feildIndex = formFeilds.findIndex(f => f.name === fieldName)
        if (feildIndex > -1) {
            if(option && option !== "")
            formFeilds[feildIndex].list.push(option);
            setformContent(formFeilds)
            setTextField("")
        }
    }

    return (
      
      <div className='container '>
          <div className='card'>
              <div className='card-body'>
                  <div className="card-title">Question</div>
                  <div className="card-text">
                      {formContent.map((field) => {
                          return (
                              <div key={field.name} >
                              <div className='d-flex justify-content-between item-center'>
                              <div >
                                          { onEdit?<input value={field.label}  onChange={(e) =>editField(field.name, e.target.value)} type='text' onBlur={() =>setOnEdit()}/>
                                              :<label onClick={()=>setOnEdit(true)} htmlFor="">{field.label}</label>
                                          }
                                  </div>
                                  <select name="" id="" onChange={(e) => editFieldType(field.name, e.target.value)}>
                                      <option value="">Question Type</option>
                                      <option value="short_answer">Short Answer</option>
                                      <option value="paragraph" >paragraph</option>
                                      <option value="multichoice" >MultiChoice </option>
                                  </select>
                                  </div>
                                  <div className='my-4'>
                                      { 
                                          field.question_type === "short_answer" && <input className='form-control' type='text' placeholder={field.label} />
                                      }
                                      { 
                                          field.question_type === 'paragraph' && <textarea className='form-control' row={4}  placeholder={field.label} />
                                      }
                                      { 
                                          field.question_type === "multichoice" && 
                                      <div className='my-4 flex'>
                                        
                                          <select className='form-control'>
                                                  {field.list.map((item) => <option key={item} value={item} >{ item}</option> )}
                                         </select>
                                         <div className='flex '>
                                            <input className='felx-1' type='text' onChange={e => setTextField(e.target.value)} value={textField} placeholder="Add an Option" />
                                            <button className='btn btn-info block' onClick={() =>addFieldOption(field.name, textField)} >Add</button>
                                        </div>
                                      </div>
                                      }
                                  </div>
                                  </div>
                          )
                      })}
                  </div>
                  
              </div>
              <button onClick={() => addQuestion()} className='btn btn-primary btn-medium' > Add Quetion</button>
              
   </div>
   {/* review  */}
   <div className='card'>
    <div className="card-title">Question Preview</div>
                  <div className="card-text">
                      {formContent.map((field) => {
                          return (
                              <div key={field.name} >
                              <div className='d-flex justify-content-between item-center'>
                              <div >
                                          { onEdit && (editedField === field.name)?<input value={field.label}  onChange={(e) =>editField(field.name, e.target.value)} type='text' onBlur={() =>{setOnEdit(false); editedField("")}}/>
                                              :<label onClick={()=>{setOnEdit(true); setTextField(field.name)}} htmlFor="">{field.label}</label>
                                          }
                                  </div>
                                  
                                  </div>
                                  <div className='my-4'>
                                      { 
                                          field.question_type === 'short_answer' && <input className='form-control' type='text' placeholder={field.label} />
                                      }
                                      { 
                                          field.question_type === 'paragraph' && <input className='form-control' row={4}  placeholder={field.label} />
                                      }
                                      { 
                                          field.question_type === "multichoice" && 
                                          <select className='form-control'>
                                                  {field.list.map((item) => <option key={item} value={item} >{ item}</option> )}
                                         </select>
                                      }
                                  </div>
                                  </div>
                          )
                      })}
                  </div>
   </div>
    </div>
  )
}

export default Form