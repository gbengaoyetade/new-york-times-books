import React, { Component } from 'react';
import { arrayOf, object } from 'prop-types';
import Layout from '../components/layout';
import BestSellers from '../components/bestSellers';
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
      return (
        <div>
          <header>
            <h1>New York Times Best Sellers </h1>
          </header>
          <main>
            <BestSellers booksCategory={booksCategory} />
          </main>
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
