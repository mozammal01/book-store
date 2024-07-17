import PropTypes from 'prop-types';

const Book = ({ book }) => {
  const { img, name, aName, category, rating } = book;
  return (
    <div className="card w-80 shadow-xl">
      <figure>
        <img src={img} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Author: {aName}</p>
        <p>Rating: {rating}</p>
        <p>Category: {category}</p>
        <div className='flex justify-between items-center'>
          <div className="card-actions">
            <button className="btn btn-primary text-white">Details</button>
          </div>
          <div className="flex flex-col gap-2 justify-end">
            <button className="btn w-20">Edit</button>
            <button className="btn w-20">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object
};

export default Book;