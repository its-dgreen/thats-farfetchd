import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "That's_Farfetch'd!.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>;
  }

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />;
};

export default Image;
