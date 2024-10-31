import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {

    const { bookId } = useParams()
    const books = useLoaderData()
    const book = books.find(book => book.bookId === parseInt(bookId))
    const { image, bookName,author,review,category } = book
    return (
        <div class="hero bg-base-200 min-h-screen my-5 rounded-lg">
            <div class="hero-content flex-col lg:flex-row">
                <img
                    src={image}
                    class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">{bookName}</h1>
                    <p class="py-6">
                       By : {author}
                    </p>
<button className='btn btn-outline mr-4 btn-accent'>Read</button>
<button className='btn btn-accent'>Add to Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;