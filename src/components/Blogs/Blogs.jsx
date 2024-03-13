import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handelBookmark, handelMarkAsRead}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    } , [])





    return (
        <div className="w-2/3">
            {/* <h1 className="text-5xl">Blogs : {blogs.length}</h1> */}
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog} 
                    handelBookmark={handelBookmark}
                    handelMarkAsRead={handelMarkAsRead}>

                    </Blog>)
            }
        </div>
    );
};

Blogs.propTypes={
    handelBookmark : PropTypes.func.isRequired,
    handelMarkAsRead : PropTypes.func.isRequired
}

export default Blogs;