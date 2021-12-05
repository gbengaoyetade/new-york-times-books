import React from 'react';
import Head from 'next/head';

const Layout = (props) => {
  const { children } = props;

  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <title>New York Times API</title>
      </Head>
      <div className="background-image" />
      {children}
    </React.Fragment>
  );
};

export default Layout;
