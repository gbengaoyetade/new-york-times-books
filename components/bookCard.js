import { string } from 'prop-types';

const BookCard = (props) => {
  const { imageUrl, amazonUrl, author, title, description } = props;
  return (
    <div className="book-card">
      <div
        className="book-image-wrapper"
        book-description={
          description.length ? description : 'Book has no description'
        }
      >
        <img src={imageUrl} alt={title} />
      </div>

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
  description: string.isRequired,
};
export default BookCard;
