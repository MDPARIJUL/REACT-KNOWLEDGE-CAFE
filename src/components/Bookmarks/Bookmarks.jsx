import React from 'react';
const Bookmarks = ({bookMarks,readingTime}) => {
    console.log(bookMarks)
    return (
        <div className='md:w-1/3'>
            <h3>Bookmarks {bookMarks.length}</h3>
            <h3>reading time: {readingTime}</h3>
            {bookMarks.map((bookMark,index) => (
                <div key={index} className='bg-slate-200 p-5 m-5'> 
                    <h3>{bookMark.author} </h3>
                    <h3>{bookMark.title} </h3>
                </div>
            ))}
        </div>
    );
};

export default Bookmarks;