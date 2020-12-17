import React from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 1.5vw;
  @media (max-width: 1440px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0.5vw;
    margin-bottom: 0;
  }
`;

const Links = () => {
  return (
    <StyledSection>
      <Button variant="outlined">Spotify</Button>
      <Button variant="outlined">Google Podcasts</Button>
      <Button variant="outlined">Anchor</Button>
      <Button variant="outlined">Breaker</Button>
      <Button variant="outlined">Pocket Casts</Button>
      <Button variant="outlined">RadioPublic</Button>
    </StyledSection>
  );
};

export default Links;
