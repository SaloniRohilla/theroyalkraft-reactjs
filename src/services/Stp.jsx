import React from 'react';
import styled from 'styled-components';

import stpImage from '/images/stp.jpeg'; // Ensure the path is correct and the image exists

const Container = styled.div`
  padding: 12rem;
  background-color: #f5f5f5; /* Updated for a cohesive look */
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: #333; /* Added color for better visibility */
`;

const Description = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 3rem;
  color: #666; /* Slightly lighter color for a softer look */
`;

const ImageWrapper = styled.div`
  width: 50%; /* Adjusted width */
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  margin: 0 auto; /* Center the image wrapper */

  @media (max-width: 768px) {
    width: 100%; /* Full width on smaller screens */
  }

  &:hover img {
    transform: scale(1.05);
    opacity: 0.8; /* Adjust opacity on hover */
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out; /* Smooth transition for scaling */
`;

const ImageDescription = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  color: #555;
  font-size: 1.5rem;
  padding: 0 1rem; /* Padding for better spacing */
`;

const Stp = () => {
  return (
    <Container>
      <Title>Sewage Treatment Plant (STP) Services</Title>
      <ImageWrapper>
        <Image src={stpImage} alt="Sewage Treatment Plant Services" />
      </ImageWrapper>
      <ImageDescription>
        Ensure efficient and eco-friendly waste management for your banquet hall with our comprehensive STP services. 
        Our expert team specializes in the design and implementation of state-of-the-art sewage treatment solutions tailored to meet the unique demands of large venues.
      </ImageDescription>
      <Description>
        Our services include regular maintenance and monitoring to ensure optimal operation and compliance with environmental standards. 
        Trust us to manage your waste effectively while prioritizing sustainability and cleanliness.
      </Description>
    </Container>
  );
};

export default Stp;
