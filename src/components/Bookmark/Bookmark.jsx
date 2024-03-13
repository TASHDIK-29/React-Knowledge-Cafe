import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    console.log(bookmark)
    const {title} = bookmark;
    return (
        <div className="p-4 rounded-xl bg-white">
            <h3 className="text-2xl font-bold">{title}</h3>
        </div>
    );
};

Bookmark.propTypes={
    bookmark : PropTypes.object
}

export default Bookmark;