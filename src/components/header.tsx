import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Image from './image';

const StyledHeader = styled.header`
  margin-bottom: 1.45rem;
`;

const StyledSection = styled.section`
  margin: 0 auto;
  max-width: 55%;
`;

const StyledH1 = styled.h1`
  max-width: 300px;
  margin-bottom: 1.45rem;
`;

const Header = () => (
  <StyledHeader>
    <StyledSection>
      <StyledH1>
        <Link to="/">
          <Image />
        </Link>
      </StyledH1>
    </StyledSection>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
