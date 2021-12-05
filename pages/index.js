import React, { Component } from 'react';
import { arrayOf, object } from 'prop-types';
import Layout from '../components/layout';
import BestSellers from '../components/bestSellers';
import makeInitialFetch from '../utils';

class Home extends Component {
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
    return <Layout>...</Layout>;
  }
}

export async function getServerSideProps() {
  try {
    const response = await makeInitialFetch();
    return { props: { booksCategory: response } };
  } catch (error) {
    return error;
  }
}

Home.propTypes = {
  booksCategory: arrayOf(object).isRequired,
};
export default Home;
