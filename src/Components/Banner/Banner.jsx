import React from 'react';
import bannerImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div class="hero bg-base-200 rounded-xl mt-10 mb-10 py-10">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img className='rounded-lg'
                    src={bannerImg} />
                <div className='space-y-7 '>
                    <h1 class="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;