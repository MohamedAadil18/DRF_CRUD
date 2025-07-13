import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './BookList.css'

function BookList() {

    const [books, setBooks] = useState([])
    const navigate = useNavigate()

    const fetchBook = ()=>{
        axios.get('http://127.0.0.1:8000/api/books/')
        .then(res => {
            setBooks(res.data.books)
        })
        .catch(err => {
            console.log("error occured : ",err)
        })
    }

    useEffect(() => {
        fetchBook()
    }, [])

    const handleUpdate = (id) => {
        navigate(`/updatebook/${id}`)
    }

    const deleteBook = (id) => {
        if(window.confirm("Are you sure want to delete? this action cannot be undone")){
            axios.delete(`http://127.0.0.1:8000/api/books/${id}/`)
            .then(res => {
                alert(res.data.message)
                fetchBook()
            })
        }
    }

    return (
        <div className='book-list'>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <div className="list-item">
                            <div className="title">
                                <p><b>Title : </b>{book.title}</p>
                            </div>
                            <div className="author">
                                <p><b>Author: </b>{book.author}</p>
                            </div>
                            <div className="published">
                                <p> <b>Published in: </b>{book.published}</p>
                            </div>
                        </div>
                        <div className="buttons">
                            <button className='update' onClick={()=>handleUpdate(book.id)}>Update</button>
                            <button className='del' onClick={()=>deleteBook(book.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BookList