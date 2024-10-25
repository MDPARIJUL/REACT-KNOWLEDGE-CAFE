import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";
const Blogs = ({handleBookMarks, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([])
    console.log(blogs)
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(datas => setBlogs(datas))
    },[])
    return (
        <div className="md:w-2/3 ">
            <h3 className="text-4xl">Blogs {blogs.length}</h3>
            {blogs.map(blog=> <Blog 
                blog = {blog}
                key={blog.id}
                handleBookMarks = {handleBookMarks}
                handleMarkAsRead = {handleMarkAsRead}>
                </Blog>)}
        </div>
    );
};


Blogs.propTypes = {
    handleBookMarks:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}

export default Blogs;