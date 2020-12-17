import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from './header';
import './layout.css';

interface Props {
  children?: ReactNode;
}

const MainWrapper = styled.main`
  margin: 0 auto;
  max-width: 50%;
  padding: 1.45rem 1.0875rem 1.45rem;
  background: #daded4;
  margin-bottom: 5vh;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  @media (max-width: 1024px) {
    max-width: 90%;
  }
`;

const Layout = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <MainWrapper>{children}</MainWrapper>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
