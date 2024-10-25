import PropTypes from 'prop-types';
import {FaRegBookmark } from 'react-icons/fa';
const Blog = ({blog, handleBookMarks,handleMarkAsRead}) => {
    console.log(handleMarkAsRead)
    const {title, cover, author_img, reading_time, author, posted_date, hashtag} = blog
    // console.log(blog)
    return (
        <div className='mb-20 space-y-5'>
            <img src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between my-5'>
                <div className='flex items-center'>
                    <img src={author_img} alt="" />
                    <div className='ml-5'>
                        <h3>{author}</h3>
                        <h5>{posted_date}</h5>
                    </div>
                </div>
                <div>
                    <button onClick={()=>{handleBookMarks(blog)}} className='text-2xl'>{reading_time} min read <FaRegBookmark /></button>
                   
                </div>
            </div>
            <h2>{title}</h2>
            <p className='flex gap-x-4'>
                {hashtag.map((has,idx) => <span key={idx}><a href='' >{has}</a></span>)}
            </p>
            <button onClick={()=>{handleMarkAsRead(blog.reading_time)}}>Mark as Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookMarks:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}
export default Blog;