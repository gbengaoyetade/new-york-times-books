import React, { Component } from 'react';
import { arrayOf, object } from 'prop-types';
import Layout from '../components/layout';
import BookCard from '../components/bookCard';
import makeInitialFetch from '../utils';

class Home extends Component {
  static async getInitialProps() {
    try {
      const response = await makeInitialFetch();
      return { booksCategory: response };
    } catch (error) {
      return error;
    }
  }

  render() {
    const { booksCategory } = this.props;
    if (booksCategory) {
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
            <h2>{category.results.list_name}</h2>
            <div className="books-scroll">
              {bestSellers}
              <p>&nbsp;</p>
            </div>
          </div>
        );
      });

      return (
        <div>
          <header>
            <h1>New York Times Best Sellers </h1>
          </header>
          <main>{categories}</main>
        </div>
      );
    }
    return <Layout>Hello world</Layout>;
  }
}

Home.propTypes = {
  booksCategory: arrayOf(object).isRequired,
};
export default Home;
