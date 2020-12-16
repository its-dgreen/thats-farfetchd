import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Feed from '../components/feed';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Episodes:</h2>
    <Feed />
  </Layout>
);

export default IndexPage;
