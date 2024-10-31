import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('./booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div className='mt-10 mb-10'>
            <h1 className="text-center text-4xl font-bold">Books</h1>
            <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    books.map(book => <Book key={books.id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;