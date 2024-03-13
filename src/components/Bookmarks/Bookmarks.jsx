import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';

const Bookmarks = ({ bookmarks ,readingTime}) => {
    console.log(bookmarks)
    return (
        <div className="w-1/3 space-y-4">
            <div className="bg-[#1111110D] rounded-lg p-2 text-center">
                <h3 className="text-lg font-bold">Spent time on read : {readingTime}</h3>
            </div>
            <div className="bg-[#1111110D] rounded-lg p-5 space-y-4">
                <h1 className="text-3xl text-center">Bookmarks : {bookmarks.length}</h1>
                {
                    bookmarks.map((bookmark, index) => <Bookmark key={index} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes={
    bookmarks : PropTypes.array.isRequired ,
    readingTime : PropTypes.number
}

export default Bookmarks;