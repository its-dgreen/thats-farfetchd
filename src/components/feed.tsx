import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ReactAudioPlayer from 'react-audio-player';
import styled from 'styled-components';

const podcastQuery = graphql`
  query {
    podcast: allAnchorEpisode {
      edges {
        node {
          id
          title
          content
          enclosure {
            url
          }
        }
      }
    }
  }
`;

type Episode = {
  id: string;
  node: {
    title: string;
    enclosure: { url: string };
    content: string;
  };
};

const EpisodeWrapper = styled.article`
  background: #f9f9f9;
  padding: 1vh 1.5vw;
  margin-bottom: 1.5vh;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

const SectionWrapper = styled.section`
  max-width: 90%;
  margin: 0 auto;
`;

const Podcast = () => {
  const data = useStaticQuery(podcastQuery);

  return (
    <SectionWrapper>
      {data.podcast.edges.map((episode: Episode) => (
        <EpisodeWrapper key={episode.id}>
          <h3>Episode: {episode.node.title}</h3>
          <ReactAudioPlayer
            src={episode.node.enclosure.url}
            controls
            preload="none"
          />
          <div dangerouslySetInnerHTML={{ __html: episode.node.content }} />
        </EpisodeWrapper>
      ))}
    </SectionWrapper>
  );
};

export default Podcast;
