import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './UpdateBook.css'

function UpdateBook() {

  const {id} = useParams()
  const navigate = useNavigate()

  const [updateBook, setupdateBook] = useState({
    title:'',
    author:'',
    published:''
  })
  const [errors, setErrors] = useState({})

  useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/api/books/${id}/`)
    .then((res) => {
      setupdateBook(res.data.book)
    })
  },[id])

  const handleChange = (e) => {
    setupdateBook({...updateBook, [e.target.name]:e.target.value})
  } 

  const handleValidation = () => {

      let tempErrors = {}
      let isValid = true

      if (updateBook.title.trim() == '' ) {
        isValid = false
        tempErrors.title = "*Title field is required"
      }
      if (updateBook.author.trim() == '') {
        isValid = false
        tempErrors.author = "*Author field is required"
      }
      if (updateBook.published == '') {
        isValid = false
        tempErrors.published = "*Published field is required"
      }
      setErrors(tempErrors)
      return isValid
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (handleValidation()) {
      if(window.confirm("You are about to update an existing book record")){
        axios.put(`http://127.0.0.1:8000/api/books/${id}/`, updateBook)
        .then(res => {
          alert(res.data.message)
          navigate('/')
        })
      }
    }
  }

  return (
    
    <div className='form'>
      <h1>Update Book</h1>
      <form>
        <div className="title">
          <input type="text"
            placeholder='Title'
            name='title'
            value={updateBook.title}
            onChange={(e) => handleChange(e)} 
          /> 
          <br />
          {errors.title && <span>{errors.title}</span>}
        </div>

        <div className="author">
          <input type="text"
            placeholder='Author'
            name='author'
            value={updateBook.author}
            onChange={(e) => handleChange(e)}
           />
           <br />
           {errors.author && <span>{errors.author}</span>}
        </div>

        <div className="published">
          <input type="number"
            placeholder='Published in'
            name='published'
            value={updateBook.published}
            onChange={(e) => handleChange(e)}
          />
          <br />
          {errors.published && <span>{errors.published}</span>}
        </div>

        <div className="btn">
          <button type='submit' onClick={(e)=>handleSubmit(e)}>update</button>
        </div>
      </form>
    </div>
  )
}

export default UpdateBook