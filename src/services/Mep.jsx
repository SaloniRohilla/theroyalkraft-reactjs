import React from 'react';
import styled from 'styled-components';

import mepImage from '/images/mep.png'; // Ensure the path is correct and the image exists

const Container = styled.div`
  padding: 12rem;
  background-color: #f5f5f5; /* Updated for a cohesive look */
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
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
    opacity: 0.8;
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

const MEPServices = () => {
  return (
    <Container>
      <Title>Mechanical, Electrical, and Plumbing (MEP) Services</Title>
      <ImageWrapper>
        <Image src={mepImage} alt="MEP Services" />
      </ImageWrapper>
      <ImageDescription>
        Our comprehensive MEP services ensure the efficient and safe operation of your banquet hall, providing a seamless experience for your events. 
        We specialize in tailored solutions for mechanical, electrical, and plumbing systems, ensuring your venue operates smoothly and meets all safety standards.
      </ImageDescription>
      <Description>
        Our expert team is dedicated to delivering top-notch services to ensure that your events are memorable and hassle-free.
      </Description>
    </Container>
  );
};

export default MEPServices;
