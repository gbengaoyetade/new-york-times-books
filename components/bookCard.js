import { string } from 'prop-types';

const BookCard = (props) => {
  const {
    imageUrl, amazonUrl, author, title,
  } = props;
  return (
    <div className="book-card">
      <img src={imageUrl} alt="book" />
      <div className="book-details">
        <p>
          <span>Title: </span>
          {title}
        </p>
        <p>
          <span>Author: </span>
          {author}
        </p>

        <p>
          <a href={amazonUrl} target="_blank" rel="noopener noreferrer">
            Buy book
          </a>
        </p>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  imageUrl: string.isRequired,
  amazonUrl: string.isRequired,
  author: string.isRequired,
  title: string.isRequired,
};
export default BookCard;
