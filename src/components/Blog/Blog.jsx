import PropTypes from 'prop-types';
import { IoBookmarkOutline } from "react-icons/io5";

const Blog = ({ blog ,handelBookmark, handelMarkAsRead}) => {

    // console.log(blog);

    const { title, hashtags, reading_time, posted_date, author, author_img, id, cover } = blog;

    return (
        <div className='space-y-6 mb-16'>
            <img className='w-full rounded-lg' src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <img className='w-20' src={author_img} alt="" />
                    <div>
                        <h3>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex gap-2 text-xl'>
                    <h3>{reading_time} min read</h3>
                    <button onClick={()=> handelBookmark(blog)}><IoBookmarkOutline /></button>
                </div>
            </div>
            <h1 className='text-4xl font-bold mb-5'>{title}</h1>
            <div className='flex gap-5'>
                {
                    hashtags.map((hash, index) => <a key={index} href="">#{hash}</a> )
                }
            </div>
            <button onClick={()=> handelMarkAsRead(id, reading_time)} className='text-lg font-bold text-purple-800 underline'>Mark as Read</button>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handelBookmark: PropTypes.func.isRequired,
    handelMarkAsRead: PropTypes.func.isRequired
}

export default Blog;