import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId, bookName, image, author, tags, category } = book
    return (
        <Link to={`/books/${bookId}`}>
            <div class="card bg-base-100 border-2 border-gray-200 p-6">

                <figure className='bg-gray-200 p-8 rounded-2xl'>
                    <img
                        src={image}
                        className='h-[166px]'
                        alt={bookName} />
                </figure>

                <div class="card-body">
                    <div className='flex items-center justify-center gap-3'>
                        {tags.map((tag, index) => <button key={index} class="btn btn-sm bg-green-100 text-green-500
        ">{tag}</button>)}
                    </div>
                    <h2 class="card-title">
                        {bookName}
                        <div class="badge badge-secondary">NEW</div>
                    </h2>
                    <p>By : {author}</p>
                    <div class="border-t-2 border-dashed mt-3 mb-3"></div>
                    <div class="card-actions justify-between items-center">
                        <div class="badge badge-outline">{category}</div>
                        <div class="rating">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-2"
                                class="mask mask-star-2 bg-orange-400"
                                checked="checked" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-100" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;