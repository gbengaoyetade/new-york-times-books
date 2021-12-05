import React, { Component } from 'react';
import BestSellers from '../components/bestSellers';
import makeInitialFetch from '../utils';

class Home extends Component {
  render() {
    const { booksCategory } = this.props;
    if (!booksCategory) {
      return null;
    }

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
}

export async function getServerSideProps() {
  try {
    const response = await makeInitialFetch();
    return { props: { booksCategory: response } };
  } catch (error) {
    return error;
  }
}

export default Home;
