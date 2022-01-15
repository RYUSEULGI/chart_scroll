import { Header, Layout } from 'components';
import { ChartApp } from 'container';
import React from 'react';

const ChartPage = () => {
  return (
    <>
      <Header />
      <Layout>
        <h1 className="title">User Report</h1>
        <ChartApp />
      </Layout>
    </>
  );
};

export default ChartPage;
