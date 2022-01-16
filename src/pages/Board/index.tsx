import { Header, Layout } from 'components';
import { BoardApp } from 'container';
import React from 'react';

const BoradPage = () => {
  return (
    <>
      <Header />
      <Layout>
        <h1 className="title">Passenger List</h1>
        <BoardApp />
      </Layout>
    </>
  );
};

export default BoradPage;
