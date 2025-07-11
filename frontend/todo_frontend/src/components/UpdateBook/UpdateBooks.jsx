import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

function UpdateBooks() {

  const {id} = useParams()
  const navigate = useNavigate()

  const [updateBook, setupdateBook] = useState({
    title:'',
    author:'',
    published:''
  })

  useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/api/books/${id}/`)
    .then((res) => {
      setupdateBook(res.data.book)
    })
  },[id])

  const handleChange = (e) => {
    setupdateBook({...updateBook, [e.target.name]:e.target.value})
  } 

  const handleSubmit = (e) => {
    e.preventDefault()
    if(window.confirm("You are about to update an existing book record")){
      axios.put(`http://127.0.0.1:8000/api/books/${id}/`, updateBook)
      .then(res => {
        alert(res.data.message)
        navigate('/')
      })
    }
  }

  return (
    
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <div className="title">
          <input type="text"
            placeholder='Title'
            name='title'
            value={updateBook.title}
            onChange={(e) => handleChange(e)} 
          />
        </div>

        <div className="author">
          <input type="text"
            placeholder='Author'
            name='author'
            value={updateBook.author}
            onChange={(e) => handleChange(e)}
           />
        </div>

        <div className="published">
          <input type="number"
            placeholder='Published in'
            name='published'
            value={updateBook.published}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="btn">
          <button type='submit'>Add</button>
        </div>
      </form>
    </div>
  )
}

export default UpdateBooks