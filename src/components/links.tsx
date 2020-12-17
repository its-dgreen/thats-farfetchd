import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0.5vw;
  @media (max-width: 1440px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    margin-bottom: 0;
  }
`;

// button from https://codepen.io/derekmorash/pen/XddZJY
const StyledButton = styled.a`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  height: 8vh;
  appearance: none;
  background-color: transparent;
  border: 2px solid #3c403d;
  color: #3c403d;
  border-radius: 0.6em;
  cursor: pointer;
  display: flex;
  align-self: center;
  font-size: 1rem;
  padding: 1vh 0.5vw;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  &:hover {
    outline: 0;
    box-shadow: 0 0 40px 40px #39603d inset;
    color: #dce1e3;
  }
`;

const StyledSpan = styled.span`
  margin: auto;
`;

const Links = () => {
  return (
    <StyledSection>
      <StyledButton
        href="https://open.spotify.com/show/1UUzMBk7vwttX00lBLsGap"
        rel="noreferrer"
        target="_blank"
      >
        <StyledSpan>Spotify</StyledSpan>
      </StyledButton>
      <StyledButton
        href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy80MjljODdhOC9wb2RjYXN0L3Jzcw=="
        rel="noreferrer"
        target="_blank"
      >
        <StyledSpan>Google Podcasts</StyledSpan>
      </StyledButton>
      <StyledButton
        href="https://anchor.fm/thats-farfetchd"
        rel="noreferrer"
        target="_blank"
      >
        <StyledSpan>Anchor.fm</StyledSpan>
      </StyledButton>
      <StyledButton
        href="https://www.breaker.audio/thats-farfetchd"
        rel="noreferrer"
        target="_blank"
      >
        <StyledSpan>Breaker</StyledSpan>
      </StyledButton>
      <StyledButton
        href="https://pca.st/cscuse5g"
        rel="noreferrer"
        target="_blank"
      >
        <StyledSpan>Pocket Casts</StyledSpan>
      </StyledButton>
      <StyledButton
        href="https://radiopublic.com/thats-farfetchd-G4yOJN"
        rel="noreferrer"
        target="_blank"
      >
        <StyledSpan>RadioPublic</StyledSpan>
      </StyledButton>
    </StyledSection>
  );
};

export default Links;
