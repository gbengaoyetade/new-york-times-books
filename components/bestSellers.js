import React, { Component, createRef } from 'react';
import { arrayOf, object } from 'prop-types';
import BookCard from './bookCard';

class BestSellers extends Component {
  constructor(props) {
    super(props);
    const { booksCategory } = this.props;
    booksCategory.forEach((category) => {
      this[category.results.display_name] = createRef();
      this[`${category.results.display_name}-l-btn`] = createRef();
      this[`${category.results.display_name}-r-btn`] = createRef();
    });
    this.handleRightClick = this.handleRightClick.bind(this);
    this.handleLeftClick = this.handleLeftClick.bind(this);
  }

  handleLeftClick(category) {
    this[`${category.results.display_name}-r-btn`].current.classList.remove(
      'hidden',
    );
    const scrollDiv = this[category.results.display_name].current;
    scrollDiv.scrollLeft -= scrollDiv.clientWidth;
    if (scrollDiv.scrollLeft === 0) {
      this[`${category.results.display_name}-l-btn`].current.classList.add(
        'hidden',
      );
    }
  }

  handleRightClick(category) {
    this[`${category.results.display_name}-l-btn`].current.classList.remove(
      'hidden',
    );
    const bookCardWidth = 350;
    const scrollDiv = this[category.results.display_name].current;
    scrollDiv.scrollLeft += scrollDiv.clientWidth;
    let booksDisplayed = Math.floor(scrollDiv.clientWidth / bookCardWidth);
    booksDisplayed += Math.floor(scrollDiv.scrollLeft / bookCardWidth);
    if (booksDisplayed === category.results.books.length) {
      this[`${category.results.display_name}-r-btn`].current.classList.add(
        'hidden',
      );
    }
  }

  render() {
    const { booksCategory } = this.props;
    const categories = booksCategory.map((category) => {
      const bestSellers = category.results.books.map((book) => (
        <BookCard
          imageUrl={book.book_image}
          amazonUrl={book.amazon_product_url}
          title={book.title}
          author={book.author}
          key={book.title}
        />
      ));
      return (
        <div key={category.results.display_name}>
          <h2 className="center">{category.results.display_name}</h2>
          <div className="books-scroll-wrapper">
            <button
              type="button"
              onClick={() => this.handleLeftClick(category)}
              className="arrow-button hidden"
              ref={this[`${category.results.display_name}-l-btn`]}
            >
              &larr;
            </button>
            <div
              className="books-scroll"
              ref={this[category.results.display_name]}
            >
              {bestSellers}
              <p>&nbsp;</p>
            </div>
            <button
              type="button"
              onClick={() => this.handleRightClick(category)}
              className="arrow-button"
              ref={this[`${category.results.display_name}-r-btn`]}
            >
              &rarr;
            </button>
          </div>
        </div>
      );
    });
    return <div>{categories}</div>;
  }
}

BestSellers.defaultProps = {
  booksCategory: [],
};
BestSellers.propTypes = {
  booksCategory: arrayOf(object),
};
export default BestSellers;
