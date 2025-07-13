import './NavBar.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BookList from '../BookList/BookList';
import AddBook from '../AddBook/AddBook'
import UpdateBook from '../UpdateBook/UpdateBook'

function NavBar() {
    return (
        <>
        <div className="top-section">
            <div className="logo">
                <h1>Book Shelf</h1>
            </div>
        </div>
        <Router>
            <div className="book-shelf">
                <div className='navbar'>
                    <div className="logo">
                        <h1>Book</h1>
                    </div>
                    <div className="nav-items">
                        <ul>
                            <li><Link to='/' className='link'>Book List</Link></li>
                            <li><Link to='/addbook' className='link'>Add Book</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="content">
                    <Routes>
                        <Route path='/' element={<BookList />} />
                        <Route path='/addbook' element={<AddBook />} />
                        <Route path='/updatebook/:id' element={<UpdateBook />} />
                    </Routes>
                </div>
            </div>
        </Router>
        </>
    )
}

export default NavBar