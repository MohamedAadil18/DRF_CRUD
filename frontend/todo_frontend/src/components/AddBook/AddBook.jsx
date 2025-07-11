import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddBook.css';

function AddBook() {

  const navigate = useNavigate()

  const [book, setBook] = useState({
    title: '',
    author: '',
    published: ''
  })
  
  const handleChange = (e) => {
    setBook({...book, [e.target.name] : e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (window.confirm("Are you sure want to add the given details?")){
      axios.post('http://127.0.0.1:8000/api/books/', book)
      .then(res => {
        setBook({title: '', author: '', published: ''})
        console.log(res.data.message)
        navigate('/')
      })
    }
  }

  return (
    <div className='form'>
      <form>
        <div className="title">
          <input type="text"
            placeholder='Title'
            name='title'
            value={book.title}
            onChange={(e) => handleChange(e)} />
        </div>

        <div className="author">
          <input type="text"
            placeholder='Author'
            name='author'
            value={book.author}
            onChange={(e) => handleChange(e)} />
        </div>

        <div className="published">
          <input type="number"
            placeholder='Published in'
            name='published'
            value={book.published}
            onChange={(e) => handleChange(e)} />
        </div>

        <div className="btn">
          <button onClick={(e)=>handleSubmit(e)}>Add</button>
        </div>
      </form>
    </div>
  )
}

export default AddBook